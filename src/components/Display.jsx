export default function Display({ value }) {
  return (
    <div
      className="flex justify-end items-center bg-gray-400 text-6xl m-2 p-2"
      style={{ textShadow: "1.3px 1.3px #383838" }}
    >
      {value}
    </div>
  );
}
