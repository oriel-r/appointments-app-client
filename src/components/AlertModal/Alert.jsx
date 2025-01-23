/* import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Alert.module.css";

const Alert = ({ message, isOpen, countdown, redirectPath, onclose }) => {
  const [timeLeft, setTimeLeft] = useState(countdown);
  const navigate = useNavigate();
  let handlerOnClick = undefined;

useEffect(() => {
  if (!isOpen) return;
  
  if (redirectPath) {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
  
    handlerOnClick = () => navigate(redirectPath);
  
    if (timeLeft === 0) {
      navigate(redirectPath);
      return () => clearInterval(intervalId);
    }
  
      return () => clearInterval(intervalId);
    } else {
      handlerOnClick = () => onclose();
    }
  }, [isOpen, timeLeft, navigate, redirectPath]);
  
  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal}>
        <h2>{message.title}</h2>
        <p>{message.message}</p>
        <p>Redirigiendo en {timeLeft} segundos...</p>
        <button className={styles.button}>{message.buttonText}</button>
      </div>
    </div>
  );
};

export default Alert;
 */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Alert.module.css";

const Alert = ({ message, isOpen, countdown, redirectPath, onClose }) => {
  const [timeLeft, setTimeLeft] = useState(countdown);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isOpen) return;

    if (redirectPath) {
      // Resetea el temporizador al valor inicial
      setTimeLeft(countdown);

      // Inicia el contador solo si hay una ruta de redirección
      const intervalId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      // Redirige automáticamente cuando el tiempo se acaba
      if (timeLeft === 0) {
        navigate(redirectPath);
      }

      return () => clearInterval(intervalId);
    } else {
      // Si no hay redirección, solo cierra el modal al hacer clic en el botón
      handlerOnClick(false);
    }
  }, [isOpen]);

  const handlerOnClick = (bolean) => {
    if (bolean) {
      navigate(redirectPath);
    } else {
      onClose(); // Cierra el modal si no hay redirección
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal}>
        <h2>{message.title}</h2>
        <p>{message.message}</p>
        {redirectPath && <p>Redirigiendo en {timeLeft} segundos...</p>}
        <button onClick={handlerOnClick} className={styles.button}>
          {message.buttonText}
        </button>
      </div>
    </div>
  );
};

export default Alert;
