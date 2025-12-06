import Col from "react-bootstrap/Col";
import { OperatorButton } from "./Buttons";
import CalcRow from "./CalcRow";

function LeftPanel() {
  return (
    <Col>
      <CalcRow>
        {/* <OperatorButton value="Hyp" /> */}
        <OperatorButton value=" mod " text="mod" />
      </CalcRow>
      <CalcRow>
        <OperatorButton value="sin(" text="sin" />
        <OperatorButton value="⁻¹" text="1/x" />
      </CalcRow>
      <CalcRow>
        <OperatorButton value="cos(" text="cos" />
        <OperatorButton value="!" text="x!" />
      </CalcRow>
      <CalcRow>
        <OperatorButton value="tan(" text="tan" />
        <OperatorButton value="²" text="x²" />
      </CalcRow>
      <CalcRow>
        <OperatorButton value="log(" text="log" />
        <OperatorButton value="√(" text="√" />
      </CalcRow>
      <CalcRow>
        <OperatorButton value="ln(" text="ln" />
        <OperatorButton value="^" text=" xʸ" />
      </CalcRow>
      <CalcRow>
        <OperatorButton value="i" text="i" />
        <OperatorButton value="10^" text="x*10ʸ" />
      </CalcRow>
    </Col>
  );
}
export default LeftPanel;
