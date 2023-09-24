import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Header from "./Header";

const { Footer, Content } = Layout;

const MainLayout = () => {
  return (
    <Layout>
      <Header />
      <Content className="main">
        <div className="main-container">
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        © 2023, Alexander Alexeichik
      </Footer>
    </Layout>
  );
};

export default MainLayout;
