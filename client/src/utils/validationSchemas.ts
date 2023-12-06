import * as Yup from 'yup'

export const LOGIN_SCHEMA = Yup.object({
    email: Yup.string()
        .email('El correo es invalido')
        .required('Campo requerido'),
    password: Yup.string()
        .required('Campo requerido')
})

export const REGISTER_SCHEMA = Yup.object({
    firstName: Yup.string()
        .min(2, 'Debe contener al menos 2 caracteres')
        .required('Campo requerido'),
    lastName: Yup.string()
    .min(2, 'Debe contener al menos 2 caracteres')
        .required('Campo requerido'),
    email: Yup.string()
        .email('El correo es invalido')
        .required('Campo requerido'),
    password: Yup.string()
        .min(6, 'Debe contener al menos 6 caracteres')
        .required('Campo requerido'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden')
        .required('Campo requerido')
})  