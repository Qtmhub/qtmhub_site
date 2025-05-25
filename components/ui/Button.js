export default function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`bg-[#00E676] hover:bg-[#00C853] text-black font-medium rounded-md px-8 py-3 text-lg ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
