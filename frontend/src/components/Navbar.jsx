const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4 shadow-sm">
      <h1 className="text-lg font-bold text-slate-800">fullstack-dashboard</h1>
      <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
        Live Dashboard
      </span>
    </nav>
  );
};

export default Navbar;
