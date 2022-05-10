import { InputProps, TextField } from "@mui/material";
import { FC } from "react";
import { useFormContext } from "react-hook-form";

export const Age: FC = () => {
  const inputProps: Partial<InputProps> = {
    inputProps: { min: 0, max: 100 },
  };
  const { register } = useFormContext(); // retrieve all hook methods

  return (
    <TextField
      {...register("age")}
      InputProps={inputProps}
      label={"年齢"}
      variant="standard"
      type={"number"}
    />
  );
};
