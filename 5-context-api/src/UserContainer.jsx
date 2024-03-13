import { NavBarContext } from './NavBar';
import { useContext } from 'react';

const UserContainer = () => {
  const context = useContext(NavBarContext);
  console.log(context);
  return (
    <div className="user-container">
      {context.user ? (
        <>
          <p>Hello {context.user.name}</p>
          <button className="btn" onClick={context.logout}>
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
