import { NavLink } from "react-router-dom";

const links = [
  ["/", "Dashboard"],
  ["/billing", "Billing"],
  ["/data-agent", "Data Agent"],
  ["/inventory-agent", "Inventory Agent"],
  ["/alert-agent", "Alert Agent"],
  ["/transfer-agent", "Transfer Agent"],
  ["/negotiation-agent", "Negotiation Agent"],
  ["/verification-agent", "Verification Agent"],
];

const Sidebar = () => (
  <aside className="hidden w-64 border-r border-slate-200 bg-white p-4 md:block">
    <ul className="space-y-1">
      {links.map(([path, label]) => (
        <li key={path}>
          <NavLink
            to={path}
            className={({ isActive }) =>
              `block rounded-lg px-3 py-2 text-sm ${
                isActive
                  ? "bg-brand-500 text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`
            }
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  </aside>
);

export default Sidebar;
