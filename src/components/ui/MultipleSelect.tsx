import { useState } from "react";
import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useController } from "react-hook-form";

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

const MultipleSelect = ({
  dataArr,
  control,
  name,
}: {
  dataArr: { [x: string]: string }[];
  control: any;
  name: string;
}) => {
  const [personName, setPersonName] = useState<string[]>([]);
  const {
    field,
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
    rules: { required: true },
  });

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <FormControl sx={{ m: 1 }}>
      <InputLabel id="demo-multiple-chip-label">Выбор спорта</InputLabel>
      <Select
        labelId="demo-multiple-chip-label"
        id="demo-multiple-chip"
        multiple
        name={field.name}
        value={personName}
        onChange={handleChange}
        input={<OutlinedInput id="select-multiple-chip" label="Выбор спорта" />}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {dataArr.map((data) => {
          const key = Object.keys(data)[0];
          return (
            <MenuItem key={key} value={data[key]}>
              {data[key]}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default MultipleSelect;
