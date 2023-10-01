enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

export interface StudentSignUpForm {
  username: string;
  password: string;
  fullname: string;
  age: number;
  gender: GenderEnum;
}

export interface TrainerSignUpForm {
  firstName: string;
  gender: GenderEnum;
}
