export const passwordRegEx = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
);

export const usernameRegEx = new RegExp(/^[a-z0-9_-]{3,15}$/);

export const fullnameRegEx = new RegExp(
  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
);

export const validationErrors = {
  passwordPattern:
    "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character",
  usernameError:
    "Alphanumeric string that may include _ and - having a length of 3 to 16 characters.",
  fullnameError: "Not correct fullname",
  common: "Incorrect value",
  tooYoung: "Too young or too old",
};
