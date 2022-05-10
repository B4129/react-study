import { useContext, useEffect, useState } from "react";

import axios from "axios";
import { MessageContext } from "../../context/MessageContext";
import {
  AgeType,
  GenderType,
  IdType,
  InterestsType,
  JobType,
  MailType,
  NameType,
  UserResponseTypes,
  UserTypes,
  UserTypes as UserFormTypes,
} from "../../types/UserTypes";

export const useFetchUsers = () => {
  const { setMessage } = useContext(MessageContext);
  const [users, setUsers] = useState<UserTypes[]>([]);

  const findAll = async () => {
    try {
      const response = await axios.get<UserResponseTypes[]>(
        "http://localhost:3001/users"
      );
      const data = response.data.map((user: UserResponseTypes) => {
        return {
          id: user.id,
          name: user.user_id,
          age: user.age,
          mail: user.mail,
          job: user.job,
          gender: user.gender,
          interests: user.interests,
        };
      });
      console.log(data);
      setUsers(data);
    } catch (_) {
      setMessage({ text: "ユーザーの取得に失敗しました。", type: "error" });
    }
  };

  useEffect(() => {
    (async () => {
      await findAll();
    })();
  }, []);

  return { users, findAll };
};
