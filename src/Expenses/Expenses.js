
import Card from '../UI/Card';
import './Expenses.css';
import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
 const [filteredYear, setFilteredYear] = useState('2021');
  function filterChangeHandler(selectedYear){
    setFilteredYear(selectedYear)
 
  }
const filteredExpenses=props.items.filter((expense)=>{
  return expense.date.getFullYear().toString()===filteredYear
})

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
      
    </Card>
  );
}

export default Expenses;
