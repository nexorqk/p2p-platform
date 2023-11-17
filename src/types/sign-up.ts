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
  email: string;
  password: string;
  fullname: string;
  age: number | "";
  gender: GenderEnum | "";
}

export interface TrainerSignUpForm {
  email: string;
  password: string;
  fullname: string;
  age: number | undefined;
  gender: GenderEnum | "";
  sport: string;
  specific_sport: SelectType[];
}
