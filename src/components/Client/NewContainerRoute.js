import React from 'react';
import withAuth from '../withAuth.js';
import containerService from '../../services/container-service'
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';



function NewContainerRoute({errors, isSubmitting, ...props}) {
  const EmptyOrFullSelect = ({ field, form: { touched, errors }, ...props }) => {
    return (
      <div>
        <select {...field} {...props}>
          <option defaultChecked defaultValue="">
            Select
          </option>
          <option value="recollida">Contenidor per a residus</option>
          <option value="recollidaMesMaterial">Contenidor per a residus i entrega de material</option>
        </select>
        {touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>}
      </div>
    )
  }
  const MaterialFilled = ({ field, form: { touched, errors }, ...props }) => {
    return (
      <div>
        <select {...field} {...props}>
          <option defaultChecked defaultValue="">
            Select
          </option>
          <option value="arena">Arena</option>
          <option value="grava">Grava</option>
          <option value="matxaca">Matxaca</option>
          <option value="tot-u">Tot-u</option>
          <option value="subproducte">Subproducte</option>
          <option value="ullDePerdiu">Ull de Perdiu</option>
        </select>
        {touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>}
      </div>
    )
  }
  const TypeOfWest = ({ field, form: { touched, errors }, ...props }) => {
    return (
      <div>
        <select {...field} {...props}>
          <option defaultChecked defaultValue="">
            Select
          </option>
          <option value="runa">Runa</option>
          <option value="banals">Banals</option>
          <option value="fusta">Fusta</option>
          <option value="paper-cartro">Paper i/o cartró</option>
          <option value="plastic">Plàstic</option>
          <option value="residusVegetals">Residus Vegetals</option>
        </select>
        {touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>}
      </div>
    )
  }
  const Capacity = ({ field, form: { touched, errors }, ...props }) => {
    return (
      <div>
        <select {...field} {...props}>
          <option defaultChecked defaultValue="">
            Select
          </option>
          <option value="5">5</option>
          <option value="7">7</option>
          <option value="9">9</option>
          <option value="12">12</option>
        </select>
        {touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>}
      </div>
    )
  }

  return (
    <div>
      <h1>New Container Page</h1>
        <Form>
          <label htmlFor="">Servei sol·licitat</label>
          <Field name='service' component={EmptyOrFullSelect} />
          {errors.service && <p>{errors.service}</p>}

          { props.values.service === 'recollidaMesMaterial' && 
          <>
            <label htmlFor="">Material a servir</label>
            <Field name='filled' component={MaterialFilled}/>
          </>
          }

          <label htmlFor="">Residu</label>
          <Field name='waste' component={TypeOfWest}/>
          {errors.empty && <p>{errors.empty}</p>}

          <label htmlFor="">Capacitat</label>
          <Field name='capacity' component={Capacity}/>
          {errors.ubicacio && <p>{errors.ubicacio}</p>}
          
          <label htmlFor="">Ubicacio</label>
          <Field type='text' name='ubicacio' placeholder='Write your place'/>
          {errors.ubicacio && <p>{errors.ubicacio}</p>}
          
          <label htmlFor="">Data d'entrega</label>
          <Field type='date' name='dataEntrega'/>
          {errors.dataEntrega && <p>{errors.dataEntrega}</p>}

          <label htmlFor="">Data de recollida(opcional)</label>
          <Field type='date' name='dataRetirada' placeholder='Write your date'/>
          {errors.dataRetirada && <p>{errors.dataRetirada}</p>}
          
          <button disabled={isSubmitting && true} type='submit'> submit </button>
        </Form>
    </div>
  )
}

export default withFormik({
  mapPropsToValues({service, filled, waste, capacity, ubicacio, dataEntrega, dataRetirada}) {
    return ({
      service: service || '',
      filled: filled || '',
      waste: waste || '',
      capacity: capacity || '',
      ubicacio: ubicacio || '',
      dataEntrega: dataEntrega || '',
      dataRetirada: dataRetirada || '',
    })
  },
  validationSchema: Yup.object().shape({
    service: Yup.string()
      .required(),
      waste: Yup.string()
      .required(),
    ubicacio: Yup.string()
      .required(),
    dataEntrega: Yup.string().required(),
    dataRetirada: Yup.string().required(),
    capacity: Yup.string().required(),
    filled: Yup.string()
      .when('service', {
        is: 'recollidaMesMaterial',
        then: Yup.string().required()
      })
  }),
  handleSubmit(values, {setSubmitting, setErrors, resetForm,props})  {
    setTimeout(()=>{
      if(values.service === 'Select') {
        setErrors({
          service: 'seleciona una opcion'
        })
      } 
      else if(values.service === 'recollidaMesMaterial' && values.filled === '') {
        setErrors({
          filled: 'rellena este campo'
        })
      }
      else if(values.filled === 'Select') {
        setErrors({
          service: 'seleciona una opcion'
        })
      } else {
        console.log('todo ok');
        containerService.addContainer(values);
        // resetForm();
      }
      setSubmitting(false);
    },2000)
  }
})(withAuth(NewContainerRoute));