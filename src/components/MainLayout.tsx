import { Outlet } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import Header from "./Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Container
        component="main"
        sx={{ minHeight: "calc(100vh - 158px)", py: 2 }}
      >
        <Outlet />
      </Container>
      <Box component="footer" sx={{ p: 3, background: "#f5f5f5" }}>
        <Typography variant="body2" align="center">
          © 2023, Alexander Alexeichik
        </Typography>
      </Box>
    </>
  );
};

export default MainLayout;
