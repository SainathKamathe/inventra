const Button = ({ children, className = "", ...props }) => (
  <button
    className={`rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700 ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
