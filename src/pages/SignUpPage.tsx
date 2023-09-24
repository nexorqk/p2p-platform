import { Box, Tab, Tabs } from "@mui/material";
import StudentSinUp from "../components/StudentSignUp";
import TrainerSignUp from "../components/TrainerSignUp";
import { useState } from "react";

const SignUpPage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={value} onChange={handleChange} centered sx={{ mb: 2 }}>
        <Tab label="Student" />
        <Tab label="Trainer" />
      </Tabs>
      {value === 0 ? <StudentSinUp /> : <TrainerSignUp />}
    </Box>
  );
};

export default SignUpPage;
