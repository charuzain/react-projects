const PackingList = ({
  items,
  checkBoxHandler,
  removeItemHandler,
  clearListHandler,
}) => {
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
        <button onClick={clearListHandler}>Clear List</button>
      </div>
    </>
  );
};

export default PackingList;
