import Col from "react-bootstrap/Col";
import { CalcButton } from "./Buttons";
import CalcRow from "./CalcRow";

function LeftPanel() {
  return (
    <Col>
      <CalcRow>
        <CalcButton value="Hyp" />
        <CalcButton value="mod" />
      </CalcRow>
      <CalcRow>
        <CalcButton value="sin" />
        <CalcButton value="1/x" />
      </CalcRow>
      <CalcRow>
        <CalcButton value="cos" />
        <CalcButton value="x!" />
      </CalcRow>
      <CalcRow>
        <CalcButton value="tan" />
        <CalcButton value="x^2" />
      </CalcRow>
      <CalcRow>
        <CalcButton value="log" />
        <CalcButton value="sqrt(x)" />
      </CalcRow>
      <CalcRow>
        <CalcButton value="ln" />
        <CalcButton value="x^y" />
      </CalcRow>
      <CalcRow>
        <CalcButton value="i" />
        <CalcButton value="x*10^y" />
      </CalcRow>
    </Col>
  );
}
export default LeftPanel;
