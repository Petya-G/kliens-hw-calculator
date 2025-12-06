import { useState, useContext } from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { evaluate } from "mathjs";
import { AppContext } from "./App";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function useCalculate({
  clearInput,
  errors,
}: {
  clearInput?: boolean;
  errors?: boolean;
} = {}) {
  const { input, setInput, setResult } = useContext(AppContext)!;
  return () => {
    try {
      setResult(evaluate(input));
    } catch (error) {
      if (!!errors) setResult("Syntax error");
    }
    if (!!clearInput) setInput("");
  };
}

function CalcButton({
  value,
  toolTip,
  onClick,
}: {
  value: string;
  toolTip?: string;
  onClick: () => void;
}) {
  return (
    <Col>
      <OverlayTrigger placement="bottom" overlay={<Tooltip>{toolTip}</Tooltip>}>
        <Button onClick={onClick}>{value}</Button>
      </OverlayTrigger>
    </Col>
  );
}

function NumberButton({ value }: { value: string }) {
  const { setInput } = useContext(AppContext)!;
  const calculate = useCalculate();
  return (
    <CalcButton
      value={value}
      onClick={() => {
        setInput((input) => input + value);
        calculate();
      }}
    />
  );
}

function OperatorButton({
  value,
  text,
  toolTip,
}: {
  value: string;
  text: string;
  toolTip?: string;
}) {
  const { setInput } = useContext(AppContext)!;
  const calculate = useCalculate();
  return (
    <CalcButton
      value={text}
      toolTip={toolTip}
      onClick={() => {
        setInput((input) => input + value);
        calculate();
      }}
    />
  );
}

export { useCalculate, CalcButton, OperatorButton, NumberButton };
