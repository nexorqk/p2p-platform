import { useForm, SubmitHandler } from "react-hook-form";
import { sportTypesArr } from "../constants/type-of-sport";
import { TrainerSignUpForm } from "../types/sign-up";
import { Button } from "./ui/button";

const TrainerSignUp = () => {
  const { register, handleSubmit, control } = useForm<TrainerSignUpForm>();
  const onSubmit: SubmitHandler<TrainerSignUpForm> = (data) =>
    console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register("firstName")} />
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default TrainerSignUp;
