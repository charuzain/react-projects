import { useState } from 'react';
import { data } from './data.js';
const Birthday = () => {
  const clearHandler = () => {
    setbirthdayData([])
  }
  const [birthdayData, setbirthdayData] = useState(data);
  return (
    <section>
      <h1>{birthdayData.length} Birthdays Today</h1>
      <div>
        {birthdayData.map((person) => (
          <div className='list' key={person.id}>
            <div className='img-container'>
              <img src={person.image} alt={person.name} />
            </div>
            <div>
              <h4>{person.name}</h4>
              <h5>{person.age}</h5>
            </div>
          </div>
        ))}
      </div>
      <button onClick={clearHandler}>Clear All</button>
    </section>
  );
};

export default Birthday;
