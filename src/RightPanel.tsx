import Col from "react-bootstrap/Col";
import { CalcButton } from "./Buttons";
import CalcRow from "./CalcRow";

function RightPanel() {
  return (
    <Col>
      <CalcRow>
        <CalcButton value="C" />
        <CalcButton value="<-" />
      </CalcRow>
      <CalcRow>
        <CalcButton value="AC" />
        <CalcButton value="MS" />
      </CalcRow>
      <CalcRow>
        <CalcButton value="(" />
        <CalcButton value="M" />
      </CalcRow>
      <CalcRow>
        <CalcButton value=")" />
        <CalcButton value="MR" />
      </CalcRow>
      <CalcRow>
        <CalcButton value="+/-" />
        <CalcButton value="M+" />
      </CalcRow>
    </Col>
  );
}
export default RightPanel