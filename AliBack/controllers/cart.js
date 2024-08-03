const Cart = require('../models/Cart');
const Product = require('../models/productModel');
const User = require('../models/UserModel');

// Add item to cart
const addToCart = async (req, res) => {
  const { email, productId, quantity } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const userId = user._id;
    const product = await Product.findOne({ id: productId });
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    const productMongoId = product._id;
    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      cart = new Cart({ user: userId, items: [] });
    }

    const existingItem = cart.items.find(item => item.product.equals(productMongoId));
    if (existingItem) {
      existingItem.quantity += quantity;
      existingItem.price = product.price;
    } else {
      cart.items.push({
        product: productMongoId,
        quantity,
        price: product.price,
      });
    }

    await cart.save();
    return res.status(200).json({ success: true, message: 'Item added to cart', cart });
  } catch (error) {
    console.error('Error adding to cart:', error.message);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Get user's cart
const getCart = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, message: 'Email is required' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const userId = user._id;
    const cart = await Cart.findOne({ user: userId }).populate('items.product');
    if (!cart) {
      return res.status(404).json({ success: false, message: 'Cart not found' });
    }

    return res.status(200).json({ success: true, cart });
  } catch (error) {
    console.error('Error fetching cart:', error.message);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Delete item from cart
const deleteFromCart = async (req, res) => {
  const { email, productId } = req.body;

  if (!email || !productId) {
    return res.status(400).json({ success: false, message: 'Email and product ID are required' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const userId = user._id;
    const product = await Product.findOne({ id: productId });
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    const productMongoId = product._id;
    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({ success: false, message: 'Cart not found' });
    }

    const itemIndex = cart.items.findIndex(item => item.product.equals(productMongoId));
    if (itemIndex === -1) {
      return res.status(404).json({ success: false, message: 'Product not found in cart' });
    }

    cart.items.splice(itemIndex, 1);
    await cart.save();
    return res.status(200).json({ success: true, message: 'Item removed from cart', cart });
  } catch (error) {
    console.error('Error deleting item from cart:', error.message);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

const getAllProduct = async(req, res)=> {
  try {
      // Fetch all products from the database
      const products = await Product.find();

      // Send the products as a JSON response
      res.status(200).json(products);
  } catch (error) {
      // Handle any errors that occur during the database query
      console.error("Error fetching products:", error);
      res.status(500).json({ message: "Server error. Unable to fetch products." });
  }
};


module.exports = {
  addToCart,
  getCart,
  deleteFromCart,
  getAllProduct
};
