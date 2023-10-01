import { MenuItem, TextField } from "@mui/material";
import { createElement } from "react";
import { Control, Controller, ControllerProps } from "react-hook-form";

const SimpleElement = ({
  name,
  required,
  valueKey = "id",
  labelKey = "label",
  options = [],
  type,
  objectOnChange,
  validation = {},
  control,
  ...rest
}: {
  name: string;
  required: boolean;
  valueKey: string;
  labelKey: string;
  options:
    | readonly {
        id: string | number;
        label: string | number;
        disabled?: boolean;
      }[]
    | readonly any[];
  type?: string | number;
  objectOnChange?: boolean;
  validation?: ControllerProps["rules"];
  control?: Control;
}) => {
  return (
    <Controller
      name={name}
      rules={validation}
      control={control}
      render={({
        field: { onBlur, onChange, value, ref },
        fieldState: { error },
      }) => {
        // handle shrink on number input fields
        if (type === "number" && typeof value !== "undefined") {
          rest.InputLabelProps = rest.InputLabelProps || {};
          rest.InputLabelProps.shrink = true;
        }

        value = value?.[valueKey] ?? value; // try fetch key value

        return (
          <TextField
            {...rest}
            name={name}
            value={value ?? ""}
            onBlur={onBlur}
            onChange={(event) => {
              let item: number | string = event.target.value;
              if (type === "number" && item) {
                item = Number(item);
              }
              onChange(item);
              if (typeof rest.onChange === "function") {
                if (objectOnChange) {
                  item = options.find((i) => i[valueKey] === item);
                }
                rest.onChange(item);
              }
            }}
            select
            required={required}
            error={!!error}
            inputRef={ref}
          >
            {options.map((item: any) =>
              createElement(MenuItem, {
                key: `${name} ${item[valueKey]}`,
                value: item?.[valueKey] ?? item,
                disabled: item?.disabled ?? false,
              })
            )}
          </TextField>
        );
      }}
    />
  );
};

export default SimpleElement;
