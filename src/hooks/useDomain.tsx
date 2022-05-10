import * as yup from "yup";

export const useDomain = () => {
  const userName = yup.string().required();
  const age = yup
    .number()
    .positive("1以上100以下の数字を入力してください")
    .integer("整数を入力してください")
    .min(1, "1以上100以下の数字を入力してください")
    .max(100, "1以上100以下の数字を入力してください")
    .required("年齢は必須入力です");
  const gender = yup.number().required();
  const interests = yup.string();
  const job = yup.string();
  const mail = yup.string().email().required();

  return { userName, age, gender, interests, job, mail };
};
