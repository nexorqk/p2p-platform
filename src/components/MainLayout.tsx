import { Outlet } from "react-router-dom";
import Header from "./Header";

const MainLayout = () => (
  <>
    <Header />
    <main className="min-h-[calc(100vh-116px)] max-w-screen-2xl container py-8">
      <Outlet />
    </main>
    <footer className="w-full p-3 text-sm bg-slate-200 text-center">
      © 2023, Alexander Alexeichik
    </footer>
  </>
);

export default MainLayout;
