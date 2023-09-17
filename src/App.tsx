import { Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import NotFoundPage from "./pages/NotFoundPage";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<WelcomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
