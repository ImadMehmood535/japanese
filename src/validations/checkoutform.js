import * as yup from "yup";

const checkoutSchema = yup.object().shape({
  // First Name validation
  firstName: yup.string().required("Please enter your first name"),
  
  // Last Name validation
  lastName: yup.string().required("Please enter your last name"),

  // Email validation
  email: yup.string().email("Invalid email address").required("Please enter your email"),

  // Phone validation
  phone: yup
    .string()
    .min(4, "Phone number is too short")
    .required("Please enter your phone number"),

  // Address validation
  address: yup.string().required("Please enter your street address"),

  // Apartment validation
  apartment: yup.string().required("Please enter your apartment"),

  // City validation
  city: yup.string().required("Please enter your city"),

  // ZIP Code validation
  zipCode: yup.string().required("Please enter your ZIP code"),

  // Country validation
  country: yup.string().required("Please select your country"),

  // State validation
  state: yup.string().required("Please select your state"),
});

export { checkoutSchema };
