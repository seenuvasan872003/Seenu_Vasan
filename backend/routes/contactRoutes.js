const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// POST /api/contact
router.post('/contact', contactController.submitContactForm);

// GET /api/contact - get all contacts
router.get('/contact', contactController.getAllContacts);

module.exports = router;
