import { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [selectedNumber, setSelectedNum] = useState(1);
  const [item, setItem] = useState('');
  const [itemError, setItemError] = useState('');

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (item.trim() === '') {
      setItemError('Add an item to list');
    } else {
      onSubmit(selectedNumber, item);
      setItem('');
    }
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <p>What do you need for yout trip</p>
      <select
        value={selectedNumber}
        onChange={(e) => setSelectedNum(e.target.value)}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
      </select>
      <div>
        <input
          type="text"
          placeholder="item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        {itemError && <p>{itemError}</p>}
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
