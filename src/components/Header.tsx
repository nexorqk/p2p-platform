import { NavLink } from "react-router-dom";
import { Box, Container, Divider, Stack, Typography } from "@mui/material";

export const Header = () => (
  <Container
    sx={{
      display: "flex",
      justifyContent: "space-between",
      py: 2,
    }}
    component="header"
    maxWidth="lg"
  >
    <Typography variant="h4" component="h1">
      <NavLink to="/">Music Platform</NavLink>
    </Typography>
    <Stack
      divider={<Divider orientation="vertical" flexItem />}
      direction="row"
      spacing={2}
      sx={{
        border: "1px solid black",
        boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.25)",
        borderRadius: 6,
        p: 1.5,
      }}
    >
      <Typography variant="h5">
        <NavLink to="/trainers">Trainers</NavLink>
      </Typography>
      <Typography variant="h5">
        <NavLink to="/about">About</NavLink>
      </Typography>
    </Stack>

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
