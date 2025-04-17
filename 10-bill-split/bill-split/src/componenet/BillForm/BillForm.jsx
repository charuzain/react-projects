import React, { useState } from 'react';

const BillForm = ({ selectedFriend, editHandler }) => {
  const [billValue, setBillValue] = useState('');
  const [expense, setexpense] = useState('');
  const [selectedPerson, setSelectedPerson] = useState('you');

  const billValueHandler = (e) => {
    setBillValue(e.target.value);
  };
  const expenseHandler = (e) => {
    setexpense(e.target.value);
  };

  const billFormHandler = (e) => {
    e.preventDefault();
    if (!billValue || Number(billValue) === 0) {
      return;
    }
    console.log(Number(expense));
    let newBalance = 0;
    if (selectedPerson === selectedFriend.name) {
      newBalance = selectedFriend.balance - Number(expense);
      console.log(newBalance);
    } else {
      newBalance = selectedFriend.balance + Number(billValue) - Number(expense);
      console.log(newBalance);
    }

    const newFriendData = {
      id: selectedFriend.id,
      name: selectedFriend.name,
      image: selectedFriend.image,
      balance: newBalance,
    };
    editHandler(newFriendData);
    setBillValue('');
    setexpense('');
  };

  return (
    <div>
      <form className="form" onSubmit={billFormHandler}>
        <h1>Split a bill with {selectedFriend.name}</h1>
        <div className="form__group">
          <label htmlFor="bill" className="form__label">
            Bill Value
          </label>
          <input
            type="number"
            name="bill"
            id="bill"
            value={billValue}
            onChange={billValueHandler}
            min={0}
          />
        </div>
        <div className="form__group">
          <label htmlFor="expense" className="form__label">
            Your Expense Value
          </label>
          <input
            type="number"
            name="expense"
            id="expense"
            min={0}
            value={expense}
            onChange={expenseHandler}
          />
        </div>
        <div className="form__group">
          <label htmlFor="expense1" className="form__label">
            {selectedFriend.name}'s expense
          </label>
          <input
            type="number"
            name="expense1"
            id="expense1"
            min={0}
            disabled
            value={billValue - expense}
          />
        </div>
        <div className="form__group">
          <label htmlFor="" className="form__label">
            Who is paying the bill
          </label>
          <select
            value={selectedPerson}
            onChange={(e) => setSelectedPerson(e.target.value)}
          >
            <option value="you">You</option>
            <option value={selectedFriend.name}>{selectedFriend.name}</option>
          </select>
        </div>
        <div>
          <button>Split Bill</button>
        </div>
      </form>
    </div>
  );
};

export default BillForm;
