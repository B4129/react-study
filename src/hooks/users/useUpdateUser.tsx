import { useContext, useEffect } from "react";

import axios from "axios";
import { MessageContext } from "../../context/MessageContext";
import { UserTypes, UserUpdateTypes } from "../../types/UserTypes";

export const useUpdateUser = () => {
  const { setMessage } = useContext(MessageContext);

  const update = async (user: UserTypes) => {
    const { age, gender, interests, job, mail, name, id } = user;

    const updateUser: UserUpdateTypes = {
      age,
      gender,
      interests,
      job,
      mail,
      user_id: name,
    };

    try {
      await axios.put(`http://localhost:3001/users/${id}`, updateUser);
      setMessage({ text: "ユーザーの更新が完了しました。", type: "success" });
    } catch (e) {
      console.log(e)
      setMessage({ text: "ユーザーの更新に失敗しました。", type: "error" });
    }
  };

  return { update };
};
