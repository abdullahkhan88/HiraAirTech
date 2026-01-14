import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  

  const handleLogin = (e) => {
    e.preventDefault();
    // TEMP admin credentials (baad mein backend se connect karenge)
    if (username === "admin" && password === "Admin@123") {
      localStorage.setItem("adminToken", "secure_admin_token");
      navigate("/admin/dashboard");
    } else {
      alert("Invalid Admin Credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 px-4">
      
      <div className="w-full max-w-md bg-slate-900 text-white rounded-2xl shadow-xl p-6 sm:p-8">
        
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">
          Admin Login
        </h2>
        <p className="text-center text-gray-400 mb-6 text-sm">
          Authorized access only
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          
          {/* Username */}
          <div>
            <label className="block text-sm mb-1">Username</label>
            <input
              type="text"
              placeholder="Enter admin username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition py-2 rounded-lg font-semibold"
          >
            Login
          </button>
        </form>

        <p className="text-xs text-center text-gray-500 mt-6">
          © 2026 Force Cooling Admin Panel
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
