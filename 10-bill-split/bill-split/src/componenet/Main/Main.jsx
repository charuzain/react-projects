import React, { useState } from 'react';
import '../Main/Main.scss';
import AddFriendForm from '../AddFriendForm/AddFriendForm';
import BillForm from '../BillForm/BillForm';
import FriendListItem from '../FriendListItem/FriendListItem';
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
  const [billForm, setBillForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const friendFormHandler = () => {
    setAddFriend(!addFriend);
  };

  const closeHandler = () => {
    setAddFriend(!addFriend);
  };

  const editHandler = (newFriend) => {
    const friendData = friends.map((friend) => {
      if (friend.id === newFriend.id) {
        friend.balance = newFriend.balance;
        return friend;
      }
      return friend;
    });
    setFriends(friendData);
        setBillForm(false);
  };

  const onAddFriend = (newFriend) => {
    setFriends([...friends, newFriend]);
  };

  const selectHandler = (friend) => {
    console.log(friend);
    setBillForm(true);
    setSelectedFriend(friend);
  };

  const closeBillHandler = () => {
    setSelectedFriend(null);
    setBillForm(false);
  };

  return (
    <main className="main">
      <div className="friend">
        <ul className="friend__list">
          {friends.map((friend) => (
            <FriendListItem
              key={friend.id}
              friend={friend}
              closeBillHandler={closeBillHandler}
              selectHandler={selectHandler}
              billForm={billForm}
              selectedFriend={selectedFriend}
            />
          ))}
        </ul>
        {!addFriend && (
          <button className="btn" onClick={friendFormHandler}>
            Add Friend
          </button>
        )}

        {addFriend && (
          <AddFriendForm
            closeHandler={closeHandler}
            onAddFriend={onAddFriend}
          />
        )}
      </div>

      {/* Split bill */}
      {billForm && (
        <BillForm selectedFriend={selectedFriend} editHandler={editHandler} />
      )}
    </main>
  );
};

export default Main;
