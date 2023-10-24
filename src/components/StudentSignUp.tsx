import { useEffect, useState } from "react";
import { Button, Stack, TextField } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { SelectType, StudentSignUpForm } from "../types/sign-up";
import { SelectElement } from "react-hook-form-mui";
import { commonApi, endpoints } from "../api";

const StudentSignUp = () => {
  const [genderArr, setGenderArr] = useState<SelectType[]>([]);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<StudentSignUpForm>();
  const onSubmit: SubmitHandler<StudentSignUpForm> = (data) =>
    console.log(data);

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
          helperText={errors.username ? errors.username.message : null}
          {...register("username")}
        />
        <TextField
          required
          error={!!errors.password}
          label="Password"
          type="password"
          helperText={errors.password ? errors.password.message : null}
          {...register("password")}
        />
        <TextField
          error={!!errors.fullname}
          label="Fullname"
          type="text"
          helperText={errors.fullname ? errors.fullname.message : null}
          {...register("fullname")}
        />
        <TextField
          label="Write your age"
          type="number"
          size="small"
          error={!!errors.age}
          helperText={errors.age ? "Too young" : null}
          {...register("age", { min: 18, max: 130 })}
        />
        <SelectElement
          name="gender"
          label="Gedner"
          options={genderArr}
          helperText="Choose your gender if you want"
          control={control}
        />
        <Button size="large" type="submit" variant="contained">
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default StudentSignUp;
