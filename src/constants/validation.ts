export const passwordRegEx = new RegExp(
  /^(?=.*\d)(?=.*[0-9])(?=.*[a-zA-Z]).{4,}$/gm
);

export const usernameRegEx = new RegExp(/^[a-z0-9_-]{3,15}$/);

export const fullnameRegEx = new RegExp(
  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
);

export const validationErrors = {
  passwordPattern: "Minimum 4 characters, at least one letter and one number.",
  usernameError:
    "Alphanumeric string that may include _ and - having a length of 3 to 16 characters.",
  fullnameError: "Not correct fullname",
  common: "Incorrect value",
  tooYoung: "Too young or too old",
};
