import React, { useState } from "react";
import "./App.css";
import { UserList as UserList } from "./components/pages/User/UserList";
import { DefaultLayout } from "./components/layouts/DefaultLayout";
import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { MessageContext, MessageTypes } from "./context/MessageContext";
import { UserCreate } from "./components/pages/User/UserCreate";
import { UserEdit } from "./components/pages/User/UserEdit";

const App = () => {
  const [message, setMessage] = useState<MessageTypes>(undefined);
  const value = {
    message,
    setMessage,
  };

  return (
    <Container>
      <MessageContext.Provider value={value}>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<UserList />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/users/create" element={<UserCreate />} />
            <Route path="/users/:id" element={<UserEdit />} />
          </Route>
        </Routes>
      </MessageContext.Provider>
    </Container>
  );
};

export default App;
