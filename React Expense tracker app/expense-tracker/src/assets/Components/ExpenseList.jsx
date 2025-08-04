import React, { useState } from 'react';
import './ExpenseList.css';

const ExpenseList = ({ expenses, deleteCurr, upDateValue }) => {
    const [editIndex, setEditIndex] = useState(null);
    const [editedExpense, setEditedExpense] = useState({});

    const handleEditClick = (index) => {
        setEditIndex(index);
        setEditedExpense(expenses[index]);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedExpense({
            ...editedExpense,
            [name]: name === "amount" ? parseFloat(value) : value
        });
    };

    const handleSave = () => {
        upDateValue(editIndex, editedExpense);
        setEditIndex(null);
        setEditedExpense({});
    };

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
                                {editIndex === index ? (
                                    <>
                                        <input
                                            type="text"
                                            name="text"
                                            value={editedExpense.text}
                                            onChange={handleChange}
                                            style={{ marginRight: '10px' }}
                                        />
                                        <input
                                            type="date"
                                            name="date"
                                            value={editedExpense.date}
                                            onChange={handleChange}
                                            style={{ marginRight: '10px' }}
                                        />
                                        <input
                                            type="text"
                                            name="category"
                                            value={editedExpense.category}
                                            onChange={handleChange}
                                            style={{ marginRight: '10px' }}
                                        />
                                        <input
                                            type="number"
                                            name="amount"
                                            value={editedExpense.amount}
                                            onChange={handleChange}
                                            style={{ marginRight: '10px' }}
                                        />
                                        <button className='button' onClick={handleSave}>Save</button>
                                        <button className='button' onClick={() => setEditIndex(null)}>Cancel</button>
                                    </>
                                ) : (
                                    <>
                                        {index+1} - {expense.text} - {expense.date} - {expense.category} - Rs{expense.amount}
                                        <button className='button' onClick={() => deleteCurr(expense.id)}>Delete</button>
                                        <button className='button' onClick={() => handleEditClick(index)}>Edit</button>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ExpenseList;
