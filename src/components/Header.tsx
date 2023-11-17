import { NavLink } from "react-router-dom";
import {
  Box,
  Breadcrumbs,
  Container,
  Divider,
  Typography,
} from "@mui/material";

export const Header = () => (
  <Container
    sx={{
      display: "flex",
      justifyContent: "space-between",
      py: 2,
    }}
    component="header"
  >
    <Typography variant="h4" component="h1" marginRight="auto">
      <NavLink to="/">Music Platform</NavLink>
    </Typography>
    <Breadcrumbs
      sx={{
        margin: "5px 80px 0 0",
        border: "1px solid black",
        borderRadius: 4,
        p: 1,
        display: "flex",
      }}
    >
      <Typography variant="h5">
        <NavLink to="/trainers">Trainers</NavLink>
      </Typography>
      <Typography variant="h5">
        <NavLink to="/about">About</NavLink>
      </Typography>
    </Breadcrumbs>

    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography variant="h5">
        <NavLink to="/sign-in">Sign In</NavLink>
      </Typography>
      <Typography variant="h4" sx={{ px: 1 }}>
        /
      </Typography>
      <Typography variant="h5">
        <NavLink to="/sign-up">Sign Up</NavLink>
      </Typography>
    </Box>
  </Container>
);
