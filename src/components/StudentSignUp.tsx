import { useEffect, useState } from "react";
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
import { SelectType, StudentSignUpForm } from "../types/sign-up";
import { baseApi, endpoints } from "../api";
import {
  fullnameRegEx,
  passwordRegEx,
  usernameRegEx,
  validationErrors,
} from "../constants";
import { useNavigate } from "react-router-dom";

export const StudentSignUp = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState<StudentSignUpForm>();
  const [genderArr, setGenderArr] = useState<SelectType[]>([]);
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<StudentSignUpForm>({
    defaultValues: {
      username: "",
      password: "",
      fullname: "",
      age: "",
      gender: "",
    },
  });
  const onSubmit: SubmitHandler<StudentSignUpForm> = (data) => {
    setValues(data);
  };

  const fetchGender = async () => {
    try {
      const response = await baseApi(endpoints.GENDER);
      setGenderArr(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchGender();
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3} maxWidth={600} margin="0 auto">
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
              helperText={error ? validationErrors.fullnameError : null}
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
              helperText={error ? validationErrors.tooYoung : null}
            />
          )}
        />

        <Controller
          control={control}
          name="gender"
          render={({
            field: { onChange, value },
            fieldState: { error },
            formState,
          }) => (
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
