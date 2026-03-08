import { Navigate, Route, Routes } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import POS from "../pages/Billing/POS";
import DataAgentDashboard from "../pages/DataAgent/DataAgentDashboard";
import InventoryDashboard from "../pages/InventoryAgent/InventoryDashboard";
import AlertDashboard from "../pages/AlertAgent/AlertDashboard";
import TransferDashboard from "../pages/TransferAgent/TransferDashboard";
import NegotiationDashboard from "../pages/NegotiationAgent/NegotiationDashboard";
import VerificationDashboard from "../pages/VerificationAgent/VerificationDashboard";

const AppRoutes = () => (
  <DashboardLayout>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/billing" element={<POS />} />
      <Route path="/data-agent" element={<DataAgentDashboard />} />
      <Route path="/inventory-agent" element={<InventoryDashboard />} />
      <Route path="/alert-agent" element={<AlertDashboard />} />
      <Route path="/transfer-agent" element={<TransferDashboard />} />
      <Route path="/negotiation-agent" element={<NegotiationDashboard />} />
      <Route path="/verification-agent" element={<VerificationDashboard />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </DashboardLayout>
);

export default AppRoutes;
