import { Outlet } from "react-router-dom";
import Header from "./Header";

const MainLayout = () => {
  return (
    <div className="layout">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">© 2023, Alexander Alexeichik</footer>
    </div>
  );
};

export default MainLayout;
