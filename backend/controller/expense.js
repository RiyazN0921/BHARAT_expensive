const Expense = require('../models/expense');

exports.getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createExpense = async (req, res) => {
  const { description, amount, type } = req.body;

  try {
    const expense = await Expense.create({ description, amount, type });
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};