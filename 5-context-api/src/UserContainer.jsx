/* eslint-disable react/prop-types */
const UserContainer = (props) => {
  console.log(props.user);
  return (
    <div className="user-container">
      {props.user ? (
        <>
          <p>Hello {props.user.name}</p>
          <button className="btn" onClick={props.logout}>
            Logout
          </button>
        </>
      ) : (
        <p>Login</p>
      )}
    </div>
  );
};

export default UserContainer;
