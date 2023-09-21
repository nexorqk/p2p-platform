import { Outlet } from "react-router-dom";
import Header from "./Header";

const MainLayout = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Header />
      <main className="container mx-auto px-10 py-16">
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
