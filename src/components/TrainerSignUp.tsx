import {
  Box,
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { sportTypesArr } from "../constants/type-of-sport";
import { useState } from "react";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface IFormInput {
  firstName: string;
  gender: GenderEnum;
}

const TrainerSignUp = () => {
  const [personName, setPersonName] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <TextField label="Username" {...register("firstName")} />
      </FormControl>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Выбор спорта</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={
            <OutlinedInput id="select-multiple-chip" label="Выбор спорта" />
          }
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {sportTypesArr.map((sport) => {
            const key = Object.keys(sport)[0];
            return (
              <MenuItem key={key} value={sport[key]}>
                {sport[key]}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <Button type="submit" variant="contained">
        Submit
      </Button>
      <label>Gender Selection</label>
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
    </form>
  );
};

export default TrainerSignUp;
