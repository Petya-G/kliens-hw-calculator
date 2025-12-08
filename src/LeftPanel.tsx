import { OperatorButton } from "./Buttons";
import CalcRow from "./CalcRow";

function LeftPanel() {
  return (
    <div className="p-2">
      <CalcRow>
        <OperatorButton value="" text="Hyp" toolTip="Hyperbolic mode"/>
        <OperatorButton value=" mod " text="mod" toolTip="Modulo"/>
      </CalcRow>
      <CalcRow>
        <OperatorButton value="sin(" text="sin" toolTip="Sine"/>
        <OperatorButton value="⁻¹" text="1/x" toolTip="Reciprocal"/>
      </CalcRow>
      <CalcRow>
        <OperatorButton value="cos(" text="cos" toolTip="Cosine"/>
        <OperatorButton value="!" text="x!" toolTip="Factorial"/>
      </CalcRow>
      <CalcRow>
        <OperatorButton value="tan(" text="tan" toolTip="Tangent"/>
        <OperatorButton value="²" text="x²" toolTip="Squre"/>
      </CalcRow>
      <CalcRow>
        <OperatorButton value="log(" text="log" toolTip="Logarithm"/>
        <OperatorButton value="sqrt(" text="√" toolTip="Squre root"/>
      </CalcRow>
      <CalcRow>
        <OperatorButton value="ln(" text="ln" toolTip="Natural logarithm"/>
        <OperatorButton value="^" text=" xʸ" toolTip="x to the power of y"/>
      </CalcRow>
      <CalcRow>
        <OperatorButton value="i" text="i" toolTip="Imaginary unit"/>
        <OperatorButton value="10^" text="x*10ʸ" toolTip="Exponent"/>
      </CalcRow>
    </div>
  );
}
export default LeftPanel;
