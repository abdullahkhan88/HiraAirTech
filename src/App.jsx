import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Admin Pages
import AdminLayout from "./Layouts/AdminLayout.jsx";
import AdminDashboard from "./Pages/Admin/AdminDashboard.jsx";

import AdminLogin from "./Pages/Admin/AdminLogin.jsx";
import AdminSettings from "./Pages/Admin/AdminSettings.jsx";
import AdminUser from "./Pages/Admin/AdminUser.jsx";

// Client Pages
import ClientLayout from "./Layouts/ClientLayout.jsx";
import Home from "./Pages/Client/Home.jsx";
import About from "./Pages/Client/About.jsx";
import Services from "./Pages/Client/Services.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ========== CLIENT ROUTES ========== */}
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />


        </Route>

        {/* ========== ADMIN LOGIN ========== */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* ========== ADMIN PANEL ========== */}
        <Route path="/admin" element={<AdminLayout />}>
           <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<AdminUser />} />
          <Route path="settings" element={<AdminSettings />} />

        </Route>

        {/* ========== FALLBACK ================= */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
