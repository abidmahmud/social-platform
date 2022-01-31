import { Field, Form, Formik, ErrorMessage } from 'formik';
import loginSchema from '../schema/login.schema';

const LogIn = () => {
    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={loginSchema}
            onSubmit={(values, actions) => {
                console.log(values);
                actions.setSubmitting(false);
            }}
        >
            {formikProps => (
                <Form onSubmit={formikProps.handleSubmit}>
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

                    <button type="submit" className="btn btn-primary"> LogIn </button>
                </Form>
            )}
        </Formik>
    );
};

export default LogIn;

