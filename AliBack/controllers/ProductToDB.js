/*const express = require("express");
const mongoose = require("mongoose");
const Product = require("../models/productModel");
const router = express.Router();

// Route to get all products from the database
router.get("/getAllProduct", async (req, res) => {
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
});

module.exports = router;

const insertData = async () => {
    try {
        await Product.insertMany(productData);
        console.log('Product data inserted successfully');
    } catch (error) {
        console.log('Error inserting product data:', error);
    } finally {
        mongoose.connection.close();
    }
};

module.exports = insertData ;

*/

