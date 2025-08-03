import React from 'react';
import './ExpenseList.css';

const ExpenseList = ({ expenses, deleteCurr, upDateValue }) => {

    console.log(expenses);
    return (
        <div className='expenseListContainer'>
            <h3>Expense List</h3>
            {expenses && expenses.length === 0 ? (
                <p>No expenses found</p>
            ) : (
                <div className="expenseListHeader">
                    <ul className="expenseList">
                        {expenses.map((expense, index) => (
                            <li key={index}>
                                {index+1} - {expense.text} - {expense.date} - {expense.category} - ₹{expense.amount} -  
                                <button className='button' onClick={() => deleteCurr(index)}>Delete</button>
                                <button className='button' onClick={() => upDateValue(index)}>UpDate</button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ExpenseList;
