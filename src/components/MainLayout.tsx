import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Header from "./Header";

const { Footer, Content } = Layout;

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Content className="main">
        <Outlet />
      </Content>
      <Footer className="footer">© 2023, Alexander Alexeichik</Footer>
    </div>
  );
};

export default MainLayout;
