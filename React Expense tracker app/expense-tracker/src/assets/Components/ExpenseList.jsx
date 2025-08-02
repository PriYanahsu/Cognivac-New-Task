import React from 'react';
import './ExpenseList.css';

const ExpenseList = ({ expenses }) => {

    console.log(expenses);
    return (
        <div className='expenseListContainer'>
            <h3>Expense List</h3>
            {expenses && expenses.length === 0 ? (
                <p>No expenses found</p>
            ) : (
                <>
                    <p>Expense Data</p>
                    <ul className="expenseList">
                        {expenses.map((expense, index) => (
                            <li key={index}>
                                {index + 1} - {expense.text} - {expense.date} - {expense.category} - ₹{expense.amount}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default ExpenseList;
