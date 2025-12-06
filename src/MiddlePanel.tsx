import Col from "react-bootstrap/Col";
import { CalcButton, EqualsButton } from "./Buttons";
import CalcRow from "./CalcRow";

function MiddlePanel() {
  return (
    <Col>
      <CalcRow>
        <CalcButton value="%" />
        <CalcButton value="/" />
        <CalcButton value="*" />
        <CalcButton value="-" />
      </CalcRow>
      <CalcRow>
        <CalcButton value="7" />
        <CalcButton value="8" />
        <CalcButton value="9" />
        <CalcButton value="+" />
      </CalcRow>
      <CalcRow>
        <CalcButton value="4" />
        <CalcButton value="5" />
        <CalcButton value="6" />
        <CalcButton value="3" />
      </CalcRow>
      <CalcRow>
        <CalcButton value="1" />
        <CalcButton value="2" />
        <CalcButton value="3" />
        <EqualsButton />
      </CalcRow>
      <CalcRow>
        <CalcButton value="0" />
        <CalcButton value="0" />
        <CalcButton value="." />
        <EqualsButton />
      </CalcRow>
    </Col>
  );
}
export default MiddlePanel;
