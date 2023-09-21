import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="container px-10 py-3 mx-auto flex justify-between items-center">
      <NavLink to="/" style={{ fontSize: "1.5rem" }}>
        Music Platform
      </NavLink>
      <div className="flex">
        <NavLink className="px-2" to="/sign-in">
          Sign In
        </NavLink>
        <h1 className="text-amber-500"> / </h1>
        <NavLink className="px-2" to="/sign-up">
          Sign Up
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
