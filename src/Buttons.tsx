import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import { AppContext } from "./App";
import { Col, OverlayTrigger, Tooltip } from "react-bootstrap";

function CalcButton({
  value,
  onClick,
  toolTip,
}: {
  value: string;
  toolTip?: string;
  onClick: () => void;
}) {
  var button = (
    <Col className="p-1 d-flex flex-fill">
      <Button className="w-100" onClick={onClick}>
        {value}
      </Button>
    </Col>
  );

  if (!toolTip) return button;

  return (
    <OverlayTrigger placement="bottom" overlay={<Tooltip>{toolTip}</Tooltip>}>
      {button}
    </OverlayTrigger>
  );
}

function NumberButton({ value, toolTip }: { value: string; toolTip?: string }) {
  const { setInput } = useContext(AppContext)!;
  return (
    <CalcButton
      value={value}
      toolTip={toolTip}
      onClick={() => {
        setInput((input) => input + value);
      }}
    />
  );
}

function FunctionButton({
  value,
  toolTip,
  onClick,
}: {
  value: string;
  toolTip: string;
  onClick: () => void;
}) {
  return <CalcButton value={value} onClick={onClick} toolTip={toolTip} />;
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

export { CalcButton, FunctionButton, OperatorButton, NumberButton };
