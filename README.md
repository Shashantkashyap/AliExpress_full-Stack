
# AliExpress App

Welcome to the AliExpress App! This app is designed to provide a seamless shopping experience on AliExpress, offering a user-friendly interface, easy navigation, and a range of features to enhance your online shopping .

### Table of Contents
-  Features
- Installation
- Documentation
   - Frontend
   - Backend
   - API Routes



- Usage
- Screenshots
- Contributing
- License
- Contact
## Features

- Browse Products: Explore a wide range of products across various categories.
- Search Functionality: Quickly find products with advanced search options.
- Product Details: View detailed information about each product, including price, reviews, and specifications.
- Add to Cart: Easily add items to your cart and proceed to checkout.
- Order Tracking: Keep track of your orders and receive updates on delivery status.
- Wishlist: Save products to your wishlist for future reference.
- Notifications: Receive notifications about deals, discounts, and order updates.


## Installation

Install my-project with npm

### Prerequisites

- Ensure you have Node.js and npm installed on your machine.

### Steps :
- Ensure you have Node.js and npm installed on your machine.

1. Clone the repository :
```bash
  git clone https://github.com/your-username/aliexpress-app.git
```
2. Navigate to the project directory :
```bash
  cd AliExpress
```
3. Install the required dependencies :
```bash
  npm install
```
4. Start the development server :
```bash
  npm run dev
```
5. Open your browser and navigate to http://localhost:5173 to view the app.
    
## Documentation

### Frontend
The frontend of the AliExpress App is built using Vite for fast development and hot module replacement.

#### Key Libraries & Tools:

- React: A JavaScript library for building user interfaces.
- Redux Toolkit: Manages the application state, specifically storing the product ID and handling cart state.
- React Router DOM: Manages navigation and routing within the app.
- Bootstrap: Used for responsive UI components.
- FontAwesome: Provides a collection of SVG icons used throughout the app.
- Firebase: Used for authentication and data storage.
- React Hot Toast: Provides notifications and alerts within the app.

#### Frontend Features:

- Home Page
- Cart Page: Manage and view the items added to your cart.
- Product Description Page: View detailed information about a specific product.
- Search Functionality: Allows users to search for products across categories.

### Backend
The backend is built using Express, a minimal and flexible Node.js web application framework.

#### Key Libraries & Tools:
- Express: Handles server-side logic and routing.
- Mongoose: Manages data modeling and interaction with MongoDB.
- JSON Web Token (JWT): Used for authentication and secure data exchange.
- bcrypt: Hashes passwords to secure user data.
- Nodemailer: Sends email notifications, such as OTPs for account verification.
- Express Validator: Validates and sanitizes user input in routes.
- Cors: Handles Cross-Origin Resource Sharing to allow the frontend to communicate with the backend.
- Nodemon: Monitors changes in the codebase and automatically restarts the server.

#### Backend Features:
- Authentication: User signup and login with validation and JWT-based authentication.
- Cart Management: Add, view, and delete items in the user's cart.
- MongoDB: Used to store user data, product information, and cart details.

### API Routes
Here are the key API routes used in the app:

#### Product Routes:
- GET /getAllProduct: Fetches all available products.
#### Cart Routes
- POST /cart/add: Adds an item to the cart.
- POST /cart: Retrieves the user's cart.
- DELETE /cart/delete: Deletes an item from the cart.
#### Authentication Routes
- POST /signup: Registers a new user, with validations for name, email, password, and OTP.
- POST /login: Authenticates a user with email and password.


## Usage

- Home Screen: Browse featured products, popular categories, and current deals.
- Search Bar: Use the search bar at the top to find specific items.
- Product Page: Click on a product to view its details, add it to your cart, or add it to your wishlist.
- Cart: Access your cart by clicking the cart icon in the top-right corner, where you can manage items and proceed to checkout.
- Account: Log in to your account to view your order history, manage your wishlist, and update your profile settings.


## Contributing

We welcome contributions to the AliExpress App! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes and commit them (`git commit -m 'Add some feature`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request and describe your changes.
## API Reference

https://grey-space-839917.postman.co/workspace/Shashant~d000b598-7f7a-4056-8fba-9d7f5430ba25/collection/29320905-b5c8de90-ae8c-4655-96e7-b9c5d7162558?action=share&creator=29320905


## License

This project is licensed under the MIT License. See the LICENSE file for more details.
