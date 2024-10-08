import * as yup from "yup";

const contactSchema = yup.object().shape({
  firstName: yup.string().required("Please enter your name"),
  lastName: yup.string().required("Please enter your last Name"),
  email: yup.string().email().required("Please Enter your email"),
  phone: yup
    .string()
    .min(4, "Please enter your phone number")
    .required("Please enter your phone number"),

  message: yup.string().required("What do you want to say?"),
});

export { contactSchema };
