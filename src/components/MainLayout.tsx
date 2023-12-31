import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

import { Header } from "./Header";

export const MainLayout = () => (
  <Box>
    <Header />
    <Container component="main" sx={{ py: 2 }}>
      <Outlet />
    </Container>
  </Box>
);
