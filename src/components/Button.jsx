export default function Button({ children, type, className = "" }) {
  const colors = {
    number: "#0f766e",
    operator: "#fb923c",
    system: "#3b82f6",
  }
  const newClassName = className + " flex justify-center items-center px-10 py-5 m-0.5 rounded-lg";

  return (
    <div className={newClassName}
      style={{ backgroundColor: colors[type] }}
    >
      {children}
    </div>
  );
}