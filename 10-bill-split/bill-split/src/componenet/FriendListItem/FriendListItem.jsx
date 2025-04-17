const FriendListItem = ({
  friend,
  closeBillHandler,
  selectHandler,
  billForm,
  selectedFriend,
}) => {
  return (
    <li key={friend.id} className="friend__item">
      <img src={friend.image} alt={friend.image} className="friend__image" />
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
        {selectedFriend?.id === friend.id ? (
          <button className="friend__select" onClick={closeBillHandler}>
            Close
          </button>
        ) : (
          <button
            className="friend__select"
            onClick={() => selectHandler(friend)}
          >
            Select
          </button>
        )}

        {/* {!billForm && (
          <button
            className="friend__select"
            onClick={() => selectHandler(friend)}
          >
            Select
          </button>
        )}
        {selectedFriend?.id !== friend.id && (
          <button className="friend__select" onClick={closeBillHandler}>
            Close
          </button>
        )} */}
      </div>
    </li>
  );
};

export default FriendListItem;
