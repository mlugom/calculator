import { useState } from "react";
import ButtonGrid from "./ButtonGrid";
import Display from "./Display";
import { HandleInputContext } from "../contexts/HandleInputContext";

export default function Calculator() {
  const [number1, setNumber1] = useState(null);
  const [number2, setNumber2] = useState(null);
  const [operator, setOperator] = useState(null);
  const [displayValue, setDisplayValue] = useState("0");
  const [isNewInput, setIsNewInput] = useState(false);

  function operate(operator, number1, number2) {}

  function handleInput(input) {
    let number, setter;
    if (input.type == "number") {
      updateDisplayValue(input.value);
    } else if (input.type == "system") {
      runSystemOp(input.value);
    } else if (input.type == "operator") {
      handleOperator(input.value);
    }
  }

  function updateDisplayValue(value) {
    let number = displayValue == "0" || isNewInput ? "" : displayValue;
    number += value;

    setDisplayValue(number);
    if (isNewInput) {
      setIsNewInput(false);
    }
  }

  function runSystemOp(value) {
    if (value == "AC") {
      clearAll();
    } else if (value == "C") {
      popNumber();
    }
  }

  function clearAll() {
    setDisplayValue("0");
    setNumber1(null);
    setNumber2(null);
    setOperator(null);
  }

  function popNumber() {
    const newNumber = displayValue.slice(0, -1);
    if (newNumber == "") {
      newNumber = "0";
    }
    setDisplayValue(newNumber);
  }

  function handleOperator(value) {
    if (value == "=") {
      return;
    }
    setNumber1(displayValue);
    setOperator(value);
    setIsNewInput(true);
  }

  return (
    <div className="bg-black border-gray-700 rounded-xl border-8">
      <HandleInputContext.Provider value={handleInput}>
        <Display value={displayValue} />
        <ButtonGrid />
      </HandleInputContext.Provider>
    </div>
  );
}
