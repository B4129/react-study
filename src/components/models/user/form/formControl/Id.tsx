import { FormHelperText, TextField } from "@mui/material";
import { FC } from "react";
import { useFormContext } from "react-hook-form";

export const Id: FC = () => {
  const { register } = useFormContext(); // retrieve all hook methods

  return (
    <>
      <TextField
        label={"ID"}
        {...register("id")}
        variant="standard"
        inputProps={{ readOnly: true }}
      />
    </>
  );
};
