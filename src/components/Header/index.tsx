import { NavLink } from "react-router-dom";

import styles from "./Header.module.css";
import { Layout } from "antd";

const Header = () => {
  return (
    <Layout.Header className={styles.header}>
      <NavLink to="/">Music Platform</NavLink>
      <div className={styles.auth}>
        <NavLink to="/sign-in">Sign In</NavLink>
        <p className={styles.slash}> / </p>
        <NavLink to="/sign-up">Sign Up</NavLink>
      </div>
    </Layout.Header>
  );
};

export default Header;
