import React, { useState } from 'react';
import './Filter.css';

const Filter = ({ expenses, onFilter }) => {
    const [filters, setFilters] = useState({
        category: '',
        fromDate: '',
        toDate: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        const updatedFilters = {
            ...filters,
            [name]: value
        };

        setFilters(updatedFilters);
        applyFilters(updatedFilters);
    };

    const ClearFilter = () => {
        const clearedFilters = {
            category: '',
            fromDate: '',
            toDate: ''
        };
        setFilters(clearedFilters);
        applyFilters(clearedFilters);
    };

    const applyFilters = ({ category, fromDate, toDate }) => {
        let filtered = [...expenses];

        if (category) {
            filtered = filtered.filter(exp => exp.category === category);
        }

        if (fromDate) {
            filtered = filtered.filter(exp => new Date(exp.date) >= new Date(fromDate));
        }

        if (toDate) {
            filtered = filtered.filter(exp => new Date(exp.date) <= new Date(toDate));
        }

        onFilter(filtered);
    };

    return (
        <div className='filter'>
            <h3>Filter</h3>
            <div className="containers">
                <select name="category" value={filters.category} onChange={handleChange}>
                    <option value="">-- All --</option>
                    <option value="food">Food</option>
                    <option value="games">Games</option>
                    <option value="travel">Travel</option>
                    <option value="shopping">Shopping</option>
                    <option value="bills">Bills</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="education">Education</option>
                    <option value="health">Health</option>
                    <option value="transport">Transport</option>
                    <option value="subscriptions">Subscriptions</option>
                    <option value="groceries">Groceries</option>
                    <option value="rent">Rent</option>
                    <option value="gift">Gift</option>
                </select>

                <input
                    type="date"
                    name="fromDate"
                    value={filters.fromDate}
                    onChange={handleChange}
                />

                <input
                    type="date"
                    name="toDate"
                    value={filters.toDate}
                    onChange={handleChange}
                />

                <button className='clear' onClick={() => ClearFilter()}>Clear filter</button>
            </div>
        </div>
    );
};

export default Filter;
