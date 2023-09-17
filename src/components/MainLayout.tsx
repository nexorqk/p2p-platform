import { Layout } from "antd";
import { Link, Outlet } from "react-router-dom";

const { Header, Footer, Content } = Layout;

const styles = {
  headerStyle: {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 50,
    lineHeight: "64px",
    backgroundColor: "#7dbcea",
  },
  contentStyle: {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#108ee9",
  },
  footerStyle: {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#7dbcea",
  },
} satisfies Record<string, React.CSSProperties>;

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header style={styles.headerStyle}>
        <Link to="/">Welcome</Link>
        <Link to="/auth">Auth</Link>
      </Header>
      <Content style={styles.contentStyle}>
        <Outlet />
      </Content>
      <Footer style={styles.footerStyle}>© 2023, Alexander Alexeichik</Footer>
    </div>
  );
};

export default MainLayout;
