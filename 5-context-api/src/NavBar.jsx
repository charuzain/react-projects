import NavLinks from './NavLinks';
import { useState } from 'react'

const NavBar = () => {
  const [user, setUser] = useState({ name: "bob" });
  const logout = () => {
    setUser(null)
  }
  return (
      <nav className='navbar'>
        <h5>Context API</h5>
        <NavLinks user={user} logout = {logout} />
      </nav>
  );
};

export default NavBar;
