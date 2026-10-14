let transactions = [
  {
    id: 1,
    date: "2026-10-09",
    amount: -440,
    status: "Success",
    type: "expense",
  },

  {
    id: 2,
    date: "2026-03-21",
    amount: -440,
    status: "Success",
    type: "expense",
  },

  {
    id: 3,
    date: "2026-05-13",
    amount: -440,
    status: "Success",
    type: "expense",
  },
];

let monthlyIncome = 5000;
let monthlyExpenses = 1875.76;

const today = new Date().toISOString().split('T')[0]
document.getElementById('incomeDate').value = today
document.getElementById('expenseDate').value = today

function openIncomeModal() {
  document.getElementById('incomeModal').style.display = 'block'
  document.body.style.overflow = 'hidden'
}

function openExpenseModal() {
  document.getElementById('expenseModal').style.display = 'block'
  document.body.style.overflow = 'hidden'
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none'
  document.body.style.overflow = 'auto'

  if (modalId === 'incomeModal') {
    document.getElementById('incomeForm').reset()
    document.getElementById('incomeDate').value = today
  } else {
    document.getElementById('expenseForm').reset()
    document.getElementById('expenseDate').value = today
  }
}

window.onclick = function (event) {
  const incomeModal = document.getElementById('incomeModal')
  const expenseModal = document.getElementById('expenseModal')

  if (event.target === incomeModal) {
    closeModal('incomeModal')
  }

  if (event.target === expenseModal) {
    closeModal('expenseModal')
  }
}

function addIncome() {
  const amount = parseFloat(document.getElementById('incomeAmount').value)
  const category = document.getElementById('incomeCategory').value
  const description = document.getElementById('incomeDescription').value
  const date = document.getElementById('incomeDate').value

  if (!amount || !category || !date) {
    alert('Please fill in all required fields')
    return
  }

  const newTransaction = {
    id: Math.max(0, ...transactions.map(t => t.id)) + 1,
    date: date,
    category: category.charAt(0).toUpperCase() + category.slice(1),
    amount: amount,
    status: 'Success',
    type: 'income',
    description: description,
  }

  transactions.unshift(newTransaction);

  monthlyIncome += amount
  updateDashboard()
  updateTransactionsTable()

  closeModal('incomeModal');
  showNotification('Income added successfully', 'success')
}

function addExpense() {
  const amount = parseFloat(document.getElementById('expenseAmount').value)
  const category = document.getElementById('expenseCategory').value
  const description = document.getElementById('expenseDescription').value
  const date = document.getElementById('expenseDate').value

  if (Number.isNaN(amount) || amount <= 0 || !category || !date) {
    alert('Please enter a valid positive amount and fill in all required fields');
    return;
  }

  const newTransaction = {
    id: Math.max(0, ...transactions.map(t => t.id)) + 1,
    date: date,
    category: category.charAt(0).toUpperCase() + category.slice(1),
    amount: -amount,
    status: 'Success',
    type: 'expense',
    description: description,
  }

  transactions.unshift(newTransaction);

  monthlyExpenses += amount
  updateDashboard()
  updateTransactionsTable()

  closeModal('expenseModal');
  showNotification('Expense added successfully', 'success')
}


function updateDashboard() {
  document.querySelector('.amount.income').textContent =
    `$${monthlyIncome.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;

  document.querySelector('.amount.expense').textContent =
    `$${monthlyExpenses.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;

  const spendingLimit = 12546;
  const percentage = (monthlyExpenses / spendingLimit) * 100;

  document.querySelector('.spending-limit').textContent =
    `$${(spendingLimit - monthlyExpenses).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;

  document.querySelector('.progress-fill').style.width =
    `${Math.min(percentage, 100)}%`;
}


function updateTransactionsTable() {
  const tbody = document.querySelector(
    '.transactions-table tbody'
  );

  tbody.innerHTML = '';

  const recentTransactions = transactions.slice(0, 10);

  recentTransactions.forEach((transaction) => {
    const row = document.createElement('tr');

    const formattedDate = new Date(
      transaction.date + 'T00:00:00'
    ).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });

    const amount = Math.abs(transaction.amount);

    const amountDisplay =
      `${transaction.amount > 0 ? '+' : '-'}$${amount.toLocaleString(
        'en-US',
        {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        }
      )}`;

    row.innerHTML = `
      <td>${formattedDate}</td>
      <td>${transaction.category || 'Subscription'}</td>
      <td style="color: ${transaction.amount > 0 ? '#10b981' : '#ef4444'
      }">${amountDisplay}</td>
      <td>
        <span class="status-success">${transaction.status}</span>
      </td>
      <td>
        <button class="action-btn">
          <i class="fa fa-ellipsis-h"></i>
        </button>
      </td>
    `;

    tbody.appendChild(row);
  });
}



function showNotification(message, type = 'success') {
  const notification = document.createElement('div');

  notification.textContent = message;

  notification.style.cssText = `
    position: fixed;
    top: 2rem;
    right: 2rem;
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 1001;
    background: ${type === 'success' ? '#10b981' : '#ef4444'};
  `;

  notification.textContent = message
  document.body.appendChild(notification)

  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease'
    setTimeout(() => {

    }, 300);
  }, 3000);
}

const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
  from {transform: translateX(100%); opacity: 0;}
  to{transform: translateX(0); opacity:0;}
  }

  @keyframes slideOutRight {
  from{transform: translateX(0); opacity: 1;}
  to {transform: translateX(100%); opacity: 0;}
  }
`
document.head.appendChild(style)

document.addEventListener('DOMContentLoaded',function() {
  updateTransactionsTable()
})




















