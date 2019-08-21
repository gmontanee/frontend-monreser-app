import React from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import withAuth from "../../components/withAuth";
import authService from '../../services/auth-service';

function SignupTransporter({errors, isSubmitting, ...props}) {
  
  return (
    <div className="Signup">
      <Form>
        {errors.email && <p>{errors.email}</p>}
        <Field type='email' name='email' placeholder='Write your email'/>
        {errors.password && <p>{errors.password}</p>}
        <Field type='password' name='password' placeholder='Write your password'/>
        {errors.username && <p>{errors.username}</p>}
        <Field type='text' name='username' placeholder='Write your username'/>
        {errors.direction && <p>{errors.direction}</p>}
        <Field type='text' name='direction' placeholder='Write your direction'/>
        {errors.country && <p>{errors.country}</p>}
        <Field type='text' name='country' placeholder='Write your country'/>
        {errors.region && <p>{errors.region}</p>}
        <Field type='text' name='region' placeholder='Write your region'/>
        {errors.town && <p>{errors.town}</p>}
        <Field type='text' name='town' placeholder='Write your town'/>
        {errors.postalCode && <p>{errors.postalCode}</p>}
        <Field type='text' name='postalCode' placeholder='Write your postalCode'/>
        <button disabled={isSubmitting && true} type='submit'> submit </button>
      </Form>
    </div>
  );
}

export default withFormik({
  mapPropsToValues({email, password, username, direction, country, region, town, postalCode}) {
    return ({
      email: email || '',
      password: password || '',
      username: username || '',
      direction: direction || '',
      country: country || '',
      region: region || '',
      town: town || '',
      postalCode: postalCode || '',
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
      direction: Yup.string()
      .required(),
      country: Yup.string()
      .required(),
      region: Yup.string()
      .required(),
      town: Yup.string()
      .required(),
      postalCode: Yup.string()
      .required(),
  }),
  handleSubmit(values, {setSubmitting, setErrors, resetForm,props})  {
    setTimeout(()=>{
      console.log(values, props)
      if(values.email === '1@1.com') {
        setErrors({
          email: 'email already taken'
        })
      } else {
        console.log('todo ok')
        authService.signupTransporter(values)
        resetForm()
      }
      setSubmitting(false);
    },2000)
  }
 })(withAuth(SignupTransporter));
