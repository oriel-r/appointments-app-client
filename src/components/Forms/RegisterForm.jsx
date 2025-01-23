/** @format */

import { Formik, Form, Field, ErrorMessage } from "formik";
import { formikChecker } from "../../helpers/formickValidator";
import { useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../redux/features/Users/userApi";
import styles from "./RegisterForm.module.css";

const RegisterForm = () => {
  const [register] = useRegisterUserMutation();
  const navigate = useNavigate();

  const handlerRegister = async (values) => {
    try {
      console.log(values);
      const { userName, name, email, password, birthdate, nDni } = values;
      const result = await register({
        userName,
        name,
        email,
        password,
        birthdate,
        nDni,
      }).unwrap();
      console.log(result);
      alert("Registro exitoso");
      navigate("/");
    } catch (error) {
      alert("No se pudo completar", error);
    }
  };

  return (
    <div className={styles.form_conteiner}>
      <Formik
        initialValues={{
          name: "",
          userName: "",
          email: "",
          password: "",
          confirmPassword: "",
          nDni: "",
          birthdate: "",
        }}
        validate={formikChecker}
        onSubmit={(values) => {
          handlerRegister(values);
        }}
      >
        <Form>
          <label>Nombre</label>
          <Field type="text" name="name" placeholder="Juan" />
          <ErrorMessage name="name" />
          <label>Nombre de usuario</label>
          <Field type="text" name="userName" placeholder="juanca" />
          <ErrorMessage name="userName" />
          <label>Contraseña</label>
          <Field type="password" name="password" placeholder="********" />
          <ErrorMessage name="password" />
          <p>
            Debe contener por lo menos una mayuscula, un numero y una longitud
            mayor a 8 caracteres
          </p>
          <label>Repetir contraseña</label>
          <Field
            type="password"
            name="confirmPassword"
            placeholder="********"
          />
          <ErrorMessage name="confirmPassword" />
          <label>Correo electronico</label>
          <Field type="email" name="email" placeholder="hola@ejemplo.com" />
          <ErrorMessage name="email" />
          <label>Fecha de nacimiento</label>
          <Field type="text" name="birthdate" placeholder="1998-12-22" />
          <ErrorMessage name="birthdate" />
          <label>Numero de DNI</label>
          <Field type="number" name="nDni" placeholder="35456354" />
          <ErrorMessage name="nDni" />
          <button type="submit">Registrarse</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
