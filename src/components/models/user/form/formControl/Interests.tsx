import {Autocomplete, Checkbox, FormControl, FormControlLabel, TextField} from "@mui/material";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";

export const Interests: FC = () => {
  const { control, setValue} = useFormContext(); // retrieve all hook methods

  const onChangeInterests = (e: any, value: any) => {
    console.log("aaa")
    const values = value.map((option: any) => {
      if (typeof option === "string") return option;
      return option.value;
    });
    setValue("interests", values);
  };
  type InterestsOptionTypes = { label: string; value: string }[];
  const interestsOptions: InterestsOptionTypes = [
    {
      label: "サッカー",
      value: "サッカー",
    },
    {
      label: "プログラミング",
      value: "プログラミング",
    },
    {
      label: "音楽鑑賞",
      value: "音楽鑑賞",
    },
    {
      label: "ゲーム",
      value: "ゲーム",
    },
    {
      label: "クリケット",
      value: "クリケット",
    },
  ];

  return (
    <Controller
      control={control}
      name={"interests"}
      render={({ field: {  value } }) => (
        <Autocomplete
          multiple
          freeSolo
          id="tags-outlined"
          options={interestsOptions}
          onChange={onChangeInterests}
          autoSelect
          value={value}
          renderInput={(params) => (
            <TextField
              {...params}
              value={value}
              variant="standard"
              label="趣味"
            />
          )}
        />
      )}
    />
  );
};
