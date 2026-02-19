const express = require('express');
const cors = require('cors');
require('dotenv').config();
const pool = require('./database'); 
const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.json({ message: "Welcome to the API" });
});

// Products routes
app.use('/products', productsRouter);

// Users routes
app.use('/users', usersRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});