/** @format */

import styles from "./HomeView.module.css";
import { useSelector } from "react-redux";

const HomeView = () => {
  const user = useSelector((state) => state.userSlice.user);
  return (
    <>
      <h1 className={styles.color}>Hola{user.name}</h1>
    </>
  );
};

export default HomeView;
