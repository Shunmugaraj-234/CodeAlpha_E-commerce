import Order from '../models/Order.js';
import Product from '../models/Product.js';

let inMemoryOrders = [];

export const createOrder = async (req, res) => {
  try {
    const { items, shippingAddress, paymentMethod, upiId, couponCode, discountAmount } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: 'No order items provided' });
    }
    if (!shippingAddress || !shippingAddress.address || !shippingAddress.city || !shippingAddress.pincode) {
      return res.status(400).json({ message: 'Incomplete shipping address' });
    }

    // Verify stock and calculate subtotal on backend
    let subtotal = 0;
    const verifiedItems = [];

    for (const item of items) {
      const prodId = item.id || item._id || item.product;
      let dbProd;

      try {
        dbProd = await Product.findById(prodId);
      } catch (err) {}

      if (dbProd) {
        if (dbProd.stock < item.quantity) {
          return res.status(400).json({
            message: `Insufficient stock for ${dbProd.name}. Available: ${dbProd.stock}, Requested: ${item.quantity}`
          });
        }
        subtotal += dbProd.price * item.quantity;
        verifiedItems.push({
          product: dbProd._id,
          name: dbProd.name,
          price: dbProd.price,
          quantity: item.quantity,
          image: dbProd.image
        });
      } else {
        const price = Number(item.price);
        subtotal += price * item.quantity;
        verifiedItems.push({
          product: prodId,
          name: item.name,
          price: price,
          quantity: item.quantity,
          image: item.image
        });
      }
    }

    const appliedDiscount = Number(discountAmount || 0);
    const discountedSubtotal = Math.max(0, subtotal - appliedDiscount);
    const deliveryCharge = discountedSubtotal >= 499 || subtotal === 0 ? 0 : 49;
    const totalAmount = Number((discountedSubtotal + deliveryCharge).toFixed(2));

    try {
      const order = new Order({
        user: req.user._id,
        items: verifiedItems,
        shippingAddress,
        paymentMethod: paymentMethod || 'Cash on Delivery',
        upiId: upiId || '',
        couponCode: couponCode || '',
        discountAmount: appliedDiscount,
        subtotal: Number(subtotal.toFixed(2)),
        deliveryCharge,
        totalAmount,
        orderStatus: 'Confirmed'
      });

      const createdOrder = await order.save();

      // Deduct product stock
      for (const item of verifiedItems) {
        try {
          await Product.findByIdAndUpdate(item.product, {
            $inc: { stock: -item.quantity }
          });
        } catch (err) {}
      }

      inMemoryOrders.unshift(createdOrder);
      return res.status(201).json(createdOrder);
    } catch (dbErr) {
      const fallbackOrder = {
        _id: 'ord_' + Date.now(),
        user: req.user._id || 'user_demo',
        items: verifiedItems,
        shippingAddress,
        paymentMethod: paymentMethod || 'Cash on Delivery',
        upiId: upiId || '',
        couponCode: couponCode || '',
        discountAmount: appliedDiscount,
        subtotal: Number(subtotal.toFixed(2)),
        deliveryCharge,
        totalAmount,
        orderStatus: 'Confirmed',
        createdAt: new Date()
      };
      inMemoryOrders.unshift(fallbackOrder);
      return res.status(201).json(fallbackOrder);
    }
  } catch (error) {
    console.error('createOrder error:', error);
    res.status(500).json({ message: error.message || 'Error processing order' });
  }
};

export const getMyOrders = async (req, res) => {
  try {
    try {
      const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
      if (orders && orders.length > 0) return res.json(orders);
    } catch (dbErr) {}

    const myOrders = inMemoryOrders.filter(o => o.user.toString() === req.user._id.toString());
    return res.json(myOrders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOrderById = async (req, res) => {
  try {
    try {
      const order = await Order.findById(req.params.id).populate('user', 'name email');
      if (order) {
        if (order.user._id.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
          return res.status(403).json({ message: 'Not authorized to view this order' });
        }
        return res.json(order);
      }
    } catch (dbErr) {}

    const order = inMemoryOrders.find(o => o._id.toString() === req.params.id);
    if (order) {
      return res.json(order);
    }

    res.status(404).json({ message: 'Order not found' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const cancelOrder = async (req, res) => {
  try {
    try {
      const order = await Order.findById(req.params.id);
      if (order) {
        if (order.user.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
          return res.status(403).json({ message: 'Not authorized to cancel this order' });
        }

        if (order.orderStatus === 'Delivered' || order.orderStatus === 'Cancelled') {
          return res.status(400).json({ message: `Cannot cancel an order with status: ${order.orderStatus}` });
        }

        order.orderStatus = 'Cancelled';
        await order.save();

        // Restore stock
        for (const item of order.items) {
          try {
            await Product.findByIdAndUpdate(item.product, {
              $inc: { stock: item.quantity }
            });
          } catch (e) {}
        }

        return res.json({ message: 'Order cancelled successfully', order });
      }
    } catch (dbErr) {}

    const order = inMemoryOrders.find(o => o._id.toString() === req.params.id);
    if (order) {
      order.orderStatus = 'Cancelled';
      return res.json({ message: 'Order cancelled successfully', order });
    }

    res.status(404).json({ message: 'Order not found' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    try {
      const orders = await Order.find().populate('user', 'name email').sort({ createdAt: -1 });
      if (orders && orders.length > 0) return res.json(orders);
    } catch (dbErr) {}

    return res.json(inMemoryOrders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    if (!status) return res.status(400).json({ message: 'Status is required' });

    try {
      const order = await Order.findById(req.params.id);
      if (order) {
        order.orderStatus = status;
        const updated = await order.save();
        return res.json(updated);
      }
    } catch (dbErr) {}

    const order = inMemoryOrders.find(o => o._id.toString() === req.params.id);
    if (order) {
      order.orderStatus = status;
      return res.json(order);
    }

    res.status(404).json({ message: 'Order not found' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
