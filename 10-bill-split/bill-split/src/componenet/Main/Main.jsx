import React, { useState } from 'react';
import '../Main/Main.scss';
import AddFriendForm from '../AddFriendForm/AddFriendForm';
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

const Main = () => {
  const [friends, setFriends] = useState(initialFriends);
  const [addFriend, setAddFriend] = useState(false);

  const friendFormHandler = () => {
    setAddFriend(!addFriend);
  };

  const closeHandler = () => {
    setAddFriend(!addFriend);
  };

  const onAddFriend = (newFriend) => {
    setFriends([...friends, newFriend]);
  };

  return (
    <div className="friend">
      <ul className="friend__list">
        {friends.map((friend) => (
          <li key={friend.id} className="friend__item">
            <img
              src={friend.image}
              alt={friend.image}
              className="friend__image"
            />
            <div className="friend__detail">
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
              <button className="friend__select">Select</button>
            </div>
          </li>
        ))}
      </ul>
      {!addFriend && (
        <button className="btn" onClick={friendFormHandler}>
          Add Friend
        </button>
      )}
      {addFriend && (
        <AddFriendForm closeHandler={closeHandler} onAddFriend={onAddFriend} />
      )}
    </div>
  );
};

export default Main;
