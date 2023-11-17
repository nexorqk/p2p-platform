import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
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

export const SignInPage = () => {
  const [values, setValues] = useState<IFormProps>(defaultValues);
  const { handleSubmit, reset, control, setValue } = useForm<IFormProps>({
    defaultValues: defaultValues,
  });

  const onSubmit: SubmitHandler<IFormProps> = (data) => {
    setValues(data);
    console.log(values);
  };

  // const auth = getAuth();
  // createUserWithEmailAndPassword(auth, values.email, values.password)
  //   .then((userCredential) => {
  //     // Signed up
  //     const user = userCredential.user;
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // ..
  //   });

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
            pattern: usernameRegEx,
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              onChange={onChange}
              value={value}
              error={!!error}
              label="Username"
              type="text"
              required
              helperText={error ? validationErrors.usernameError : null}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={{
            pattern: passwordRegEx,
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              onChange={onChange}
              value={value}
              error={!!error}
              label="Password"
              type="password"
              required
              helperText={error ? validationErrors.passwordPattern : null}
            />
          )}
        />
        <Button type="submit" variant="contained">
          Sign In
        </Button>
        <Button onClick={() => reset()} variant="outlined">
          Reset
        </Button>
      </Stack>
    </form>
  );
};
