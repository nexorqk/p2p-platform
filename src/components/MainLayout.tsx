import { Outlet } from "react-router-dom";

import { Header } from "./Header";

export const MainLayout = () => (
  <>
    <Header />
    <main className="py-2">
      <Outlet />
    </main>
  </>
);
