import { useEffect, useState } from "react";
import { Button, Stack, TextField } from "@mui/material";
import {
  MultiSelectElement,
  PasswordElement,
  SelectElement,
} from "react-hook-form-mui";
import { SubmitHandler, useForm } from "react-hook-form";
import { endpoints, getRequest } from "../api";
import { GenderEnum, SelectType } from "../types";

type FormProps = {
  username: string;
  password: string;
  fullname: string;
  age: number | undefined;
  gender: GenderEnum | "";
  sport: string;
  specific_sport: SelectType[];
};

const TrainerSignUp = () => {
  const [specificSport, setSpecificSport] = useState<SelectType[]>([]);
  const [sportTypesArr, setSportTypesArr] = useState<SelectType[]>();
  const [gednerArr, setGenderArr] = useState<SelectType[]>();
  const [specificValue, setSpecificValue] = useState([]);
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

  const fetchGender = async () => {
    try {
      const response = await getRequest(endpoints.GENDER);
      setGenderArr(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchSportTypesArr = async () => {
    try {
      const response = await getRequest(endpoints.SPORT_TYPES);
      console.log(response.data);
      setSportTypesArr(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchSpecificSport = async () => {
    try {
      const response = await getRequest(endpoints.SPECIFIC_SPORT);
      setSpecificSport(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchGender();
    fetchSportTypesArr();
    fetchSpecificSport();
  }, []);

  const sportSelect = watch().sport;
  useEffect(() => {
    if (sportSelect) {
      const specificIndex = specificSport?.findIndex(
        (item) => Object.keys(item)[0] === sportSelect
      );
      resetField("specific_sport");
      setSpecificValue(Object.values(specificSport[specificIndex])[0] as any);
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
