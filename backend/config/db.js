import mongoose from 'mongoose';
import Product from '../models/Product.js';
import User from '../models/User.js';
import { initialProducts } from './seedData.js';

let isConnected = false;

export const connectDB = async () => {
  const connUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/seedshop';
  try {
    const conn = await mongoose.connect(connUri, {
      serverSelectionTimeoutMS: 3000
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    isConnected = true;

    // Always refresh product catalog to ensure Sabja, Chia, Pumpkin seeds and distinct images are present
    await Product.deleteMany({});
    await Product.insertMany(initialProducts);
    console.log('Database catalog re-seeded with updated seed products (Sabja, Chia, Pumpkin, etc.)!');

    // Seed default admin user if missing
    const adminExists = await User.findOne({ email: 'admin@seedora.com' }) || await User.findOne({ email: 'admin@seedshop.com' });
    if (!adminExists) {
      await User.create({
        name: 'Seedora Admin',
        email: 'admin@seedora.com',
        password: 'adminpassword123',
        phone: '9876543210',
        role: 'admin'
      });
      console.log('Default admin user created: admin@seedora.com / adminpassword123');
    }
  } catch (error) {
    console.warn(`MongoDB Connection Warning: ${error.message}. Running in hybrid/fallback mode with memory store.`);
    isConnected = false;
  }
};

export const isDBConnected = () => isConnected;
