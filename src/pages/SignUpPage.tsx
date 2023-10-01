import { useState } from "react";
import TrainerSignUp from "../components/TrainerSignUp";
import StudentSignUp from "../components/StudentSignUp";

const SignUp = ({ value }: { value: number }) => {
  if (value === 0) {
    return <StudentSignUp />;
  } else {
    return <TrainerSignUp />;
  }
};

const SignUpPage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      {/* <Tabs value={value} onChange={handleChange} centered sx={{ mb: 2 }}>
        <Tab label="Student" />
        <Tab label="Trainer" />
      </Tabs>
      <SignUp value={value} /> */}
    </div>
  );
};

export default SignUpPage;
