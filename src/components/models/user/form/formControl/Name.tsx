import { TextField } from "@mui/material";
import { FC } from "react";
import { useFormContext } from "react-hook-form";

export const Name: FC = () => {
  const { register } = useFormContext(); // retrieve all hook methods

  return <TextField label={"名前"} {...register("name")} variant="standard" />;
};
