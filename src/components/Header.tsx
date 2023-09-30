import { NavLink } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";

const Header = () => (
  <Container
    sx={{
      display: "flex",
      justifyContent: "space-between",
      p: 3,
    }}
    component="header"
  >
    <Typography variant="h4" component="h1">
      <NavLink to="/">Music Platform</NavLink>
    </Typography>
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography variant="h5">
        <NavLink to="/sign-in">Sign In</NavLink>
      </Typography>
      <Typography sx={{ px: 1 }}>/</Typography>

      <Typography variant="h5">
        <NavLink to="/sign-up">Sign Up</NavLink>
      </Typography>
    </Box>
  </Container>
);

export default Header;
