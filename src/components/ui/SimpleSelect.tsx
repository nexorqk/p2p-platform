import { MenuItem, TextField } from "@mui/material";
import { useController } from "react-hook-form";

const SimpleSelect = ({
  control,
  name,
  currencies,
}: {
  control: any;
  name: string;
  currencies: { value: string; label: string }[];
}) => {
  const {
    field,
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
    rules: { required: true },
  });

  return (
    // <TextField
    //   onChange={field.onChange} // send value to hook form
    //   onBlur={field.onBlur} // notify when input is touched/blur
    //   value={field.value} // input value
    //   name={field.name} // send down the input name
    //   inputRef={field.ref} // send input ref, so we can focus on input when error appear
    // />

    <TextField
      id="outlined-select-currency"
      select
      onBlur={field.onBlur}
      onChange={field.onChange}
      label="Gender"
      helperText="Choose your gender if you want"
    >
      {currencies.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default SimpleSelect;
