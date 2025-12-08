import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import { AppContext } from "./App";
import { Col, OverlayTrigger, Tooltip } from "react-bootstrap";

function CalcButton({
  value,
  onClick,
}: {
  value: string;
  onClick: () => void;
}) {
  return (
    <Button className="w-100" onClick={onClick}>
      {value}
    </Button>
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
      <OverlayTrigger placement="bottom" overlay={<Tooltip>{toolTip}</Tooltip>}>
        <CalcButton value={value} onClick={onClick} />
      </OverlayTrigger>
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
      <OverlayTrigger placement="bottom" overlay={<Tooltip>{toolTip}</Tooltip>}>
        <CalcButton
          value={text}
          onClick={() => {
            setInput((input) => input + value);
          }}
        />
      </OverlayTrigger>
    </Col>
  );
}

export { CalcButton, FunctionButton, OperatorButton, NumberButton };
