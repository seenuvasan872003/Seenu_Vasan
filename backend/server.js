require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Import Modules
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check Route
app.get('/', (req, res) => {
    res.status(200).json({ success: true, message: 'Portfolio Backend API is running 🚀', routes: { contact: '/api/contact' } });
});

// Routes
app.use('/api', contactRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
