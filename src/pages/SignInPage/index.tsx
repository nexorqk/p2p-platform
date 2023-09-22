// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";

import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
  username: string;
  password: string;
};

import Button from "../../components/ui/Button";

import styles from "./SignInPage.module.css";

// const formSchema = z.object({
//   username: z.string().min(2, {
//     message: "Username at least must be 2 characters.",
//   }),
//   password: z.string().min(6, {
//     message: "Password minimum 6 character",
//   }),
// });

const SignInPage = () => {
  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     username: "",
  //     password: "",
  //   },
  // });

  // function onSubmit(values: z.infer<typeof formSchema>) {
  //   console.log(values);
  // }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("username"), "username"); // watch input value by passing the name of it
  console.log(watch("password"), "password"); // watch input value by passing the name of it

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2>Sign In</h2>
      <h4>Sign into your account.</h4>
      <div className={styles.block}>
        <label htmlFor="username" className={styles.label}>
          username
        </label>
        <input
          className={styles.input}
          type="text"
          id="username"
          placeholder="enter your username"
          {...register("username", { required: true })}
        />
        {errors.username && (
          <span className={styles.error}>Username is required</span>
        )}
      </div>
      <div className={styles.block}>
        <label htmlFor="password" className={styles.label}>
          password
        </label>
        <input
          className={styles.input}
          type="password"
          id="password"
          placeholder="enter your password"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span className={styles.error}>Password is required</span>
        )}
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default SignInPage;
