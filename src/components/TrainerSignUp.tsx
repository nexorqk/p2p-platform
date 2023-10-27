import { useEffect, useState } from "react";
import { Button, Select, Stack, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { commonApi, endpoints } from "../api";
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
      const response = await commonApi(endpoints.GENDER);
      setGenderArr(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchSportTypesArr = async () => {
    try {
      const response = await commonApi(endpoints.SPORT_TYPES);
      console.log(response.data);
      setSportTypesArr(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchSpecificSport = async () => {
    try {
      const response = await commonApi(endpoints.SPECIFIC_SPORT);
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
        <TextField
          required
          color={"secondary"}
          label="Password"
          type="password"
          name="password"
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
        <Select name="gender" label="Gedner">
          {/* {gednerArr?.map()} */}
        </Select>
        <Select label="Sport type" name="sport" required>
          {/* {sportTypesArr} */}
        </Select>
        <Select name="specific_sport" label="Specific Sport" required>
          {/* Multi Select */}
          {/* specificValue */}
        </Select>
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
