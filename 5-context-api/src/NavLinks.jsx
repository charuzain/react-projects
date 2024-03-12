import UserContainer from "./UserContainer";

const NavLinks = () => {
  return (
    <div className="link-container">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
      <UserContainer/>
    </div>
  );
};

export default NavLinks;
