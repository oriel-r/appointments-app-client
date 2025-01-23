/** @format */

import styles from "./Appointment.module.css";

const Appointment = ({
  appointment: { id, date, time, status },
  cancelAppointment,
}) => {
  const handleCancelClick = () => {
    cancelAppointment(id);
  };

  return (
    <>
      <td>{date}</td>
      <td>{time}</td>
      <td>{status}</td>
      <td>
        <button
          type="button"
          onClick={handleCancelClick}
          disabled={status === "cancel"}
        >
          Cancelar
        </button>
      </td>
    </>
  );
};

export default Appointment;
