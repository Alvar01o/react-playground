import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
const Expenses = (props) => {
  const [dateDropDown, setDateDropDown] = useState('2020');
  const changeDropDownHandler = (selectedYear) => {
    setDateDropDown(selectedYear);
  }
  return (
  <div>
  <ExpensesFilter onChangeDropDown={changeDropDownHandler} />
    <Card className="expenses">
      {props.items.map( (expense) => {
        <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
      })}

    </Card>
  </div>
  );
}

export default Expenses;
