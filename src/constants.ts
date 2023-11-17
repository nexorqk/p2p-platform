import { SelectType } from "./types";

export const emailRegEx = new RegExp(
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

export const fullnameRegEx = new RegExp(
  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
);

export const inputErrors = {
  passwordPattern: "Minimum 4 characters.",
  emailError: "Uncorrect email.",
  fullnameError: "Not correct fullname",
  common: "Incorrect value",
  tooYoung: "Too young or too old",
};

export const genderArr: SelectType[] = [
  {
    id: "man",
    label: "Man",
  },
  {
    id: "female",
    label: "Female",
  },
  {
    id: "other",
    label: "Other",
  },
];
