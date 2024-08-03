const mongoose = require("mongoose");

const sellerInfoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    location: { type: String, required: true },
  },
  { _id: false }
);

const productSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  images: { type: [String], required: true },
  seller_info: { type: sellerInfoSchema, required: true },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
