import React from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import withAuth from "../components/withAuth";
import authService from '../services/auth-service';

function Signup({errors, isSubmitting, ...props}) {
  
  return (
    <div className="Signup">
      <h1>Admin signup</h1>
      <Form>
        {errors.email && <p>{errors.email}</p>}
        <Field type='email' name='email' placeholder='Write your email'/>
        {errors.password && <p>{errors.password}</p>}
        <Field type='password' name='password' placeholder='Write your password'/>
        {errors.username && <p>{errors.username}</p>}
        <Field type='text' name='username' placeholder='Write your username'/>
        <button disabled={isSubmitting && true} type='submit'> submit </button>
      </Form>
    </div>
  );
}

export default withFormik({
  mapPropsToValues({email, password, username}) {
    return ({
      email: email || '',
      password: password || '',
      username: username || ''
    })
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('It has to be correct')
      .required(),
      password: Yup.string()
      .min(8)
      .required(),
      username: Yup.string()
      .required(),
  }),
  handleSubmit(values, {setSubmitting, setErrors, resetForm,props})  {
    setTimeout(()=>{
      if(values.email === '1@1.com') {
        setErrors({
          email: 'email already taken'
        })
      } else {
        authService.signupAdmin(values);
        resetForm();
      }
      setSubmitting(false);
    },2000)
  }
 })(withAuth(Signup));