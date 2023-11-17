import { useState } from "react";
import { Box, Container, Tab, Tabs, Typography } from "@mui/material";

import { StudentSignUp, TrainerSignUp } from "../components";

export const SignUpPage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Typography textAlign="center" mb={2} variant="h4">
        Sign Up
      </Typography>
      <Box>
        <Tabs value={value} onChange={handleChange} centered sx={{ mb: 2 }}>
          <Tab label="Student" />
          <Tab label="Trainer" />
        </Tabs>
        <Container maxWidth="xs">
          {value === 0 ? <StudentSignUp /> : <TrainerSignUp />}
        </Container>
      </Box>
    </>
  );
};
