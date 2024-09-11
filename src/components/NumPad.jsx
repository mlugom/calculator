import Button from "./Button";

export default function NumPad({ className }) {
  return (
    <div className={className + " grid grid-cols-subgrid"}>
      <Button type="number">7</Button>
      <Button type="number">8</Button>
      <Button type="number">9</Button>
      <Button type="number">4</Button>
      <Button type="number">5</Button>
      <Button type="number">6</Button>
      <Button type="number">1</Button>
      <Button type="number">2</Button>
      <Button type="number">3</Button>
      <Button type="number" className="col-span-2">0</Button>
      <Button type="number">.</Button>
    </div>
  )
}