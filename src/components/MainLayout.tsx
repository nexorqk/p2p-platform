import { Outlet } from "react-router-dom";
import Header from "./Header";

const MainLayout = () => (
  <>
    <Header />
    <main className="flex-1 max-w-7xl container py-8">
      <Outlet />
    </main>
    <footer className="w-full p-3 text-sm bg-slate-200 text-center">
      © 2023, Alexander Alexeichik
    </footer>
  </>
);

export default MainLayout;
