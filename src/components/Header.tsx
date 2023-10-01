import { NavLink } from "react-router-dom";

const Header = () => (
  <header className="flex justify-between items-center px-16 py-4 text-2xl">
    <NavLink className="text-4xl" to="/">
      Music Platform
    </NavLink>
    <div className="flex">
      <NavLink to="/sign-in">Sign In</NavLink>
      <h2 className="px-2">/</h2>
      <NavLink to="/sign-up">Sign Up</NavLink>
    </div>
  </header>
);

export default Header;
