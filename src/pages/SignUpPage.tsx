import { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";

import { StudentSignUp, TrainerSignUp } from "../components";

export const SignUpPage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Typography textAlign="center" mb={1} variant="h4">
        Sign Up
      </Typography>
      <Box>
        <Tabs value={value} onChange={handleChange} centered sx={{ mb: 2 }}>
          <Tab label="Student" />
          <Tab label="Trainer" />
        </Tabs>
        {value === 0 ? <StudentSignUp /> : <TrainerSignUp />}
      </Box>
    </>
  );
};
