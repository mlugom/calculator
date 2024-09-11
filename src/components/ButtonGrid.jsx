import Button from "./Button";
import NumPad from "./NumPad";

export default function ButtonGrid() {
  return (
    <div className="grid grid-cols-4 grid-rows-5 text-2xl">
      <Button type="system">AC</Button>
      <Button type="system">C</Button>
      <Button type="operator">/</Button>
      <Button type="operator">*</Button>
      <NumPad className="col-span-3 row-span-4" />
      <Button type="operator">-</Button>
      <Button type="operator">+</Button>
      <Button type="operator" className="row-span-2">
        =
      </Button>
    </div>
  );
}
