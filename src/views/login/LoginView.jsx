/** @format */

import LoginForm from "../../components/Forms/LoginForm";
import { useNavigate } from "react-router-dom";

const LoginView = () => {
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/register");
  };
  return (
    <div>
      <LoginForm />
      <p>No tienes cuenta?</p>
      <button type="button" onClick={redirect}>
        Registrate
      </button>
    </div>
  );
};

export default LoginView;
