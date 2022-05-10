import { Box, Button, Card, Grid } from "@mui/material";
import { useEffect } from "react";
import { UserTable } from "../../models/user/Table";
import { useNavigate } from "react-router-dom";
import { useFetchUsers } from "../../../hooks/users/useFetchUsers";

export const UserList = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "ユーザー一覧";
  }, []);

  const { users } = useFetchUsers();

  return (
    <>
      <Card sx={{ minHeight: "300px" }}>
        <Grid container justifyContent="end" alignContent="">
          <Grid
            item
            my={2}
            mr={2}
            mb={1}
            justifyContent={"center"}
            alignContent={"center"}
          >
            <Button
              variant="outlined"
              onClick={() => navigate("/users/create")}
            >
              追加
            </Button>
          </Grid>
        </Grid>
        <Box mx={2}>
          <UserTable rows={users} />
        </Box>
      </Card>
    </>
  );
};
