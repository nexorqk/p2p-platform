import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h2>
      <NavLink to="/">Music Platform</NavLink>
    </h2>
    <div>
      <h2>
        <NavLink to="/sign-in">Sign In</NavLink>
      </h2>
      <h2>/</h2>
      <h2>
        <NavLink to="/sign-up">Sign Up</NavLink>
      </h2>
    </div>
  </header>
);

export default Header;
