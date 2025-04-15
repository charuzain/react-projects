import React from 'react';
import '../Main/Main.scss';

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
    <div className='friend'>
      <ul className="friend__list">
        {initialFriends.map((friend) => (
          <li key={friend.id} className="friend__item">
            <img
              src={friend.image}
              alt={friend.image}
              className="friend__image"
            />
            <div className='friend__detail'>
              <p className="friend__name">{friend.name}</p>
              {friend.balance > 0 && (
                <p className="friend__balance friend__balance--green">
                  {friend.name} owes you {friend.balance}$
                </p>
              )}
              {friend.balance < 0 && (
                <p className="friend__balance friend__balance--red">
                  {`You owe ${friend.name}
              ${Math.abs(friend.balance)}$`}
                </p>
              )}
              {friend.balance === 0 && (
                <p className="friend__balance">
                  {' '}
                  {`You and ${friend.name}
             are even`}
                </p>
              )}
            </div>
            <div>
              <button className='friend__select'>Select</button>
            </div>
          </li>
        ))}
      </ul>
      <button className='btn'>Add Friend</button>
    </div>
  );
};

export default Main;
