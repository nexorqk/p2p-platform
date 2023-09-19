import { NavLink, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
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
      <main className="container mx-auto px-2 py-16">
        <Outlet />
      </main>
      <footer className="p-3 bg-zinc-100 mt-auto">
        <h2 className="text-gray-950 text-center">
          © 2023, Alexander Alexeichik
        </h2>
      </footer>
    </div>
  );
};

export default MainLayout;
