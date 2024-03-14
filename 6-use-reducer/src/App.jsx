import { useState, useReducer } from 'react';
import './App.css';

const people = [
  {
    id: 1,
    name: 'Tim',
  },
  {
    id: 2,
    name: 'Dick',
  },
  {
    id: 3,
    name: 'Harry',
  },
  {
    id: 4,
    name: 'Peter',
  },
];
function App() {
  // const [people, setPeople] = useState(data);

  const defaultState = {
    data: people,
  };

  const reducer = (defaultState, action) => {
    console.log(action);
    console.log(defaultState.data);
    if (action.type === 'CLEAR_LIST') {
      return { ...defaultState, data: [] };
    }
    if (action.type === 'RESET_LIST') {
      return { ...defaultState, data: people };
    }
    if (action.type === 'REMOVE_ITEM') {
      const filteredNames = defaultState.data.filter((person) => person.id !== action.payload);
      return { ...defaultState, data: filteredNames };
    }
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeHandler = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
    // const filteredNames = people.filter((person) => person.id !== id);
    // setPeople(filteredNames);
  };

  const clearHandler = () => {
    dispatch({ type: 'CLEAR_LIST' });
    // setPeople([]);
  };

  const resetHandler = () => {
    dispatch({ type: 'RESET_LIST' });
    // setPeople(data);
  };
  // console.log(state);
  return (
    <div className="person-container">
      <h1>Usse Reducer</h1>
      {state.data.map((person) => {
        return (
          <div key={person.id}>
            <p>{person.name}</p>
            <button onClick={() => removeHandler(person.id)}>Remove</button>
          </div>
        );
      })}
      {state.data.length > 0 ? (
        <button onClick={clearHandler}>Clear</button>
      ) : (
        <button onClick={resetHandler}>Reset</button>
      )}
    </div>
  );
}

export default App;
