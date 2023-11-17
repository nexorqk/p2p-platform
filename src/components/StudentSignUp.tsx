import { useEffect, useState } from "react";
import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { SelectType, StudentSignUpForm } from "../types/sign-up";
import { baseApi, endpoints } from "../api";
import { emailRegEx, fullnameRegEx, inputErrors } from "../constants";

export const StudentSignUp = () => {
  // const navigate = useNavigate();
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
      email: "",
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
              label="Username"
              type="text"
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
