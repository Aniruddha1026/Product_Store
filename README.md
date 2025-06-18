## 🧾 Project Overview

The MERN Product Store is a full-stack e-commerce-like application that allows users to browse products and admins to manage them through an interactive interface.

### 🧠 Purpose
To demonstrate full-stack development using the MERN stack with real-world functionalities such as image uploads, CRUD operations, and a decoupled frontend-backend system.

This project is perfect for learning:
- How to build REST APIs
- How frontend and backend communicate
- Image and data handling in MongoDB

## ✨ Core Features

### 🧑‍💻 Admin Features
- Add new products with name, description, price, and image
- Update existing product details
- Delete products
- View product list with images

### 🧑‍🤝‍🧑 User Features
- Browse all available products
- View product image, name, and price
- Responsive UI for all screen sizes

### 🔗 API Endpoints (RESTful)
- `GET /api/products` - Fetch all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Add new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### 🖼️ Image Handling
- Product images stored and served from local filesystem or GridFS
- File upload using `multer` (or similar middleware)

## 🔮 Future Enhancements

- 🔐 Add user authentication (JWT)
- 🛒 Implement shopping cart functionality
- 🧾 Add order tracking
- ☁️ Deploy on Render (backend) + Vercel (frontend)
- 📦 Add stock quantity and availability filters

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
![Made with MERN](https://img.shields.io/badge/MERN-FullStack-blue)
