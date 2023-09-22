import { z } from "zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Username at least must be 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password minimum 6 character",
  }),
});

const SignInPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    // resolver: formSchema,
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return <form onSubmit={form.handleSubmit(onSubmit)} {...form}></form>;
};

export default SignInPage;
