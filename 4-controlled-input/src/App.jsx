import { useState } from 'react';
import './App.css';

const data = [
  { id: 1, name: 'Charu' },
  { id: 2, name: 'Abhinav' },
  { id: 3, name: 'Arham' },
  { id: 4, name: 'Nitin' },
];

function App() {
  const [users, setUsers] = useState(data);
  const [userName, setUserName] = useState('');
  // For checked input create a state and set the initial value to false
  // Add checked attribute to input and set it equal to state value
  // add onchange handler to the input
  const [shippingVal, setShippingVal] = useState(false);

  //Select Input

  const frameWorkList = ['react', 'angular', 'vue', 'svelte'];

  const [framework, setFramework] = useState('react');

  const formSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, { id: `${users.length + 1}`, name: userName }]);
    setUserName('');
  };

  const nameChangeHandler = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value);
    setUserName(event.target.value);
  };

  const shippingChangeHandler = (event) => {
    console.log(event.target.checked);
    setShippingVal(event.target.checked);
  };

  const selectHandler = (event) => {
    setFramework(event.target.value);
  };

  return (
    <div className="form">
      <section className="form-container">
        <h1>Add USer</h1>
        <form onSubmit={formSubmit}>
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={userName}
              onChange={nameChangeHandler}
            />
          </div>
          {/* <h3>CHECKED INPUT</h3> */}
          <div className="checkbox-row">
            <label htmlFor="shipping">Free Shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              checked={shippingVal}
              onChange={shippingChangeHandler}
            />
          </div>
          {/* <h3>OPTIONS</h3> */}
          <div className="option-row">
            <label htmlFor="framework">Knows Framework</label>
            <select
              name="framework"
              id="framework"
              value={framework}
              onChange={selectHandler}
            >
              {frameWorkList.map((framework) => {
                return <option key={framework}>{framework}</option>;
              })}
            </select>
          </div>

          <button>Submit</button>
        </form>
      </section>

      <section className="users">
        <h2>Users</h2>
        {users.map((person) => {
          return (
            <h3 key={person.id} className="name">
              {person.name}
            </h3>
          );
        })}
      </section>
    </div>
  );
}

export default App;


