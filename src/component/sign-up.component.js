import { Field, Form, Formik, ErrorMessage } from 'formik';
import signupSchema from '../schema/signup.schema';

const SignUp = () => {
    return (
        <Formik
            initialValues={{
                first_name: '',
                last_name: '',
                email: '',
                date_of_birth: '',
                sex: '',
                password: '',
                confirm_password: ''
            }}
            validationSchema={signupSchema}
            onSubmit={(values, actions) => {
                console.log(values);
                actions.setSubmitting(false);
            }}
        >
            {formikProps => (
                <Form onSubmit={formikProps.handleSubmit}>
                    <div className="form-group">
                        <label className="form-label" htmlFor="first_name">First Name<span className="text-danger">*</span> </label>
                        <Field className="form-control" type="text" id="first_name" name="first_name" />
                        <div className="invalid-feedback d-block"><ErrorMessage name="first_name" />  </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="last_name">Last Name<span className="text-danger">*</span> </label>
                        <Field className="form-control" type="text" id="last_name" name="last_name" />
                        <div className="invalid-feedback d-block"><ErrorMessage name="last_name" />  </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="email">Email<span className="text-danger">*</span> </label>
                        <Field className="form-control" type="text" id="email" name="email" />
                        <div className="invalid-feedback d-block"><ErrorMessage name="email" />  </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="password">Password<span className="text-danger">*</span> </label>
                        <Field className="form-control" type="password" id="password" name="password" />
                        <div className="invalid-feedback d-block"><ErrorMessage name="password" />  </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="confirm_password">Confirm Password<span className="text-danger">*</span> </label>
                        <Field className="form-control" type="confirm_password" id="confirm_password" name="confirm_password" />
                        <div className="invalid-feedback d-block"><ErrorMessage name="confirm_password" />  </div>
                    </div>

                    <button type="submit" className="btn btn-primary"> LogIn </button>
                </Form>
            )}
        </Formik>
    );
}

export default SignUp;