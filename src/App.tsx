import { Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import SignUpPage from "./pages/SignUpPage";
import NotFoundPage from "./pages/NotFoundPage";
import SignInPage from "./pages/SignInPage";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<WelcomePage />} />
        <Route path="sign-in" element={<SignInPage />} />
        {/* <Route path="sign-up" element={<SignUpPage />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
