const express = require('express');
const router = express.Router();
const expenseController = require('../controller/expense');

// Get all expenses
router.get('/', expenseController.getAllExpenses);

// Create a new expense
router.post('/', expenseController.createExpense);

module.exports = router;