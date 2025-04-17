import React, { useState } from 'react';
import '../AddFriendForm/AddFriendForm.scss';

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
      <form onSubmit={addFriendHandler} className="form">
        <div className="form__group">
          <label htmlFor="friendName" className="form__label">
            Friend name
          </label>
          <input
            type="text"
            name="friendName"
            id="friendName"
            value={friendName}
            onChange={nameHandler}
            className="form__input"
          />
        </div>
        <div className="form__group">
          <label htmlFor="friendImage" className="form__label">
            Image URL
          </label>
          <input
            type="text"
            name="friendImage"
            id="friendImage"
            value={friendimage}
            onChange={imageHandler}
            className="form__input"
          />
        </div>
        <button> Add</button>
      </form>
      <button onClick={closeHandler}>Close</button>
    </>
  );
};

export default AddFriendForm;
