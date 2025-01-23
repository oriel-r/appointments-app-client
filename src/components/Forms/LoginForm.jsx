/** @format */

import { useState } from "react";
import { useDispatch } from "react-redux";
import { formChecker } from "../../helpers/validator";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../redux/features/Users/userApi";
import { logIn } from "../../redux/features/Users/userSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginUser] = useLoginUserMutation();

  const [userData, setUserData] = useState({
    userName: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    userName: "",
  });

  const handlerUserDataChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: formChecker(userData) ? "" : "Valor invalido",
    });
  };

  const handlerOnSubmit = async (event) => {
    try {
      event.preventDefault();
      const user = await loginUser(userData).unwrap();
      console.log(user);
      dispatch(logIn(user));
      navigate("/home");
    } catch {
      (error) => {
        console.log(error);
      };
    }
  };

  return (
    <>
      <form onSubmit={handlerOnSubmit}>
        <label>Nombre de usuario</label>
        <input
          name="userName"
          type="text"
          value={userData.userName}
          onChange={handlerUserDataChange}
        />
        <label>Contraseña</label>
        <input
          name="password"
          type="password"
          value={userData.password}
          onChange={handlerUserDataChange}
        />
        <button>Iniciar Sesion</button>
      </form>
    </>
  );
};

export default LoginForm;
