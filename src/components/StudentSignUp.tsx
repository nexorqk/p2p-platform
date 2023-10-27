import { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { SelectType, StudentSignUpForm } from "../types/sign-up";
import { commonApi, endpoints } from "../api";
import { passwordRegEx, usernameRegEx, validationErrors } from "../constants";

const StudentSignUp = () => {
  const [gender, setGender] = useState("");
  const [genderArr, setGenderArr] = useState<SelectType[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StudentSignUpForm>({
    defaultValues: {
      username: "",
      password: "",
      fullname: "",
    },
  });
  const onSubmit: SubmitHandler<StudentSignUpForm> = (data) =>
    console.log(data);

  const handleGenderSelect = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };

  const fetchGender = async () => {
    try {
      const response = await commonApi(endpoints.GENDER);
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
        <TextField
          required
          error={!!errors.username}
          label="Username"
          type="text"
          helperText={errors.username ? validationErrors.common : null}
          {...register("username", { pattern: usernameRegEx })}
        />
        <TextField
          required
          color="secondary"
          error={!!errors.password}
          label="Password"
          type="password"
          helperText={errors.password ? validationErrors.passwordPattern : null}
          {...register("password", { pattern: passwordRegEx })}
        />
        <TextField
          error={!!errors.fullname}
          label="Fullname"
          type="text"
          helperText={errors.fullname ? validationErrors.common : null}
          {...register("fullname", { pattern: usernameRegEx })}
        />
        <TextField
          label="Write your age"
          type="number"
          size="small"
          error={!!errors.age}
          helperText={errors.age ? validationErrors.tooYoung : null}
          {...register("age", { min: 18, max: 99 })}
        />
        <FormControl fullWidth>
          <InputLabel id="gender-select-label">Gender</InputLabel>
          <Select
            labelId="gender-select-label"
            id="gender-select"
            value={gender}
            label="Age"
            onChange={handleGenderSelect}
          >
            {genderArr.map((gender) => (
              <MenuItem key={gender.id} value={gender.id}>
                {gender.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button size="large" type="submit" variant="contained">
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default StudentSignUp;
