const express = require('express');
const router = express.Router();
const { addToCart, getCart, deleteFromCart, getAllProduct } = require('../controllers/cart');


router.get("/getAllProduct", getAllProduct)

// Route to add an item to the cart
router.post('/cart/add', addToCart);

// Route to get the user's cart
router.post('/cart', getCart);

// Route to delete an item from the cart
router.delete('/cart/delete', deleteFromCart);



module.exports = router;