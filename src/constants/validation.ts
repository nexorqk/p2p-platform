export const passwordRegEx = new RegExp(
  "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$"
);

export const validationErrors = {
  passwordPattern:
    "Minimum eight characters, at least one letter, one number and one special character",
  minLength: "Too short",
  common: "This field is required",
};
