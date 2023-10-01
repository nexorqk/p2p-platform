import { Button } from "@/components/ui/button";
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
      <div>
        <input
          id="outlined-required"
          placeholder="Write fullname"
          {...register("fullName", { required: true, maxLength: 30 })}
        />
        <input
          required
          id="outlined-required"
          placeholder="Write username"
          {...register("firstName", { required: true, maxLength: 20 })}
        />
        <input
          required
          id="outlined-password-input"
          placeholder="Write password"
          type="password"
          autoComplete="current-password"
          {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
        />
        <Button type="submit">Sign In</Button>
      </div>
    </form>
  );
};

export default SignInPage;
