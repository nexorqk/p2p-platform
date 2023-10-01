import { Outlet } from "react-router-dom";
import Header from "./Header";

const MainLayout = () => (
  <>
    <Header />
    {/* <Container
      component="main"
      sx={{ minHeight: "calc(100vh - 158px)", py: 2 }}
    > */}
    <Outlet />
    {/* </Container> */}
    {/* <Box component="footer" sx={{ p: 3, background: "#f5f5f5" }}> */}
    {/* <Typography variant="body2" align="center"> */}
    <footer>© 2023, Alexander Alexeichik</footer>
    {/* </Typography> */}
    {/* </Box> */}
  </>
);

export default MainLayout;
