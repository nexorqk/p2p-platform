import { Box, Button, TextField } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  fullName: string;
  firstName: string;
  lastName: string;
}
const SignInPage = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          maxWidth: 400,
          margin: "0 auto",
        }}
      >
        <TextField
          id="outlined-required"
          label="Write fullname"
          {...register("fullName", { required: true, maxLength: 30 })}
        />
        <TextField
          required
          id="outlined-required"
          label="Write username"
          {...register("firstName", { required: true, maxLength: 20 })}
        />
        <TextField
          required
          id="outlined-password-input"
          label="Write password"
          type="password"
          autoComplete="current-password"
          {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
        />
        <Button type="submit" variant="contained">
          Sign In
        </Button>
      </Box>
    </form>
  );
};

export default SignInPage;
