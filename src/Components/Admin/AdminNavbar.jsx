const AdminNavbar = () => {
  const userName = "Abdullah"; // baad me auth se aayega

  return (
    <div className="hidden md:flex items-center justify-between
                    h-16 px-6 bg-white shadow">  
      {/* Left branding */}
      <h1 className="text-xl font-bold text-gray-800">
        HireArkTech
      </h1>
      {/* Right user name */}
      <div className="flex items-center gap-2">
        <span className="text-gray-600 text-sm">Welcome,</span>
        <span className="font-semibold text-gray-800">
          {userName}
        </span>
      </div>
    </div>
  );
};

export default AdminNavbar;
