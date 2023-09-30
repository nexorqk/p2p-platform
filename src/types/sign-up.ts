enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

export type Inputs = {
  username: string;
  password: string;
  fullname: string;
  age: number;
  gender: GenderEnum;
};
