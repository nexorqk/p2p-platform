import { Button, MenuItem, Stack, TextField } from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Inputs } from "../types/sign-up";
import SimpleSelect from "./ui/SimpleSelect";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const StudentSignUp = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("age"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2} maxWidth={600} margin="0 auto">
        <TextField
          error={!!errors.username}
          label="Username"
          type="text"
          helperText={errors.username ? errors.username.message : null}
          {...(register("username"), { required: true })}
        />
        <TextField
          error={!!errors.password}
          label="Password"
          type="password"
          helperText={errors.password ? errors.password.message : null}
          {...(register("password"), { required: true })}
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
          {...register("age", { min: 18, max: 99 })}
        />
        <SimpleSelect control={control} name="gender" currencies={currencies} />
        <Button size="large" type="submit" variant="contained">
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default StudentSignUp;
