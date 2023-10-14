import { Button, Stack, TextField } from "@mui/material";
import {
  MultiSelectElement,
  PasswordElement,
  SelectElement,
} from "react-hook-form-mui";
import { SubmitHandler, useForm } from "react-hook-form";
import { GenderEnum, SportType } from "../types/sign-up";
import {
  gednerArr,
  specificSport,
  sportTypesArr,
} from "../constants/type-of-sport";
import { useEffect, useState } from "react";

type FormProps = {
  username: string;
  password: string;
  fullname: string;
  age: number | undefined;
  gender: GenderEnum | "";
  sport: string;
  specific_sport: SportType[];
};

const TrainerSignUp = () => {
  const [specificValue, setSpecificValue] = useState<SportType[]>([]);
  const {
    watch,
    register,
    handleSubmit,
    resetField,
    control,
    formState: { errors },
  } = useForm<FormProps>({
    defaultValues: {
      specific_sport: [],
    },
  });

  const onSubmit: SubmitHandler<FormProps> = (data) => console.log(data);

  const sportSelect = watch().sport;

  useEffect(() => {
    if (sportSelect) {
      resetField("specific_sport");
      setSpecificValue(specificSport[sportSelect]);
    }
  }, [sportSelect]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction={"column"} spacing={3} maxWidth={600} margin="0 auto">
        <TextField
          required
          error={!!errors.username}
          label="Username"
          type="text"
          helperText={errors.username ? errors.username.message : null}
          {...register("username")}
        />
        <PasswordElement
          required
          color={"secondary"}
          label="Password"
          type="password"
          name="password"
          control={control}
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
        <SelectElement
          label="Sport type"
          name="sport"
          options={sportTypesArr}
          control={control}
          required
        />
        <MultiSelectElement
          name="specific_sport"
          label="Specific Sport"
          options={specificValue}
          control={control}
          required
        />
        <Button
          size="large"
          type={"submit"}
          variant={"contained"}
          color={"primary"}
        >
          Sign Up
        </Button>
      </Stack>
    </form>
  );
};

export default TrainerSignUp;
