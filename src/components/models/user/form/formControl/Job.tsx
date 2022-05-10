import { Autocomplete, TextField } from "@mui/material";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";

export const Job: FC = () => {
  const { control, setValue, getValues } = useFormContext(); // retrieve all hook methods

  const onChangeJobs = (e: any, value: any) => {
    if (typeof value === "string") return setValue("job", value);
    setValue("job", value.value);
  };
  const jobOptions = [
    {
      label: "エンジニア",
      value: "エンジニア",
    },
    {
      label: "花屋店員",
      value: "花屋店員",
    },
    {
      label: "プロ野球選手",
      value: "プロ野球選手",
    },
  ];
  return (
    <Controller
      control={control}
      name={"job"}
      render={({ field: { onChange, value } }) => (
        <Autocomplete
          disablePortal
          freeSolo
          options={jobOptions}
          noOptionsText={"候補が存在しません"}
          onChange={onChangeJobs}
          onInputChange={(event, newInputValue) => {
            setValue("job", newInputValue);
          }}
          value={value}
          renderInput={(params) => (
            <TextField
              {...params}
              label={"職業"}
              onChange={onChange}
              variant="standard"
            />
          )}
        />
      )}
    />
  );
};
