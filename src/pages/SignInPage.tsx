import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { passwordRegEx, validationErrors } from "../constants";
import { commonApi, endpoints } from "../api";
import { SubmitHandler, useForm } from "react-hook-form";

type FormProps = {
  username: string;
  password: string;
};

const SignInPage = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [values, setValues] = useState<FormProps>();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormProps>();
  const onSubmit: SubmitHandler<FormProps> = (data) => console.log(data);

  const defaultValues: FormProps = { username: "", password: "" };

  const handleSignIn = async (userData: FormProps | undefined) => {
    const response = commonApi.get(endpoints.GET_USER, {});
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography textAlign="center" mb={2} variant="h4">
        Sign In
      </Typography>
      <Stack direction={"column"} gap={3} maxWidth={600} margin="0 auto">
        <TextField
          color="primary"
          id="username"
          label="Username"
          required
          {...register("username")}
        />
        <TextField
          color="secondary"
          label="Password"
          type="password"
          required
          {...register("password")}
        />
        <Button size="large" type="submit" variant="contained" color="primary">
          Sign In
        </Button>
      </Stack>
    </form>
  );
};

export default SignInPage;
