async function fetchExpenses() {
    const response = await fetch('http://localhost:9900/api/expense');
    const expenses = await response.json();
  
    const expensesList = document.getElementById('expenses-list');
    expensesList.innerHTML = '';
  
    expenses.forEach((expense) => {
      const listItem = document.createElement('div');
      listItem.className = 'expense-item';
      listItem.innerHTML = `<strong>${expense.description}</strong>: $${expense.amount} (${expense.type})`;
      expensesList.appendChild(listItem);
    });
  }
  
  async function addExpense() {
    const description = document.getElementById('description').value;
    const amount = document.getElementById('amount').value;
    const type = document.getElementById('type').value;
  
    const response = await fetch('http://localhost:9900/api/expense', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description, amount, type }),
    });
  
    if (response.ok) {
      console.log('Expense added successfully');
      fetchExpenses();
    } else {
      console.error('Failed to add expense');
    }
  }
  document.addEventListener('DOMContentLoaded', fetchExpenses);
  