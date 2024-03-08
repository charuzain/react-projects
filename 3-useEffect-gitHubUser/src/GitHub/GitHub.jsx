import { useState, useEffect } from 'react';
import axios from 'axios';
const GitHub = () => {
  const [users, SetUsers] = useState([]);

  const fetchUser = async () => {
    try {
       const url = 'https://api.github.com/users';
       const result = await axios.get(url);
       SetUsers(result.data);
      
    } catch (error) {
      console.log(error)
    }
   
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <h2>GitHub Users</h2>
      <ul className='userlist'>
        {users.map((person) => {
          return (
            <li className='userCard' key={person.id}>
              <div className='userCard-imgContainer'>
                <img src={person.avatar_url} alt="Person" />
              </div>
              <div>
                <p>{person.login}</p>
                <a href={person.followers_url}>Follower Url</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default GitHub;
