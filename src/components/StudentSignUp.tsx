import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { gednerArr } from "../constants/type-of-sport";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const formSchema = z.object({
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  username: z.string().min(2, {
    message: "Username must be at least 2 characters",
  }),
  fullname: z.string().optional().or(z.literal("")),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters",
  }),
  gender: z.string().optional(),
  age: z.coerce
    .number()
    .min(18, { message: "Too young" })
    .optional()
    .or(z.literal("")),
});

const StudentSignUp = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      username: "",
      fullname: "",
      password: "",
      age: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => console.log(data);

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Sign Up</CardTitle>
              <CardDescription>Sign Up New Account</CardDescription>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="Email" placeholder="Email" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter username" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fullname</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter fullname" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display fullname.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Password"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      This is your private password.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gender</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a gender to display" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {gednerArr.map((item) => (
                          <SelectItem key={item.id} value={item.id}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Choose your gender if you want.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Age</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Enter age" {...field} />
                    </FormControl>
                    <FormDescription>
                      Write your age if you want.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit">Sign Up</Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </>
  );
};

export default StudentSignUp;
