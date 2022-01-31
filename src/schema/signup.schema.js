import { number } from 'yup';
import { string, object, ref, date, boolean } from 'yup';

const signupSchema = object().shape({
    first_name: string()
        .trim()
        .min(3, "This field must be at least 2 character long.")
        .max(20, "This field must be at most 20 character long.")
        .required('This field must not be empty.'),

    last_name: string()
        .trim()
        .min(3, "This field must be at least 2 character long.")
        .max(20, "This field must be at most 20 character long.")
        .required('This field must not be empty.'),

    sex: string()
        .required('This field must not be empty.'),

    date_of_birth: date()
        .required('This field must not be empty.'),

    email: string()
        .trim()
        .email("This field must be a valid email")
        .min(2, "This field must be at least 2 character long.")
        .max(30, "This field must be at most 20 character long.")
        .required('This field must not be empty.'),

    password: string()
        .max(50, "This field must be at most 50 character long.")
        .required('This field must not be empty.'),

    confirm_password: string()
        .oneOf([ref('password'), null], 'Passwords must match')
        .required('This field must not be empty.'),

    agree: boolean()
        .required('This field must not be empty.'),

});

export default signupSchema;