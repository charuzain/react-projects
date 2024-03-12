/* eslint-disable react/prop-types */
import UserContainer from "./UserContainer";

const NavLinks = (props) => {
  console.log(props)
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
      <UserContainer user={props.user} logout = {props.logout} />
    </div>
  );
};

export default NavLinks;
