import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: [
      'Vegetable Seeds',
      'Flower Seeds',
      'Fruit Seeds',
      'Herb Seeds',
      'Organic Seeds',
      'Flowering Plants',
      'Gardening Seeds'
    ]
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: 0
  },
  originalPrice: {
    type: Number,
    min: 0
  },
  image: {
    type: String,
    required: [true, 'Image URL is required']
  },
  rating: {
    type: Number,
    default: 4.5,
    min: 0,
    max: 5
  },
  stock: {
    type: Number,
    required: [true, 'Stock is required'],
    min: 0,
    default: 50
  },
  brand: {
    type: String,
    default: 'GreenThumb Organics'
  },
  season: {
    type: String,
    default: 'Spring / Summer'
  },
  soilType: {
    type: String,
    default: 'Well-draining, rich loamy soil'
  },
  growingInstructions: {
    type: String,
    default: 'Sow seeds 1/4 inch deep in warm moist soil. Provide at least 6 hours of direct sunlight daily and water regularly.'
  }
}, {
  timestamps: true
});

const Product = mongoose.model('Product', productSchema);
export default Product;
