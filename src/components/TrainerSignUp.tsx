import { Button, FormControl, Stack, TextField } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import MultipleSelect from "./ui/MultipleSelect";
import { sportTypesArr } from "../constants/type-of-sport";
import { TrainerSignUpForm } from "../types/sign-up";

const TrainerSignUp = () => {
  const { register, handleSubmit, control } = useForm<TrainerSignUpForm>();
  const onSubmit: SubmitHandler<TrainerSignUpForm> = (data) =>
    console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2} maxWidth={600} margin="0 auto">
        <FormControl>
          <TextField label="Username" {...register("firstName")} />
        </FormControl>
        <MultipleSelect
          dataArr={sportTypesArr}
          control={control}
          name="Sport"
        />

        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default TrainerSignUp;
