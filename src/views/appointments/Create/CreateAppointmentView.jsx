/** @format */

import { useState } from "react";
import FormGenerator from "../../../components/Forms/FormGenerator";
import Alert from "../../../components/AlertModal/Alert";
import { useSelector } from "react-redux";
import { useCreateAppointmentMutation } from "../../../redux/features/Appointments/appointmentsApi";

const CreateAppointmentView = () => {
  const today = new Date().toISOString().split("T")[0];
  const userid = useSelector((state) => state.userSlice.user.id);
  const [created, setCreated] = useState(false);
  const [createAppointment] = useCreateAppointmentMutation();

  const createAppointmentFields = [
    { label: "Fecha", name: "date", type: "date", min: today },
    {
      label: "Hora del turno",
      name: "time",
      type: "time",
      min: "09:00",
      max: "16:59",
      note: "Recuerda que nuestro horario de atención es de 09 a 17",
    },
  ];

  const handlerOnSubmit = async (values) => {
    try {
      const appointmentData = { ...values, userid };
      const response = await createAppointment(appointmentData).unwrap();
      if (response) setCreated(true);
    } catch (error) {
      console.error("Error al crear la cita:", error);
    }
  };

  return (
    <>
      {created && (
        <Alert
          message={{
            title: "¡Cita creada!",
            message: `Fecha: ${createAppointmentFields.date} - Hora: ${createAppointmentFields.time}`,
            buttonText: "Aceptar",
          }}
          isOpen={created}
          onClose={() => setCreated(false)}
        />
      )}
      <FormGenerator
        fields={createAppointmentFields}
        onSubmit={handlerOnSubmit}
        formButtonText="Crear turno"
      />
    </>
  );
};

export default CreateAppointmentView;
