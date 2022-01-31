import { string, object } from 'yup';

const loginSchema = object().shape({
    email: string()
        .trim()
        .email("This field must be a valid email")
        .min(2, "This field must be at least 2 character long.")
        .max(30, "This field must be at most 20 character long.")
        .required('This field must not be empty.'),
    password: string()
        .max(50, "This field must be at least 50 character long.")
        .required('This field must not be empty.')
});

export default loginSchema;