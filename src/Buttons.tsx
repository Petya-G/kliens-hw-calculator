import { useState, useContext } from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { AppContext } from "./App";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

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
  return (
    <CalcButton
      value={value}
      onClick={() => {
        setInput((input) => input + value);
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
  return (
    <CalcButton
      value={text}
      toolTip={toolTip}
      onClick={() => {
        setInput((input) => input + value);
      }}
    />
  );
}

export { CalcButton, OperatorButton, NumberButton };
