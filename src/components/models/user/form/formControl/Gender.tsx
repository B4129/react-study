import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";

export const Gender: FC = () => {
  const { control } = useFormContext(); // retrieve all hook methods

  const genderOptions = [
    {
      text: "男",
      value: 1,
    },
    {
      text: "女",
      value: 2,
    },
    {
      text: "なし",
      value: 0,
    },
  ];

  return (
    <FormControl>
      <FormLabel id="gender-radio">性別</FormLabel>
      <Controller
        control={control}
        name={"gender"}
        render={({ field }) => (
          <RadioGroup row aria-labelledby="gender-radio" {...field}>
            {genderOptions.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.text}
              />
            ))}
          </RadioGroup>
        )}
      />
    </FormControl>
  );
};
