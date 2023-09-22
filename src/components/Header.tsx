import { Container, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Container component="header" sx={{ py: 2 }}>
      <NavLink to="/">
        <Typography variant="h3">Music Platform</Typography>
      </NavLink>
      <Stack direction="row" alignItems="center" spacing={1}>
        <NavLink to="/sign-in">
          <Typography variant="h5">Sign In</Typography>
        </NavLink>
        <Typography variant="h4"> / </Typography>
        <NavLink to="/sign-up">
          <Typography variant="h5">Sign Up</Typography>
        </NavLink>
      </Stack>
    </Container>
  );
};

export default Header;
