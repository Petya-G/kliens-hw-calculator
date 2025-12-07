import Col from "react-bootstrap/Col";
import { CalcButton, NumberButton } from "./Buttons";
import CalcRow from "./CalcRow";
import { AppContext } from "./App";
import { useContext } from "react";

function MiddlePanel() {
  const { input, setInput, result, setResult, setHistory } =
    useContext(AppContext)!;
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
        <CalcButton
          value="="
          onClick={() => {
            if (input !== "" || result !== "" || input === result)
              setHistory((prev) => [...prev, { input: input, result: result }]);

            setInput(result);
            setResult("");
          }}
        />
      </CalcRow>
      <CalcRow>
        <NumberButton value="0" />
        <NumberButton value="0" />
        <NumberButton value="." />
        <CalcButton
          value="="
          onClick={() => {
            setInput(result);
            setResult("");
          }}
        />
      </CalcRow>
    </Col>
  );
}
export default MiddlePanel;
