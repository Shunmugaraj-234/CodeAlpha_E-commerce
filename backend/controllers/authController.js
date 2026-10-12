import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';

// In-memory fallback array when MongoDB service is unreachable
let inMemoryUsers = [
  {
    _id: 'admin_default_id',
    name: 'SeedShop Admin',
    email: 'admin@seedshop.com',
    phone: '1234567890',
    passwordHash: bcrypt.hashSync('adminpassword123', 10),
    role: 'admin'
  }
];

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'seedshop_secret_jwt_key_2026_super_secure', {
    expiresIn: '30d'
  });
};

export const registerUser = async (req, res) => {
  try {
    const { name, email, phone, password, confirmPassword } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    if (confirmPassword && password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email address format' });
    }

    try {
      const userExists = await User.findOne({ email: email.toLowerCase() });
      if (userExists) {
        return res.status(400).json({ message: 'User with this email already exists' });
      }

      const user = await User.create({
        name,
        email: email.toLowerCase(),
        phone: phone || '',
        password,
        role: 'user'
      });

      return res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        token: generateToken(user._id)
      });
    } catch (dbErr) {
      // Fallback in-memory registration if DB offline
      const exists = inMemoryUsers.find(u => u.email === email.toLowerCase());
      if (exists) {
        return res.status(400).json({ message: 'User with this email already exists' });
      }
      const salt = bcrypt.genSaltSync(10);
      const passwordHash = bcrypt.hashSync(password, salt);
      const newUser = {
        _id: 'usr_' + Date.now(),
        name,
        email: email.toLowerCase(),
        phone: phone || '',
        passwordHash,
        role: 'user'
      };
      inMemoryUsers.push(newUser);
      return res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
        role: newUser.role,
        token: generateToken(newUser._id)
      });
    }
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ message: error.message || 'Server error during registration' });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Please enter both email and password' });
    }

    // 1. Try DB lookup
    try {
      const user = await User.findOne({ email: email.toLowerCase() });
      if (user && (await user.matchPassword(password))) {
        return res.json({
          _id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          role: user.role,
          token: generateToken(user._id)
        });
      }
    } catch (dbErr) {
      console.warn('DB login error, falling back to memory:', dbErr.message);
    }

    // 2. Try Memory lookup
    const memUser = inMemoryUsers.find(u => u.email === email.toLowerCase());
    if (memUser && bcrypt.compareSync(password, memUser.passwordHash)) {
      return res.json({
        _id: memUser._id,
        name: memUser.name,
        email: memUser.email,
        phone: memUser.phone,
        role: memUser.role,
        token: generateToken(memUser._id)
      });
    }

    return res.status(401).json({ message: 'Invalid email or password' });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error during login' });
  }
};

export const getUserProfile = async (req, res) => {
  try {
    const user = req.user;
    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (user) {
      user.name = req.body.name || user.name;
      user.phone = req.body.phone !== undefined ? req.body.phone : user.phone;
      const updatedUser = await user.save();
      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        phone: updatedUser.phone,
        role: updatedUser.role
      });
    } else {
      // In-memory fallback
      req.user.name = req.body.name || req.user.name;
      req.user.phone = req.body.phone !== undefined ? req.body.phone : req.user.phone;
      res.json(req.user);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const changeUserPassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    if (!oldPassword || !newPassword) {
      return res.status(400).json({ message: 'Please provide old and new password' });
    }
    if (newPassword.length < 6) {
      return res.status(400).json({ message: 'New password must be at least 6 characters' });
    }

    const user = await User.findById(req.user._id);
    if (user) {
      const isMatch = await user.matchPassword(oldPassword);
      if (!isMatch) {
        return res.status(400).json({ message: 'Incorrect existing password' });
      }
      user.password = newPassword;
      await user.save();
      return res.json({ message: 'Password updated successfully' });
    }
    res.status(400).json({ message: 'User profile not found' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
