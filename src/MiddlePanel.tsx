import Col from "react-bootstrap/Col";
import { CalcButton, FunctionButton, NumberButton } from "./Buttons";
import CalcRow from "./CalcRow";
import { AppContext } from "./App";
import { useContext } from "react";

function MiddlePanel() {
  const { input, setInput, result, setResult, setHistory } =
    useContext(AppContext)!;
  return (
    <div className="p-2 border rounded">
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
        <NumberButton value="+" />
      </CalcRow>
      <CalcRow>
        <NumberButton value="1" />
        <NumberButton value="2" />
        <NumberButton value="3" />
        <FunctionButton
          value="="
          toolTip="Result"
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
        <FunctionButton
          value="="
          toolTip="Result"
          onClick={() => {
            setInput(result);
            setResult("");
          }}
        />
      </CalcRow>
    </div>
  );
}
export default MiddlePanel;
