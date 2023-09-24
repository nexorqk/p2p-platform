import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "./Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Box component="main" className="main">
        <div className="main-container">
          <Outlet />
        </div>
      </Box>
      <Box component="footer" style={{ textAlign: "center" }}>
        © 2023, Alexander Alexeichik
      </Box>
    </>
  );
};

export default MainLayout;
