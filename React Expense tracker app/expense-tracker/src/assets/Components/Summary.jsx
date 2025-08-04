import React from 'react'
import './Summary.css'

const Summary = ({ expenses }) => {

  let total = 0;
  if (expenses && expenses.length > 0) {
    console.log(expenses);
    total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  }

  let totalCategory = {};
  if(expenses && expenses.length > 0) {
    expenses.forEach(element => {
      if(totalCategory[element.category]) totalCategory[element.category] += element.amount;
      else totalCategory[element.category] = element.amount;
    });
  }

  return (
    <div className='summary'>
      <h3>Summary</h3>
      <div className="display">
        {expenses && expenses.length > 0 ? (
          <p>Total : {total}</p>) :
          <p>No expense found</p>
        }
        {Object.entries(totalCategory).map(([category, amount], index) => (
          <p key={index}>{category} : Rs {amount}</p>
        ))}
      </div>
    </div>
  )
}

export default Summary
