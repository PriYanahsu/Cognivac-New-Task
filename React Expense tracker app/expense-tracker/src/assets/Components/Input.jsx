import React, { useState } from 'react';
import './Input.css';

const Input = ({ onSubmitExpense }) => {
    const [message, setMessage] = useState(false);
    const [FormData, setFormData] = useState({
        id: Date.now(),
        text: '',
        date: '',
        category: '',
        amount : ''
    });

    const TriggerValue = (e) => {
        setFormData({
            ...FormData,
            [e.target.name]: e.target.value
        });
    };

    const addValue = () => {
        if (!FormData.text || !FormData.date || !FormData.category || !FormData.amount) {
            setMessage(true);
            return;
        }

        onSubmitExpense({...FormData, amount : parseFloat(FormData.amount)});
        setMessage(false);
        setFormData({ text: '', date: '', category: '', amount: '' });
    };

    return (
        <div className='inputContainer'>
            <h3>Add Expense here!</h3>
            <div className="text">
                <input
                    type="text"
                    name="text"
                    value={FormData.text}
                    className="input"
                    onChange={TriggerValue}
                    placeholder="Lunch at KFC"
                />
                {message && !FormData.text && <span className="message">required</span>}
            </div>
            <div className="date">
                <input
                    type="date"
                    name="date"
                    className="input"
                    value={FormData.date}
                    onChange={TriggerValue}
                />
                {message && !FormData.date && <span className="message">required</span>}
            </div>
            <div className="category">
                <select
                    name="category"
                    onChange={TriggerValue}
                    value={FormData.category}
                    className="input"
                >
                    <option value="">Select category</option>
                    <option value="food">Food</option>
                    <option value="games">Games</option>
                </select>
                {message && !FormData.category && <span className="message">required</span>}
            </div>
            <div className="amount">
                <input type="number"
                    name="amount"
                    value={FormData.amount}
                    onChange={TriggerValue}
                    className="input"
                    placeholder="Amount in ₹"
                    min="1"
                 />
                {message && !FormData.amount && <span className="message">required</span>}
            </div>
            <button type="button" id="button" onClick={addValue}>
                Add Expense
            </button>
        </div>
    );
};

export default Input;
