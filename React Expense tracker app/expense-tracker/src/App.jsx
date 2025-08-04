import { useState } from 'react';
import './App.css';
import Input from './assets/Components/Input';
import ExpenseList from './assets/Components/ExpenseList';
import Filter from './assets/Components/Fliter';
import Summary from './assets/Components/Summary';

function App() {
  const [allExpenses, setAllExpenses] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState([]);


  const upDateValue = (filteredIndex, updatedExpense) => {
    const matchedExpense = filteredExpenses[filteredIndex];
    const realIndex = allExpenses.findIndex(exp => exp === matchedExpense);

    if (realIndex !== -1) {
      const updatedAll = [...allExpenses];
      updatedAll[realIndex] = updatedExpense;
      setAllExpenses(updatedAll);

      const updatedFiltered = [...filteredExpenses];
      updatedFiltered[filteredIndex] = updatedExpense;
      setFilteredExpenses(updatedFiltered);
    }
  };


  const handleDelete = (index) => {
    const updatedExpense = ((prevExpenses) =>
      prevExpenses.filter((curr) => curr.id!== index)
    );
    setAllExpenses(updatedExpense);
    setFilteredExpenses(updatedExpense);
  };


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
          <ExpenseList expenses={filteredExpenses} deleteCurr={handleDelete} upDateValue={upDateValue} />
        </div>
        <div className="right">
          <Filter expenses={allExpenses} onFilter={setFilteredExpenses} />
          <Summary expenses={filteredExpenses} />
        </div>
      </div>
    </>
  );
}

export default App;
