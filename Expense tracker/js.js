
let expenses = [
    // { desc: "Lunch at KFC", amount: 300, category: "Food", date: "2025-07-30" },
];


function addExpense() {
    const desc = document.querySelector("#description").value;
    const amount = parseFloat(document.querySelector("#amount").value);
    const date = document.querySelector("#date").value;
    const category = document.querySelector("#category").value;

    // console.log(Date.now());


    if (desc && amount > 0 && category) {
        const expense = {
            id: Date.now(),
            desc,
            amount,
            category,
            date
        };
        expenses.push(expense);
        updateUI();
        saveExpenses();
    }
}


function deleteExpense(element) {
    const id = Number(element.getAttribute("data-id"));
    expenses = expenses.filter(e => e.id !== id);
    updateUI();
    saveExpenses();
}



document.querySelector("#filterCategory").addEventListener("change", updateUI);
document.querySelector("#filterFromDate").addEventListener("change", updateUI);
document.querySelector("#filterToDate").addEventListener("change", updateUI);


function updateUI() {
    const expenseItems = document.querySelector("#expenseItems");
    const category = document.querySelector("#filterCategory").value;

    const fromDate = document.querySelector("#filterFromDate").value;
    const toDate = document.querySelector("#filterToDate").value;

    let filteredExpenses = expenses;

    if (category !== "All") {
        filteredExpenses = filteredExpenses.filter(e => e.category === category);
    }

    if (fromDate || toDate) {
        filteredExpenses = filteredExpenses.filter(e => {
            const expenseDate = new Date(e.date).toISOString().split("T")[0];

            if (fromDate && !toDate) {
                return expenseDate >= fromDate;
            }

            if (!fromDate && toDate) {
                return expenseDate <= toDate;
            }

            if (fromDate && toDate) {
                return expenseDate >= fromDate && expenseDate <= toDate;
            }
        });
    }

    if (filteredExpenses.length === 0) {
        expenseItems.innerHTML = '<p class="empty-data"> No Expenses Recorded</p>';
    }
    else {
        expenseItems.innerHTML = filteredExpenses.map(e => `
        <p>
            ${e.desc} - Rs${e.amount} - ${e.category} - ${new Date(e.date).toLocaleDateString('en-US')} 
            <span class="delete" data-id="${e.id}" onclick="deleteExpense(this)">Delete</span>
        </p>
    `).join('');
    }


    updateSummary();
}



function updateSummary() {
    const category = document.querySelector("#filterCategory").value;
    const summary = document.querySelector(".summary");

    const fromDate = document.querySelector("#filterFromDate").value;
    const toDate = document.querySelector("#filterToDate").value;

    const filteredExpenses = expenses.filter(e => {
        const expenseDate = new Date(e.date);
        const from = fromDate ? new Date(fromDate) : null;
        const to = toDate ? new Date(toDate) : null;

        const inCategory = (category === "All" || e.category === category);
        const inDateRange = (!from || expenseDate >= from) && (!to || expenseDate <= to);

        return inCategory && inDateRange;
    });

    const total = filteredExpenses.reduce((sum, e) => sum + e.amount, 0);

    const byCategory = filteredExpenses.reduce((acc, e) => {
        acc[e.category] = (acc[e.category] || 0) + e.amount;
        return acc;
    }, {});

    summary.innerHTML = `<h3>Summary</h3><div>Total: Rs ${total}</div>`;

    if (category === "All") {
        for (let cat in byCategory) {
            summary.innerHTML += `<div>${cat}: Rs ${byCategory[cat]}</div>`;
        }
    }
}


function saveExpenses() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

function loadExpenses() {
    const saved = localStorage.getItem("expenses");
    if (saved) expenses = JSON.parse(saved);
    updateUI();
}

window.onload = loadExpenses;
