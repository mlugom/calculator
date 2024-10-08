import { useContext } from "react";
import { HandleInputContext } from "../contexts/HandleInputContext";

export default function Button({ children, type, className = "" }) {
  const handleInput = useContext(HandleInputContext);
  const colors = {
    number: "#0f766e",
    operator: "#fb923c",
    system: "#3b82f6",
  }
  const newClassName = className + " flex justify-center items-center px-10 py-5 m-0.5 rounded-lg cursor-pointer";

  function sendInput() {
    const input = {
      type,
      value: children,
    }
    handleInput(input);
  }

  return (
    <div className={newClassName}
      style={{ backgroundColor: colors[type] }}
      onClick={sendInput}
    >
      {children}
    </div>
  );
}