import React from 'react'
import './Summary.css'

const Summary = ({ expenses }) => {

  let total = 0;
  if (expenses && expenses.length > 0) {
    total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  }

  return (
    <div className='summary'>
      <h3>Summary</h3>
      <div className="display">
        {expenses && expenses.length > 0 ? (
          <p>Total : {total}</p>) :
          <p>No expense found</p>
        }
        {expenses.length > 0 ? (
          expenses.map((expense, index) => (
            <p key={index}> {expense.category} : {expense.amount} </p>)
          )) : null}
      </div>
    </div>
  )
}

export default Summary
