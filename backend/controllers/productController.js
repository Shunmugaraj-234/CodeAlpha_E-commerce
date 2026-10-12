import Product from '../models/Product.js';
import { initialProducts } from '../config/seedData.js';

// In-memory fallback product dataset
let inMemoryProducts = initialProducts.map((p, index) => ({
  ...p,
  _id: 'seed_prod_' + (index + 1),
  createdAt: new Date()
}));

export const getProducts = async (req, res) => {
  try {
    const { search, category, minPrice, maxPrice, sortBy } = req.query;

    let query = {};

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { category: { $regex: search, $options: 'i' } }
      ];
    }

    if (category && category !== 'All') {
      query.category = category;
    }

    if (minPrice !== undefined || maxPrice !== undefined) {
      query.price = {};
      if (minPrice !== undefined && minPrice !== '') query.price.$gte = Number(minPrice);
      if (maxPrice !== undefined && maxPrice !== '') query.price.$lte = Number(maxPrice);
    }

    let sortOption = { createdAt: -1 };
    if (sortBy === 'price_asc') sortOption = { price: 1 };
    if (sortBy === 'price_desc') sortOption = { price: -1 };
    if (sortBy === 'rating') sortOption = { rating: -1 };
    if (sortBy === 'name') sortOption = { name: 1 };

    try {
      const products = await Product.find(query).sort(sortOption);
      if (products && products.length > 0) {
        return res.json(products);
      }
    } catch (dbErr) {
      // Continue to fallback
    }

    // Fallback filter over inMemoryProducts
    let filtered = [...inMemoryProducts];
    if (search) {
      const q = search.toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }
    if (category && category !== 'All') {
      filtered = filtered.filter(p => p.category === category);
    }
    if (minPrice !== undefined && minPrice !== '') {
      filtered = filtered.filter(p => p.price >= Number(minPrice));
    }
    if (maxPrice !== undefined && maxPrice !== '') {
      filtered = filtered.filter(p => p.price <= Number(maxPrice));
    }

    if (sortBy === 'price_asc') filtered.sort((a, b) => a.price - b.price);
    if (sortBy === 'price_desc') filtered.sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') filtered.sort((a, b) => b.rating - a.rating);
    if (sortBy === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));

    return res.json(filtered);
  } catch (error) {
    console.error('getProducts error:', error);
    res.status(500).json({ message: 'Error fetching products' });
  }
};

export const getProductById = async (req, res) => {
  try {
    try {
      const product = await Product.findById(req.params.id);
      if (product) return res.json(product);
    } catch (dbErr) {}

    const product = inMemoryProducts.find(p => p._id.toString() === req.params.id);
    if (product) return res.json(product);

    res.status(404).json({ message: 'Product not found' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const {
      name, category, description, price, image, rating, stock, brand, season, soilType, growingInstructions
    } = req.body;

    if (!name || !category || !price || !image) {
      return res.status(400).json({ message: 'Name, category, price, and image are required fields' });
    }

    try {
      const product = await Product.create({
        name,
        category,
        description: description || 'High-quality seeds for home gardens.',
        price: Number(price),
        image,
        rating: rating ? Number(rating) : 4.5,
        stock: stock !== undefined ? Number(stock) : 50,
        brand: brand || 'GreenThumb Organics',
        season: season || 'Spring / Summer',
        soilType: soilType || 'Well-draining rich soil',
        growingInstructions: growingInstructions || 'Sow 1/4 inch deep in sunny soil and water regularly.'
      });
      inMemoryProducts.unshift(product);
      return res.status(201).json(product);
    } catch (dbErr) {
      const newProd = {
        _id: 'prod_' + Date.now(),
        name,
        category,
        description: description || 'High-quality seeds for home gardens.',
        price: Number(price),
        image,
        rating: rating ? Number(rating) : 4.5,
        stock: stock !== undefined ? Number(stock) : 50,
        brand: brand || 'GreenThumb Organics',
        season: season || 'Spring / Summer',
        soilType: soilType || 'Well-draining rich soil',
        growingInstructions: growingInstructions || 'Sow 1/4 inch deep in sunny soil and water regularly.',
        createdAt: new Date()
      };
      inMemoryProducts.unshift(newProd);
      return res.status(201).json(newProd);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    try {
      const product = await Product.findById(req.params.id);
      if (product) {
        Object.assign(product, req.body);
        const updatedProduct = await product.save();
        return res.json(updatedProduct);
      }
    } catch (dbErr) {}

    const index = inMemoryProducts.findIndex(p => p._id.toString() === req.params.id);
    if (index !== -1) {
      inMemoryProducts[index] = { ...inMemoryProducts[index], ...req.body };
      return res.json(inMemoryProducts[index]);
    }

    res.status(404).json({ message: 'Product not found' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    try {
      const product = await Product.findById(req.params.id);
      if (product) {
        await product.deleteOne();
        inMemoryProducts = inMemoryProducts.filter(p => p._id.toString() !== req.params.id);
        return res.json({ message: 'Product removed successfully' });
      }
    } catch (dbErr) {}

    const index = inMemoryProducts.findIndex(p => p._id.toString() === req.params.id);
    if (index !== -1) {
      inMemoryProducts.splice(index, 1);
      return res.json({ message: 'Product removed successfully' });
    }

    res.status(404).json({ message: 'Product not found' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
