import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import React,{useState} from 'react';

function ExpenseItem(props) {
  const [title,setTitle]=useState(props.title);
  function clickHandle(){
   setTitle('Updated');
    console.log(title);
  }
  return (
    <li>
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
        <button onClick={clickHandle}>Change Title</button>
    </Card>
    </li>
  );
}

export default ExpenseItem;