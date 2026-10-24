Personal Expense Tracker

A frontend web application for tracking personal income and expenses through a clean, interactive financial dashboard. Built with HTML, CSS, and vanilla JavaScript, the application provides financial summaries, transaction management, spending categories, and visual spending indicators.

Overview

The Personal Expense Tracker is designed to make everyday financial activity easier to review and organize. Users can record income and expenses, view recent transactions, and monitor financial summaries through a dashboard interface.

Features

- Financial Dashboard — Displays monthly income, monthly expenses, and spending-limit indicators.
- Income Management — Record income with an amount, category, description, and date.
- Expense Management — Add expenses and organize them by category.
- Transaction History — View recent transactions with dates, amounts, categories, and statuses.
- Spending Overview — Explore a dashboard chart and category-based expense breakdown.
- Dynamic UI Updates — Updates financial summary values and transaction rows after adding transactions.
- Modal Forms — Dedicated interfaces for entering income and expense details.
- User Feedback — Displays notifications following successful transaction additions.
- Responsive Layout — Uses CSS Grid, Flexbox, and media queries to adapt the interface to different screen sizes.

Technology Stack

Technology| Application
HTML5| Semantic structure and form elements
CSS3| Layout, styling, transitions, and responsive design
JavaScript (ES6+)| Transaction logic, validation, and DOM manipulation
Font Awesome| Interface icons

Project Structure

personal-expense-tracker/
├── index.html
├── style.css
├── script.js
└── README.md

Getting Started

Prerequisites

- A modern web browser
- Visual Studio Code or another code editor

Run Locally

1. Clone the repository:
   
   git clone <your-repository-url>

2. Navigate to the project directory:
   
   cd personal-expense-tracker

3. Open "index.html" in your browser, or launch the project using the Live Server extension in Visual Studio Code.

No build tools or backend configuration are required for the current frontend implementation.

Implementation Highlights

- Structured the dashboard using reusable HTML elements and CSS layout systems.
- Used JavaScript objects and arrays to represent financial transactions.
- Implemented form validation and dynamic transaction rendering.
- Updated dashboard totals through DOM manipulation.
- Created modal interactions for entering financial records.
- Added visual feedback and spending progress indicators.

Current Limitations

- Transaction data is stored in JavaScript memory and does not persist after a page refresh.
- Dashboard charts and expense-category summaries currently contain predefined sample values.
- Authentication, database integration, and multi-user support are not implemented.
- Transaction editing, deletion, and export functionality are not yet implemented.

Planned Enhancements

- Persistent transaction storage using "localStorage" or a database.
- Data-driven charts and category summaries.
- Transaction search, filtering, sorting, editing, and deletion.
- Monthly budgeting and spending alerts.
- CSV export and financial reports.
- Backend integration and user authentication.

Learning Objectives

This project demonstrates practical frontend development skills, including responsive UI design, DOM manipulation, form handling, JavaScript data structures, validation, and interactive dashboard development.

Author

Lakshay

---

Developed as a frontend project to explore personal finance tracking and interactive dashboard design.
