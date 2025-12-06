import { useState, useContext } from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { evaluate } from "mathjs";
import { AppContext } from "./App";

function useCalculate() {
  const { input, setResult } = useContext(AppContext)!;
  return () => {
    try {
      setResult(evaluate(input));
    } catch (error) {
      setResult("Syntax error");
    }
  };
}

function CalcButton({ value }: { value: string }) {
  const { setInput } = useContext(AppContext)!;
  const calculate = useCalculate();
  return (
    <Col>
      <Button
        onClick={() => {
          setInput((input) => input + value);
          calculate();
        }}
      >
        {value}
      </Button>
    </Col>
  );
}

function EqualsButton() {
  const calculate = useCalculate();
  return (
    <Col>
      <Button onClick={calculate}>=</Button>
    </Col>
  );
}

export { useCalculate, CalcButton, EqualsButton };
