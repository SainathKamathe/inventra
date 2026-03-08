import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const DashboardLayout = ({ children }) => (
  <div className="min-h-screen bg-slate-100">
    <Navbar />
    <div className="mx-auto flex max-w-7xl">
      <Sidebar />
      <main className="w-full p-4 md:p-6">{children}</main>
    </div>
  </div>
);

export default DashboardLayout;
