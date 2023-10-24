import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import {
  FieldError,
  FormContainer,
  PasswordElement,
  TextFieldElement,
} from "react-hook-form-mui";
import { passwordRegEx, validationErrors } from "../constants";
import { commonApi, endpoints } from "../api";

type FormProps = {
  username: string;
  password: string;
};

const SignInPage = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [values, setValues] = useState<FormProps>();
  const onSubmit = (data: FormProps) => {
    console.log(data);
    setValues(data);

    handleSignIn(values);
  };

  const defaultValues: FormProps = { username: "", password: "" };

  const handleError = (error: FieldError) => {
    switch (error.type) {
      case "minLength":
        return validationErrors.minLength;
      case "pattern":
        return validationErrors.passwordPattern;
    }
  };

  const handleSignIn = async (userData: FormProps | undefined) => {
    const response = commonApi.get(endpoints.GET_USER, {});
  };

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
          validation={{ minLength: 4 }}
          parseError={handleError}
        />
        <PasswordElement
          color={"secondary"}
          name={"password"}
          label={"Password"}
          type="password"
          required
          validation={{ minLength: 8, pattern: passwordRegEx }}
          parseError={handleError}
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
