import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../Components/Admin/AdminSidebar.jsx";
import AdminNavbar from "../Components/Admin/AdminNavbar.jsx";


const AdminLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <AdminSidebar open={open} setOpen={setOpen} />

      {/* Main Content */}
      <div className="flex-1">
        {/* Topbar (mobile) */}
        <div className="md:hidden p-4 bg-gray-900 text-white">
          <button onClick={() => setOpen(true)}>☰ Menu</button>
        </div>
        <AdminNavbar/>
        <main className="p-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

