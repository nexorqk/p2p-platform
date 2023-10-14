export enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

export type SelectType = {
  id: string;
  label: string;
};

export interface StudentSignUpForm {
  username: string;
  password: string;
  fullname: string;
  age: number;
  gender: GenderEnum;
}

export interface TrainerSignUpForm {
  username: string;
  password: string;
  fullname: string;
  age: number;
  gender: GenderEnum;
}
