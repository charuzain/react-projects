import { useState } from "react";

const PackingList = ({
  items,
  checkBoxHandler,
  removeItemHandler,
  clearListHandler,
  onSort
}) => {

  const [sortBy, setSortBy] = useState("order")
  
  const sortHandler = (e) => {
    console.log(e.target.value)
    setSortBy(e.target.value);
    // onSort(sortBy)
    onSort(e.target.value);
  }
  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.isPacked}
              onChange={() => checkBoxHandler(item.id)}
            />
            <label>
              {item.quantity} {item.itemName}
            </label>
            <button onClick={() => removeItemHandler(item.id)}>X</button>
          </li>
        ))}
      </ul>
      <div>
        <div>
          <select value={sortBy} onChange={sortHandler}>
            <option value={'order'}>Sort by input order</option>
            <option value={'itemName'}>Sort by description</option>
            <option value={'status'}>Sort by packed status</option>
            <option value={'quantity'}>Sort by quantity</option>
          </select>
        </div>
        <button onClick={clearListHandler}>Clear List</button>
      </div>
    </>
  );
};

export default PackingList;
