import NavLinks from './NavLinks';
import { useState, createContext} from 'react'

export const NavBarContext = createContext()
console.log(NavBarContext)

const NavBar = () => {
  const [user, setUser] = useState({ name: "bob" });
  const logout = () => {
    setUser(null)
  }
  return (
    <NavBarContext.Provider value={{ user, logout }}>
      <nav className="navbar">
        <h5>Context API</h5>
        <NavLinks />
      </nav>
    </NavBarContext.Provider>
  );
};

export default NavBar;
