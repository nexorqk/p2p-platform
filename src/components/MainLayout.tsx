import { Box, Container, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const MainLayout = () => (
  <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
    <Header />
    <Container component="main" sx={{ py: 4 }}>
      <Outlet />
    </Container>
    <Box
      component="footer"
      sx={{ mt: "auto", p: 3, background: (theme) => theme.palette.grey[200] }}
    >
      <Typography variant="body2" align="center">
        © 2023, Alexander Alexeichik
      </Typography>
    </Box>
  </Box>
);

export default MainLayout;
