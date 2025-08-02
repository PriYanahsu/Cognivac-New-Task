import { useState } from 'react';
import './App.css';
import Input from './assets/Components/Input';
import ExpenseList from './assets/Components/ExpenseList';
import Filter from './assets/Components/Fliter';
import Summary from './assets/Components/Summary';

function App() {
  const [allExpenses, setAllExpenses] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState([]);

  const handleNewExpense = (newExpense) => {
    const updatedExpenses = [...allExpenses, newExpense];
    setAllExpenses(updatedExpenses);
    setFilteredExpenses(updatedExpenses); 
  };

  return (
    <>
      <h2>Expense Tracker</h2>
      <div className="expenseTracker">
        <div className="left">
          <Input onSubmitExpense={handleNewExpense} />
          <ExpenseList expenses={filteredExpenses} />
        </div>
        <div className="right">
          <Filter expenses={allExpenses} onFilter={setFilteredExpenses} />
          <Summary expenses={filteredExpenses}/>
        </div>
      </div>
    </>
  );
}

export default App;
