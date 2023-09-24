import { NavLink } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";

const Header = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        p: 3,
      }}
      component="header"
    >
      <NavLink to="/">
        <Typography variant="h4" component="h1">
          Music Platform
        </Typography>
      </NavLink>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <NavLink to="/sign-in">Sign In</NavLink>
        <Typography sx={{ px: 1 }}>/</Typography>
        <NavLink to="/sign-up">Sign Up</NavLink>
      </Box>
    </Container>
  );
};

export default Header;
