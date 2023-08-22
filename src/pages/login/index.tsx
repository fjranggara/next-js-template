import InputComponent from "@/components/input/InputComponent";
import BaseLayout from "@/components/layout/BaseLayout";
import { Formik } from "formik";
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required')
})

export default function LoginPage() {
    return <BaseLayout>
        <div className="row d-flex justify-content-center mt-5">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <Formik initialValues={{
                            email : '',
                            password : ''
                        }} validationSchema={validationSchema} onSubmit={values => {

                        }}>
                            {
                                ({
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    isSubmitting,
                                }) => (
                                    <form method="post">
                                        <InputComponent label="Email" 
                                        type="email" 
                                        placeholder="Enter email" 
                                        id="email"
                                         value={values.email} onChange={handleChange} />
                                        <InputComponent label="Password" 
                                        type="password" 
                                        placeholder="Enter password" 
                                        id="password" 
                                        value={values.password} onChange={handleChange} />

                                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Submit</button>
                                    </form>
                                )
                            }
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    </BaseLayout>
}