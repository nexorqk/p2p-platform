import { NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        aligItems: "center",
      }}
      component="header"
    >
      <NavLink to="/">Music Platform</NavLink>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <NavLink to="/sign-in">Sign In</NavLink>
        <Typography sx={{ px: 1 }}>/</Typography>
        <NavLink to="/sign-up">Sign Up</NavLink>
      </Box>
    </Box>
  );
};

export default Header;
