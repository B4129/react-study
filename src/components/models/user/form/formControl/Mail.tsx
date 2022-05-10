import { FormHelperText, TextField } from "@mui/material";
import { FC, useContext } from "react";
import { useFormContext } from "react-hook-form";

export const Mail: FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext(); // retrieve all hook methods

  return (
    <>
      <TextField
        label={"メールアドレス"}
        {...register("mail")}
        variant="standard"
      />
    </>
  );
};
