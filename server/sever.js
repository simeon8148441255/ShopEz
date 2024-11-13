import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const port = 6001;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myEcommerceDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Connection error', error));

// Define a Schema and Model
const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
});

const Product = mongoose.model('Product', productSchema);

// API Endpoint to Get Products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Start Server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
