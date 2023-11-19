import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { SelectType, StudentSignUpForm } from "../types/sign-up";
import { baseApi, endpoints } from "../api";
import {
  emailRegEx,
  fullnameRegEx,
  genderArr,
  inputErrors,
} from "../constants";

export const StudentSignUp = () => {
  // const navigate = useNavigate();
  const { reset, control, handleSubmit } = useForm<StudentSignUpForm>({
    defaultValues: {
      email: "",
      password: "",
      fullname: "",
      age: "",
      gender: "",
    },
  });
  const onSubmit: SubmitHandler<StudentSignUpForm> = (data) => {
    console.log(data);

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <Controller
          control={control}
          name="email"
          rules={{
            pattern: emailRegEx,
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              onChange={onChange}
              value={value}
              error={!!error}
              label="Email"
              type="email"
              required
              helperText={error ? inputErrors.emailError : null}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={{
            minLength: 4,
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              onChange={onChange}
              value={value}
              error={!!error}
              label="Password"
              type="password"
              autoComplete="current-password"
              required
              helperText={error ? inputErrors.passwordPattern : null}
            />
          )}
        />
        <Controller
          control={control}
          name="fullname"
          rules={{
            pattern: fullnameRegEx,
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              onChange={onChange}
              value={value}
              error={!!error}
              label="Fullname"
              type="text"
              helperText={error ? inputErrors.fullnameError : null}
            />
          )}
        />
        <Controller
          control={control}
          name="age"
          rules={{
            min: 18,
            max: 99,
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              onChange={onChange}
              value={value}
              error={!!error}
              label="Write your age"
              type="number"
              helperText={error ? inputErrors.tooYoung : null}
            />
          )}
        />
        <Controller
          control={control}
          name="gender"
          render={({ field: { onChange, value } }) => (
            <FormControl fullWidth>
              <InputLabel id="gender-select-label">Gender</InputLabel>
              <Select
                labelId="gender-select-label"
                id="gender-select"
                value={value}
                label="Gender"
                onChange={onChange}
              >
                {genderArr.map((gender) => (
                  <MenuItem key={gender.id} value={gender.id}>
                    {gender.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
        <Button onClick={() => reset()} variant="outlined">
          Reset
        </Button>
      </Stack>
    </form>
  );
};
