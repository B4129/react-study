import { Stack } from "@mui/material";
import { FC } from "react";
import {
  UserAgeFormControl,
  UserGenderFormControl,
  UserIdFormControl,
  UserInterestsFormControl,
  UserJobFormControl,
  UserMailFormControl,
  UserNameFormControl,
} from "./formControl";

export const Edit: FC = () => {
  return (
    <Stack spacing={3} width="80%" minWidth={"700"} mx="auto">
      <UserIdFormControl> </UserIdFormControl>
      <UserMailFormControl> </UserMailFormControl>
      <UserNameFormControl> </UserNameFormControl>
      <UserAgeFormControl> </UserAgeFormControl>
      <UserJobFormControl> </UserJobFormControl>
      <UserGenderFormControl> </UserGenderFormControl>
      <UserInterestsFormControl> </UserInterestsFormControl>
    </Stack>
  );
};
