import Col from "react-bootstrap/Col";
import { CalcButton, OperatorButton } from "./Buttons";
import CalcRow from "./CalcRow";
import { AppContext } from "./App";
import { useContext } from "react";

function RightPanel() {
  const { input, setInput, result, setResult } = useContext(AppContext)!;
  return (
    <Col>
      <CalcRow>
        <CalcButton
          value="C"
          onClick={() => {
            setInput("");
            setResult("");
          }}
        />
        <CalcButton
          value="<-"
          onClick={() => {
            setInput(input.substring(0, input.length - 1));
          }}
        />
      </CalcRow>
      <CalcRow>
        <CalcButton value="AC" onClick={() => {}} />
        <CalcButton value="MS" onClick={() => {}} />
      </CalcRow>
      <CalcRow>
        <OperatorButton value="(" text="(" />
        <CalcButton value="M" onClick={() => {}} />
      </CalcRow>
      <CalcRow>
        <OperatorButton value=")" text=")" />
        <CalcButton value="MR" onClick={() => {}} />
      </CalcRow>
      <CalcRow>
        <CalcButton value="+/-" onClick={() => {}} />
        <CalcButton value="M+" onClick={() => {}} />
      </CalcRow>
    </Col>
  );
}
export default RightPanel;
