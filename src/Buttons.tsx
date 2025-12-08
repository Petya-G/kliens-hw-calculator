import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import { AppContext } from "./App";
import { Col, OverlayTrigger, Tooltip } from "react-bootstrap";

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
    <OverlayTrigger placement="bottom" overlay={<Tooltip>{toolTip}</Tooltip>}>
      <Button className="w-100" onClick={onClick}>
        {value}
      </Button>
    </OverlayTrigger>
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
  return (
    <Col className="p-1 d-flex flex-fill">
      <CalcButton value={value} toolTip={toolTip} onClick={onClick} />
    </Col>
  );
}

function NumberButton({ value }: { value: string }) {
  const { setInput } = useContext(AppContext)!;
  return (
    <Col className="p-1 d-flex flex-fill">
      <CalcButton
        value={value}
        onClick={() => {
          setInput((input) => input + value);
        }}
      />
    </Col>
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
    <Col className="p-1 d-flex flex-fill">
      <CalcButton
        value={text}
        toolTip={toolTip}
        onClick={() => {
          setInput((input) => input + value);
        }}
      />
    </Col>
  );
}

export { CalcButton, FunctionButton, OperatorButton, NumberButton };
