import Col from "react-bootstrap/Col";
import { CalcButton, NumberButton } from "./Buttons";
import CalcRow from "./CalcRow";

function MiddlePanel() {
  return (
    <Col>
      <CalcRow>
        <NumberButton value="%" />
        <NumberButton value="/" />
        <NumberButton value="*" />
        <NumberButton value="-" />
      </CalcRow>
      <CalcRow>
        <NumberButton value="7" />
        <NumberButton value="8" />
        <NumberButton value="9" />
        <NumberButton value="+" />
      </CalcRow>
      <CalcRow>
        <NumberButton value="4" />
        <NumberButton value="5" />
        <NumberButton value="6" />
        <NumberButton value="3" />
      </CalcRow>
      <CalcRow>
        <NumberButton value="1" />
        <NumberButton value="2" />
        <NumberButton value="3" />
        <CalcButton value="=" onClick={() => {}} />
      </CalcRow>
      <CalcRow>
        <NumberButton value="0" />
        <NumberButton value="0" />
        <NumberButton value="." />
        <CalcButton value="=" onClick={() => {}} />
      </CalcRow>
    </Col>
  );
}
export default MiddlePanel;
