import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { formikChecker } from '../../helpers/formickValidator';

const FormGenerator = ({ fields, onSubmit, formButtonText }) => {
    const initialvalues = {}
    fields.forEach(item => {
        initialvalues[item.name] = "";
    });
  return (
    <Formik
    initialValues={initialvalues}
    validate={formikChecker}
    onSubmit={onSubmit}
    >

        <Form>
            { fields.map((item, i) => (
                <div key={i}>
                <label>{item.label}</label>
                    <Field type={item.type} 
                    name={item.name} 
                    {...(item.placeholder ? {placeholder: item.placeholder} : {})} 
                    {...(item.max ? { max: item.max } : {})}
                    {...(item.min ? { min: item.min } : {})}
                    />
                    {item.note && <p>{item.note}</p>}
                    <ErrorMessage name={item.name} />
                </div>
            ))}
            <button type='submit'>{formButtonText}</button>
        </Form>
    </Formik>
  )
}

export default FormGenerator
