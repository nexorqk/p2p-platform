import { Button, Stack, TextField, Typography } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { StudentSignUpForm } from "../types/sign-up";
import { SelectElement } from "react-hook-form-mui";
import { gednerArr } from "../constants/type-of-sport";

const StudentSignUp = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<StudentSignUpForm>();
  const onSubmit: SubmitHandler<StudentSignUpForm> = (data) =>
    console.log(data);

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
          options={gednerArr}
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
