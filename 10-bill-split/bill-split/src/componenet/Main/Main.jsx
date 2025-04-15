import React from 'react';

const Main = () => {
  const initialFriends = [
    {
      id: 118836,
      name: 'Tom',
      image: 'https://i.pravatar.cc/48?u=118836',
      balance: -7,
    },
    {
      id: 933372,
      name: 'Sarah',
      image: 'https://i.pravatar.cc/48?u=933372',
      balance: 20,
    },
    {
      id: 499476,
      name: 'Harry',
      image: 'https://i.pravatar.cc/48?u=499476',
      balance: 0,
    },
  ];
  return (
    <>
      <ul>
        {initialFriends.map((friend) => (
          <li key={friend.id}>
            <img src={friend.image} alt={friend.image} />
            <div>
              <p>{friend.name}</p>
              {friend.balance > 0 && (
                <p>
                  {friend.name} owes you {friend.balance}$
                </p>
              )}
              {friend.balance < 0 && (
                <p>
                  {`You owe ${friend.name}
              ${Math.abs(friend.balance)}$`}
                </p>
              )}
              {friend.balance === 0 && (
                <p>
                  {`You and ${friend.name}
             are even`}
                </p>
              )}
            </div>
            <div>
              <button>Select</button>
            </div>
          </li>
        ))}
      </ul>
      <button>Add Friend</button>
    </>
  );
};

export default Main;
