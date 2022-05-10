import { Button, Card, Grid, Typography } from "@mui/material";
import { FC, useContext, useEffect, useState } from "react";
import { UserCreateForm } from "../../models/user/form";
import { useNavigate } from "react-router-dom";

import { UserConfirmDialog } from "../../models/user/UserConfirmDialog";
import { MessageContext } from "../../../context/MessageContext";
import { UserTypes } from "../../../types/UserTypes";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDomain } from "../../../hooks/useDomain";
import * as yup from "yup";
import { useForm, FormProvider } from "react-hook-form";
import { useCreateUser } from "../../../hooks/users/useCreateUser";

export const UserCreate: FC = () => {
  const { create } = useCreateUser();
  const { setMessage } = useContext(MessageContext);
  useEffect(() => {
    document.title = "ユーザー登録";
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

  const handleOK = async () => {
    try {
      const user = methods.getValues();
      await create(user);
      setMessage({ text: "ユーザーの登録が完了しました。", type: "success" });
      navigate("/users");
    } catch (e) {
      setMessage({ text: "ユーザーの登録に失敗しました。", type: "error" });
    } finally {
      setOpen(false);
    }
  };

  const { age, userName, gender, interests, job, mail } = useDomain();
  const createSchema = yup
    .object()
    .required()
    .shape({ age, name: userName, gender, interests, job, mail });

  const methods = useForm<UserTypes>({
    defaultValues: {
      name: "",
      age: null,
      mail: "",
      job: "",
      gender: 1,
      interests: [],
    },
    resolver: yupResolver(createSchema),
  });

  return (
    <>
      <Card sx={{ p: 2 }}>
        <Typography variant="h4" color="gray" sx={{ mb: 2 }}>
          ユーザー登録
        </Typography>
        <FormProvider {...methods}>
          <UserCreateForm />
          <Grid container justifyContent="end" alignContent="">
            <Grid
              item
              my={2}
              mb={0}
              justifyContent={"center"}
              alignContent={"center"}
            >
              <Button variant="outlined" onClick={openConfirmDialog}>
                登録
              </Button>
              <UserConfirmDialog
                open={open}
                action={"create"}
                handleClose={handleClose}
                handleOK={handleOK}
              />
            </Grid>
          </Grid>
        </FormProvider>
      </Card>
    </>
  );
};
