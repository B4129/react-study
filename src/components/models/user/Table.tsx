import {
  DataGrid,
  GridRenderCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { Button, Chip, IconButton } from "@mui/material";
import { FC, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { UserTypes } from "../../../types/UserTypes";
import { useNavigate } from "react-router-dom";
import { UserConfirmDialog } from "./UserConfirmDialog";
type Props = {
  rows: any;
};
export const UserTable: FC<Props> = ({ rows }) => {
  const navigate = useNavigate();
  const selectGender = (value: number) => {
    if (value === 1) return "男";
    if (value === 2) return "女";
    return "なし";
  };
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserTypes | undefined>(
    undefined
  );
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOK = async () => {
    try {
      // TODO: 削除処理をいつか作る
      // await delete(selectedUser);
      navigate(0);
    } finally {
      setOpen(false);
    }
  };

  const editUser = (user: UserTypes) => {
    navigate(`/users/${user.id}`);
  };
  const deleteUser = (user: UserTypes) => {
    setSelectedUser(user);
    handleClickOpen();
  };
  const columns = [
    { field: "id", headerName: "id", hide: true, flex: 1 },
    { field: "name", headerName: "ユーザー名", flex: 1 },
    { field: "mail", headerName: "メールアドレス", flex: 1 },
    { field: "age", headerName: "年齢", flex: 0.3 },
    {
      field: "gender",
      headerName: "性別",
      valueGetter: (params: GridValueGetterParams) =>
        selectGender(params.value),
      flex: 0.3,
    },
    { field: "job", headerName: "職業", flex: 0.8 },
    {
      field: "interests",
      headerName: "趣味",
      renderCell: (params: GridRenderCellParams) =>
        params.value.map((value: string) => <Chip label={value} />),
      flex: 1,
    },
    {
      field: "actions",
      headerName: "操作",
      renderCell: (params: GridRenderCellParams) => {
        return (
          <>
            <IconButton color="success" onClick={() => editUser(params.row)}>
              <EditIcon />
            </IconButton>
            <IconButton color="error" onClick={() => deleteUser(params.row)}>
              <DeleteIcon />
            </IconButton>
          </>
        );
      },
      flex: 0.5,
    },
  ];
  return (
    <>
      <DataGrid autoHeight columns={columns} rows={rows} />
      <UserConfirmDialog
        open={open}
        handleClose={handleClose}
        handleOK={handleOK}
        action={"delete"}
      />
    </>
  );
};
