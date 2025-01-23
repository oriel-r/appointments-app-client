/** @format */

import regex from "./regexValidations";

export const formikChecker = (values) => {
  const errors = {};

  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Las contraseñas no coinciden";
  }

  for (const name in values) {
    const value = values[name];

    if (name in regex) {
      const isValid = regex[name]?.test(String(value));
      if (!isValid) {
        errors[name] = `El campo ${name} es inválido`;
      }
    }

    if (name === "appointmentDate") {
      const selectedDate = new Date(value);
      const dayOfWeek = selectedDate.getDay();
      if (dayOfWeek === 0 || dayOfWeek === 6) {
        errors[name] = "No se pueden programar turnos los fines de semana.";
      }
    }
  }

  return errors;
};
