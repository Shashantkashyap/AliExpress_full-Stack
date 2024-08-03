const mongoose = require("mongoose"); // Import mongoose for MongoDB object modeling
require("dotenv").config(); // Load environment variables from .env file

// Function to connect to the MongoDB database
const dbConnect = async () => {
  try {
    // Connect to MongoDB using the URI stored in environment variables
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB connected Successfully"); // Log a success message when connected
  } catch (err) {
    console.error("Error in DB connection", err); // Log any error that occurs during connection
  }
};

module.exports = dbConnect; // Export the dbConnect function for use in other files
