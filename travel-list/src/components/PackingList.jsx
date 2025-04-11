const PackingList = ({ items, checkBoxHandler }) => {
  
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
          </li>
        ))}
      </ul>
    </>
  );
};

export default PackingList;
