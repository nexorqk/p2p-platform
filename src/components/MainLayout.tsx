import { Layout } from "antd";
import { NavLink, Outlet } from "react-router-dom";

const { Header, Footer, Content } = Layout;

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header className="header">
        <NavLink to="/" style={{ fontSize: "1.5rem" }}>
          Music Platform
        </NavLink>
        <div className="auth">
          <NavLink className="link" to="/sign-in">
            Sign In
          </NavLink>
          <h1 className="slash"> / </h1>
          <NavLink className="link" to="/sign-up">
            Sign Up
          </NavLink>
        </div>
      </Header>
      <Content className="content">
        <Outlet />
      </Content>
      <Footer className="footer">© 2023, Alexander Alexeichik</Footer>
    </div>
  );
};

export default MainLayout;
