/** @format */

import Appointment from "./appointment/Appointment";
import { useSelector } from "react-redux";
import { useGetUserByIdQuery } from "../../redux/features/Users/userApi";
import { useCancelAppointmentMutation } from "../../redux/features/Appointments/appointmentsApi";

const AppointmentGroup = () => {
  const id = useSelector((state) => state.userSlice.user.id);
  const {
    data: dataUserById,
    error: errorUserById,
    isLoading: isLoadingUser,
    refetch: userRefetch,
  } = useGetUserByIdQuery(id);

  const [cancelAppointment] = useCancelAppointmentMutation();

  const handleCancel = async (id) => {
    try {
      await cancelAppointment(id);
      userRefetch(); // Refetch solo si es necesario
    } catch (error) {
      console.error("Error al cancelar la cita:", error);
    }
  };

  return (
    <>
      {isLoadingUser ? (
        <p>Cargando turnos...</p>
      ) : errorUserById ? (
        <p>Se produjo un error.</p>
      ) : dataUserById?.appointments?.length === 0 ? (
        <p>No hay turnos para este usuario.</p>
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {dataUserById?.appointments?.map((appointment, i) => (
                <tr key={i}>
                  <Appointment
                    cancelAppointment={handleCancel}
                    appointment={appointment}
                  />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default AppointmentGroup;
