import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { FC } from "react";

type actionProps = "create" | "update" | "delete";
type UserConfirmDialogProps = {
  open: boolean;
  handleClose: () => void;
  handleOK: () => void;
  action: actionProps;
};
type actionTextTypes = { [key: string]: string };
const domain = "ユーザー";
const actionText: actionTextTypes = {
  create: "登録",
  update: "更新",
  delete: "削除",
};
export const UserConfirmDialog: FC<UserConfirmDialogProps> = ({
  open,
  handleClose,
  handleOK,
  action,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <DialogTitle id="dialog-title">{`${domain}${
        actionText[`${action}`]
      }`}</DialogTitle>
      <DialogContent>
        <DialogContentText id="dialog-description">{`${domain}を${
          actionText[`${action}`]
        }します。よろしいですか？`}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>キャンセル</Button>
        <Button onClick={handleOK} autoFocus>
          {`${actionText[`${action}`]}`}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
