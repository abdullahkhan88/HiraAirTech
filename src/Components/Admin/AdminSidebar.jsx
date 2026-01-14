import { Link } from "react-router-dom";

const AdminSidebar = ({ open, setOpen }) => {
    return (
        <aside
            className={`fixed md:static top-0 left-0 h-screen w-64 bg-gray-900 text-white p-5 z-50
             transform transition-transform duration-300
             ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
        >
            <h2 className="text-2xl font-bold mb-8">Admin</h2>

            <nav className="space-y-4">
                <Link
                    to="/admin/dashboard"
                    onClick={() => setOpen(false)}
                    className="block hover:text-blue-400"
                >
                    Dashboard
                </Link>

                <Link
                    to="/admin/users"
                    onClick={() => setOpen(false)}
                    className="block hover:text-blue-400"
                >
                    Users
                </Link>

                <Link
                    to="/admin/settings"
                    onClick={() => setOpen(false)}
                    className="block hover:text-blue-400"
                >
                    Settings
                </Link>

                <Link
                    to="/admin/login"
                    onClick={() => setOpen(false)}
                    className="block text-red-400"
                >
                    Logout
                </Link>
            </nav>
        </aside>
    );
};

export default AdminSidebar;
