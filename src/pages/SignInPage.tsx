import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { passwordRegEx, usernameRegEx, validationErrors } from "../constants";
import { baseApi, endpoints } from "../api";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface IFormProps {
  username: string;
  password: string;
}

const defaultValues = {
  username: "",
  password: "",
};

const SignInPage = () => {
  const [values, setValues] = useState<IFormProps>();
  const { handleSubmit, reset, control, setValue } = useForm<IFormProps>({
    defaultValues: defaultValues,
  });

  const onSubmit: SubmitHandler<IFormProps> = (data) => {
    setValues(data);
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography textAlign="center" mb={2} variant="h4">
        Sign In
      </Typography>
      <Stack direction={"column"} gap={3} maxWidth={600} margin="0 auto">
        <Controller
          control={control}
          name="username"
          rules={{
            required: true,
            pattern: usernameRegEx,
          }}
          render={({
            field: { onChange, value },
            fieldState: { error },
            formState,
          }) => (
            <TextField
              onChange={onChange}
              value={value}
              error={!!error}
              label="Username"
              type="text"
              helperText={error ? validationErrors.usernameError : null}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={{
            required: true,
            pattern: passwordRegEx,
          }}
          render={({
            field: { onChange, value },
            fieldState: { error },
            formState,
          }) => (
            <TextField
              color="secondary"
              onChange={onChange}
              value={value}
              error={!!error}
              label="Password"
              type="password"
              helperText={error ? validationErrors.passwordPattern : null}
            />
          )}
        />
        <Button type="submit" size="large" variant="contained" color="primary">
          Sign In
        </Button>
        <Button onClick={() => reset()} variant={"outlined"}>
          Reset
        </Button>
      </Stack>
    </form>
  );
};

export default SignInPage;
