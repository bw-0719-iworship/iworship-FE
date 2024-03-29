import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { axiosAuth } from '../../axiosAuth/axiosAuth';
import { Redirect } from "react-router-dom";


function Login ({touched, errors, isSubmitting}){

    const token = localStorage.getItem("token");

    if (token) {
        return <Redirect to="/home" />;
    }


    return(
        <Form>
            <div>
                <label>Username</label>

                <Field 
                    name='username'
                    type='text'
                    autoComplete='off' />

                <h3>{touched.username && errors.username}</h3>
            </div>

            <div>
                <label>Password</label>

                <Field 
                    name='password'
                    type='password'
                    autoComplete='off' />

                <h3>{touched.password && errors.password}</h3>
            </div>

            <button>Login</button>
            {isSubmitting && 'YEET'}

        </Form>
    )
}



export default withFormik({
    
    mapPropsToValues(){
        return{
            username: '',
            password: '',
        }
    },

    validationSchema: Yup.object().shape({
        username: Yup.string()
        .max(20, 'Username must be under 20 characters')
        .required('Username Required'),

        password: Yup.string()
        .min(8, 'Password must be under 20 characters')
        .required('Username Required')
    }),

    handleSubmit(values, formikBag){
        const url = '/';

        return axiosAuth()
        .post(url, values)
        .then(res =>{
            console.log(res)
            localStorage.setItem("token", res.data.token);
            formikBag.resetForm();
            formikBag.props.history.push('/home')
        })
    }
})(Login)