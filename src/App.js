import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HistoryPage from "./pages/HistoryPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import BookAppointmentPage from "./pages/BookAppointmentPage";
import AdminPage from "./pages/AdminPage";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import { UserContext } from "./context/UserContext";

const App = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route element={<ProtectedRoutes auth={loggedInUser.isLoggedIn} />}>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/book" element={<BookAppointmentPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
