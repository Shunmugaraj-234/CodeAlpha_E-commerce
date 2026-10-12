import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true, min: 1 },
  image: { type: String }
});

const shippingAddressSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pincode: { type: String, required: true }
});

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [orderItemSchema],
  shippingAddress: shippingAddressSchema,
  paymentMethod: {
    type: String,
    enum: ['Cash on Delivery', 'UPI', 'Credit/Debit Card', 'Net Banking', 'Online Payment', 'UPI Payment'],
    default: 'Cash on Delivery'
  },
  upiId: { type: String, default: '' },
  couponCode: { type: String, default: '' },
  discountAmount: { type: Number, default: 0 },
  subtotal: { type: Number, required: true },
  deliveryCharge: { type: Number, default: 0 },
  totalAmount: { type: Number, required: true },
  orderStatus: {
    type: String,
    enum: ['Pending', 'Confirmed', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
    default: 'Pending'
  }
}, {
  timestamps: true
});

const Order = mongoose.model('Order', orderSchema);
export default Order;
