import { useContext, useEffect, useState } from "react";

import axios from "axios";
import { MessageContext } from "../../context/MessageContext";
import {
  UserResponseTypes,
  UserTypes as UserFormTypes,
} from "../../types/UserTypes";
import { useNavigate } from "react-router-dom";

export const useFetchUser = (id: string | undefined) => {
  const navigate = useNavigate();
  const { setMessage } = useContext(MessageContext);
  const [user, setUser] = useState<UserFormTypes>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const find = async (id: string): Promise<UserFormTypes | void> => {
    setIsLoading(true);

    if (id === undefined) {
      throw new Error("ユーザーの取得に失敗しました。");
    }
    try {
      const data = await axios.get(`http://localhost:3001/users/${id}`);
      const user = data.data;
      setUser({
        id: user.id,
        age: user.age,
        gender: user.gender,
        interests: user.interests,
        job: user.job,
        mail: user.mail,
        name: user.user_id,
      });
    } catch (e) {
      setMessage({ text: "ユーザーの取得に失敗しました。", type: "error" });
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    //不正な遷移
    if (id === undefined) {
      navigate("/users");
      return;
    }
    (async () => {
      await find(id);
    })();
  }, []);

  return { user, isLoading };
};
