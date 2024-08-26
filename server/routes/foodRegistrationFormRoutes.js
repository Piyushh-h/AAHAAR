// ngoRegistrationFormRoutes.js
const express = require('express');
const router = express.Router();
const foodbanksFormController = require('../controllers/foodbanksFormController');

// Handle FoodbanksForm submissions
router.post('/register', foodbanksFormController.submitFoodbanksForm);

module.exports = router;
