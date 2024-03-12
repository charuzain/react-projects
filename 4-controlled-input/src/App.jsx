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
  const [userName, setUserName] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, { id: `${users.length + 1}`, name: userName }])
    setUserName("")
  };

  const nameChangeHandler = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value);
    setUserName(event.target.value)

  }

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
            <button>Submit</button>
          </form>
        </section>

        <section className="users">
          <h2>Users</h2>
          {users.map((person) => {
            return <h3 key={person.id} className='name'>{person.name}</h3>;
          })}
        </section>
    </div>
  );
}

export default App;
