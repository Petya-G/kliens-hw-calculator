import { FunctionButton, OperatorButton } from "./Buttons";
import CalcRow from "./CalcRow";
import { AppContext } from "./App";
import { useContext } from "react";

function RightPanel() {
  const { input, setInput, setResult, setHistory } = useContext(AppContext)!;
  return (
    <div className="p-2  rounded">
      <CalcRow>
        <FunctionButton
          value="C"
          toolTip="Clear"
          onClick={() => {
            setInput("");
            setResult("");
          }}
        />
        <FunctionButton
          value="<-"
          toolTip="Backspace"
          onClick={() => {
            setInput(input.substring(0, input.length - 1));
          }}
        />
      </CalcRow>
      <CalcRow>
        <FunctionButton
          value="AC"
          toolTip="Clear all"
          onClick={() => {
            setInput("");
            setResult("");
            setHistory([]);
            localStorage.setItem("history", JSON.stringify([]));
          }}
        />
        <FunctionButton value="MS" toolTip="Memory store" onClick={() => {}} />
      </CalcRow>
      <CalcRow>
        <OperatorButton value="(" text="(" />
        <FunctionButton value="MC" toolTip="Memory clear" onClick={() => {}} />
      </CalcRow>
      <CalcRow>
        <OperatorButton value=")" text=")" />
        <FunctionButton value="MR" toolTip="Memory recall" onClick={() => {}} />
      </CalcRow>
      <CalcRow>
        <FunctionButton value="+/-" toolTip="Change sign" onClick={() => {}} />
        <FunctionButton
          value="M+"
          toolTip="Add display to memory"
          onClick={() => {}}
        />
      </CalcRow>
    </div>
  );
}
export default RightPanel;
