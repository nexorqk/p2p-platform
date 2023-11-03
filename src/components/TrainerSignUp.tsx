import { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { baseApi, endpoints } from "../api";
import { SelectType, TrainerSignUpForm } from "../types";
import { passwordRegEx, usernameRegEx, validationErrors } from "../constants";
import MultiSelectElement from "./MultiSelectElement";

const TrainerSignUp = () => {
  const [specificSport, setSpecificSport] = useState<SelectType[]>([]);
  const [sport, setSport] = useState("");
  const [sportTypesArr, setSportTypesArr] = useState<SelectType[]>([]);
  const [gender, setGender] = useState("");
  const [genderArr, setGenderArr] = useState<SelectType[]>([]);
  const [specificValue, setSpecificValue] = useState([]);

  const {
    register,
    handleSubmit,
    control,
    resetField,
    formState: { errors },
  } = useForm<TrainerSignUpForm>({
    defaultValues: {
      specific_sport: [],
    },
  });

  const onSubmit: SubmitHandler<TrainerSignUpForm> = (data) =>
    console.log(data);

  const handleGenderSelect = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };
  const fetchGender = async () => {
    try {
      const response = await baseApi(endpoints.GENDER);
      setGenderArr(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const gandleSportSelect = (event: SelectChangeEvent) => {
    setSport(event.target.value as string);
  };
  const fetchSportTypesArr = async () => {
    try {
      const response = await baseApi(endpoints.SPORT_TYPES);
      setSportTypesArr(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchSpecificSport = async () => {
    try {
      const response = await baseApi(endpoints.SPECIFIC_SPORT);
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

  useEffect(() => {
    if (sport) {
      const specificIndex = specificSport?.findIndex(
        (item) => Object.keys(item)[0] === sport
      );
      resetField("specific_sport");
      setSpecificValue(Object.values(specificSport[specificIndex])[0] as any);
    }
  }, [sport]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction={"column"} spacing={3} maxWidth={600} margin="0 auto">
        <TextField
          required
          error={!!errors.username}
          label="Username"
          type="text"
          helperText={errors.username ? validationErrors.common : null}
          {...register("username", { pattern: usernameRegEx })}
        />
        <TextField
          required
          error={!!errors.password}
          color="secondary"
          label="Password"
          type="password"
          helperText={errors.password ? validationErrors.passwordPattern : null}
          {...register("password", { pattern: passwordRegEx })}
        />
        <TextField
          error={!!errors.fullname}
          label="Fullname"
          type="text"
          helperText={errors.fullname ? validationErrors.common : null}
          {...register("fullname", { pattern: usernameRegEx })}
        />
        <TextField
          label="Write your age"
          type="number"
          size="small"
          error={!!errors.age}
          helperText={errors.age ? validationErrors.tooYoung : null}
          {...register("age", { min: 18, max: 99 })}
        />
        <FormControl fullWidth>
          <InputLabel id="gender-select-label">Gender</InputLabel>
          <Select
            labelId="gender-select-label"
            id="gender-select"
            value={gender}
            label="Age"
            onChange={handleGenderSelect}
          >
            {genderArr.map((gender) => (
              <MenuItem key={gender.id} value={gender.id}>
                {gender.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="sport-select-label">Sport</InputLabel>
          <Select
            labelId="sport-select-label"
            id="sport-select"
            value={sport}
            label="Sport"
            onChange={gandleSportSelect}
          >
            {sportTypesArr.map((sport) => (
              <MenuItem key={sport.id} value={sport.id}>
                {sport.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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
