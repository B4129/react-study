import { Box, Button, Card, Grid, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { UserEditForm } from "../../models/user/form";
import { useNavigate, useParams } from "react-router-dom";
import { UserConfirmDialog } from "../../models/user/UserConfirmDialog";
import { useUpdateUser } from "../../../hooks/users/useUpdateUser";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserTypes } from "../../../types/UserTypes";
import { useFetchUser } from "../../../hooks/users/useFetchUser";
import { useDomain } from "../../../hooks/useDomain";
import * as yup from "yup";

export const UserEdit: FC = () => {
  const params = useParams();
  const { update } = useUpdateUser();
  const { user, isLoading } = useFetchUser(params.id);
  useEffect(() => {
    document.title = "ユーザー更新";
  }, []);

  const navigate = useNavigate();
  const openConfirmDialog = () => {
    handleClickOpen();
  };
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { age, userName, gender, interests, job, mail } = useDomain();
  const updateSchema = yup
    .object()
    .required()
    .shape({ age, name: userName, gender, interests, job, mail });

  const methods = useForm<UserTypes>({
    defaultValues: {
      id: null,
      name: "",
      age: null,
      mail: "",
      job: "",
      gender: 0,
    },
    resolver: yupResolver(updateSchema),
  });

  useEffect(() => {
    if (user === undefined) return;
    methods.reset({
      id: user.id,
      name: user.name,
      age: user.age,
      mail: user.mail,
      job: user.job,
      gender: user.gender,
      interests: user.interests,
    });
  }, [user]);

  const handleOK = async () => {
    try {
      const user = methods.getValues();
      await update(user);
      navigate("/users");
    } finally {
      setOpen(false);
    }
  };

  return (
    <>
      <Card sx={{ p: 2 }}>
        <Typography variant="h4" color="gray" sx={{ mb: 2 }}>
          ユーザー更新
        </Typography>
        <FormProvider {...methods}>
          {isLoading ? "loading..." : <UserEditForm />}
          <Grid container justifyContent="end" alignContent="">
            <Grid
              item
              my={2}
              mb={0}
              justifyContent={"center"}
              alignContent={"center"}
            >
              <Button
                variant="outlined"
                onClick={openConfirmDialog}
              >
                更新
              </Button>
            </Grid>
          </Grid>
        </FormProvider>
      </Card>
      <UserConfirmDialog
        open={open}
        handleClose={handleClose}
        handleOK={handleOK}
        action={"update"}
      />
    </>
  );
};
