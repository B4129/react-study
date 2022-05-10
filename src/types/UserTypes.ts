export type UserTypes = {
  id?: IdType | undefined;
  name: NameType;
  age: AgeType;
  mail: MailType;
  job: JobType;
  gender: GenderType;
  interests: InterestsType;
};
export type UserRegisterTypes = Omit<UserResponseTypes, "id">;
export type UserUpdateTypes = Omit<UserResponseTypes, "id">;

export type UserResponseTypes = {
  id: IdType;
  user_id: NameType;
  age: AgeType;
  mail: MailType;
  job: JobType;
  gender: GenderType;
  interests: InterestsType;
};

export type IdType = number | null;
export type NameType = string;
export type AgeType = number | null;
export type MailType = string;
export type JobType = string;
export type GenderType = number | null;
export type InterestsType = string[];
