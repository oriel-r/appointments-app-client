/** @format */

import "./reset.css";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import RegisterView from "./views/register/RegisterView";
import LoginView from "./views/login/LoginView";
import CreateAppointmentView from "./views/appointments/Create/CreateAppointmentView";
import { useSelector } from "react-redux";
import AppointmentsView from "./views/appointments/AppointmentsView";
import HomeView from "./views/home/HomeView";

function App() {
  let isloged = useSelector((state) => state.userSlice.login);

  return (
    <>
      {isloged && <Navbar />}
      <Routes>
        <Route path="/" element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />

        {isloged && (
          <>
            <Route path="/home" element={<HomeView />} />
            <Route
              path="/create-appointment"
              element={<CreateAppointmentView />}
            />
            <Route path="/my-appointments" element={<AppointmentsView />} />)
          </>
        )}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
