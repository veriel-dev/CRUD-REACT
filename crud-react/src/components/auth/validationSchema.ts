import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required("El nombre de usuario es requerido"),
  password: yup
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .required("La contraseña es requerida"),
  email: yup
    .string()
    .email("El correo electrónico debe ser válido")
    .required("El correo electrónico es requerido"),
});
const schemaLogin = yup.object().shape({
  password: yup
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .required("La contraseña es requerida"),
  email: yup
    .string()
    .email("El correo electrónico debe ser válido")
    .required("El correo electrónico es requerido"),
});

export { schema as schemaAuthRegister, schemaLogin as schemaAuthLogin };
