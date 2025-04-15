import React, { useState } from 'react';

const AddFriendForm = ({ closeHandler, onAddFriend }) => {
  const [friendName, setFriendName] = useState('');
  const [friendimage, setFriendImage] = useState('https://i.pravatar.cc/48');

  const addFriendHandler = (e) => {
    e.preventDefault();
    if (!friendName) {
      return;
    } else {
      const newFriend = {
        id: Date.now(),
        name: friendName,
        image: friendimage,
        balance: 0,
      };
      console.log(newFriend);
      onAddFriend(newFriend);
      setFriendName('');
      closeHandler();
    }
  };
  const nameHandler = (e) => {
    setFriendName(e.target.value);
  };

  const imageHandler = (e) => {
    setFriendImage(e.target.value);
  };

  return (
    <>
      <form onSubmit={addFriendHandler}>
        <div>
          <label htmlFor="friendName">Friend name</label>
          <input
            type="text"
            name="friendName"
            id="friendName"
            value={friendName}
            onChange={nameHandler}
          />
        </div>
        <div>
          <label htmlFor="friendImage">Image URL</label>
          <input
            type="text"
            name="friendImage"
            id="friendImage"
            value={friendimage}
            onChange={imageHandler}
          />
        </div>
        <button> Add</button>
      </form>
      <button onClick={closeHandler}>Close</button>
    </>
  );
};

export default AddFriendForm;
