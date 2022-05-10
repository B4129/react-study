import { useContext } from "react";
import * as yup from "yup";

import axios from "axios";
import { MessageContext } from "../../context/MessageContext";
import {
  UserRegisterTypes,
  UserResponseTypes,
  UserTypes,
} from "../../types/UserTypes";
import { useDomain } from "../useDomain";

export const useCreateUser = () => {
  const { setMessage } = useContext(MessageContext);

  const { age, userName, gender, interests, job, mail } = useDomain();

  const create = async (user: UserTypes) => {
    const { age, gender, interests, job, mail, name } = user;

    const registerUser: UserRegisterTypes = {
      user_id: name,
      job,
      mail,
      gender,
      interests,
      age,
    };
    try {
      await axios.post("http://localhost:3001/users", registerUser);
      setMessage({ text: "ユーザーの登録が完了しました。", type: "success" });
    } catch (e) {
      setMessage({ text: "ユーザーの登録に失敗しました。", type: "error" });
    }
  };

  const createSchema = yup.object().required().shape({
    age,
    gender,
    interests,
    job,
    mail,
    name: userName,
  });

  return { create, createSchema };
};
