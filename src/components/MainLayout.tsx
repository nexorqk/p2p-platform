import { Box, Container, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const MainLayout = () => {
  return (
    <Box
      height="100vh"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Header />
      <Container component="main">
        <Outlet />
      </Container>
      <Box sx={{ background: "#f4f4f5", mt: "auto", p: 1.5 }}>
        <Typography variant="body2" align="center">
          © 2023, Alexander Alexeichik
        </Typography>
      </Box>
    </Box>
  );
};

export default MainLayout;
