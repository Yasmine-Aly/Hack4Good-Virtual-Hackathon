// Variables to track income, expenses, and savings goal
let totalIncome = 0;
let totalExpenses = 0;
let savingsGoal = 0;
let balance = 0;

// Form Elements
const incomeForm = document.getElementById('income-form');
const expenseForm = document.getElementById('expense-form');
const savingsGoalInput = document.getElementById('savings-goal');
const setGoalButton = document.getElementById('set-goal');

// Summary Elements
const totalIncomeElement = document.getElementById('total-income');
const totalExpensesElement = document.getElementById('total-expenses');
const remainingBalanceElement = document.getElementById('remaining-balance');

// Savings Goal Elements
const goalAmountElement = document.getElementById('goal-amount');
const goalProgress = document.getElementById('goal-progress');

// Expense List Element
const expenseList = document.getElementById('expense-list');

// Add Income
incomeForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const incomeAmount = document.getElementById('income-amount').value;
    
    totalIncome += parseFloat(incomeAmount);
    balance += parseFloat(incomeAmount);
    
    updateSummary();
    incomeForm.reset();
});

// Add Expense
expenseForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const expenseAmount = document.getElementById('expense-amount').value;
    const expenseDescription = document.getElementById('expense-description').value;

    totalExpenses += parseFloat(expenseAmount);
    balance -= parseFloat(expenseAmount);
    
    updateSummary();
    addExpenseToList(expenseAmount, expenseDescription);
    expenseForm.reset();
});

// Set Savings Goal
setGoalButton.addEventListener('click', function() {
    savingsGoal = parseFloat(savingsGoalInput.value);
    goalAmountElement.textContent = savingsGoal;
    updateProgress();
});

// Update Summary and Balance
function updateSummary() {
    totalIncomeElement.textContent = totalIncome.toFixed(2);
    totalExpensesElement.textContent = totalExpenses.toFixed(2);
    remainingBalanceElement.textContent = balance.toFixed(2);
    updateProgress();
}

// Add Expense to List
function addExpenseToList(amount, description) {
    const listItem = document.createElement('li');
    listItem.textContent = `$${amount} - ${description}`;
    expenseList.appendChild(listItem);
}

// Update Savings Goal Progress
function updateProgress() {
    if (savingsGoal > 0) {
        const progressValue = Math.min((balance / savingsGoal) * 100, 100);
        goalProgress.value = progressValue;
    }
}
