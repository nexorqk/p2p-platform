import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import {
  FormContainer,
  PasswordElement,
  TextFieldElement,
} from "react-hook-form-mui";

type FormProps = {
  username: string;
  password: string;
};

const SignInPage = () => {
  const [values, setValues] = useState<FormProps>();
  const onSubmit = (data: FormProps) => {
    console.log(data);
    setValues(data);
  };

  const defaultValues: FormProps = { username: "", password: "" };

  return (
    <FormContainer defaultValues={defaultValues} onSuccess={onSubmit}>
      <Typography textAlign="center" mb={2} variant="h4">
        Sign In
      </Typography>
      <Stack direction={"column"} gap={3} maxWidth={600} margin="0 auto">
        <TextFieldElement
          color={"primary"}
          name={"username"}
          label={"Username"}
          required
        />
        <PasswordElement
          color={"secondary"}
          name={"password"}
          label={"Password"}
          type="password"
          required
        />
        <Button
          size="large"
          type={"submit"}
          variant={"contained"}
          color={"primary"}
        >
          Sign In
        </Button>
      </Stack>
    </FormContainer>
  );
};

export default SignInPage;
