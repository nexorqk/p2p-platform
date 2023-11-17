import { Route, Routes } from "react-router-dom";

import {
  WelcomePage,
  NotFoundPage,
  SignInPage,
  SignUpPage,
  TrainersPage,
} from "./pages";
import { MainLayout } from "./components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<WelcomePage />} />
        <Route path="/trainers" element={<TrainersPage />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
