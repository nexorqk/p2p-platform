export const passwordRegEx = new RegExp(
  "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$"
);

export const usernameRegEx = new RegExp(/^[A-Za-z]+$/i);

export const validationErrors = {
  passwordPattern:
    "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character",
  common: "Incorrect value",
  tooYoung: "Too young",
};
