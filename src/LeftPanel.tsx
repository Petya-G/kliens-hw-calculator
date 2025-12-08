import { useContext } from "react";
import { FunctionButton, OperatorButton } from "./Buttons";
import CalcRow from "./CalcRow";
import { AppContext } from "./App";

function LeftPanel() {
  const { shift, hyperbolic, setHyperbolic } = useContext(AppContext)!;
  function trig(name: string) {
    if (!shift && !hyperbolic)
      return { text: name, value: `${name}(`, tip: `${name}` };

    if (shift && !hyperbolic)
      return { text: `a${name}`, value: `a${name}(`, tip: `Arc ${name}` };

    if (!shift && hyperbolic)
      return {
        text: `${name}h`,
        value: `${name}h(`,
        tip: `Hyperbolic ${name}`,
      };

    return {
      text: `a${name}h`,
      value: `a${name}h(`,
      tip: `Inverse hyperbolic ${name}`,
    };
  }

  const s = trig("sin");
  const c = trig("cos");
  const t = trig("tan");
  return (
    <div className="p-2">
      <CalcRow>
        <FunctionButton
          value="Hyp"
          toolTip="Hyperbolic mode"
          onClick={() => setHyperbolic((prev) => !prev)}
        />
        <OperatorButton value=" mod " text="mod" toolTip="Modulo" />
      </CalcRow>
      <CalcRow>
        <OperatorButton value={s.value} text={s.text} toolTip={s.tip} />
        <OperatorButton value="^(-1)" text="1/x" toolTip="Reciprocal" />
      </CalcRow>
      <CalcRow>
        <OperatorButton value={c.value} text={c.text} toolTip={c.tip} />
        <OperatorButton value="!" text="x!" toolTip="Factorial" />
      </CalcRow>
      <CalcRow>
        <OperatorButton value={t.value} text={t.text} toolTip={t.tip} />
        {!shift ? (
          <OperatorButton value="^2" text="x²" toolTip="Square" />
        ) : (
          <OperatorButton value="^3" text="x³" toolTip="Cube" />
        )}
      </CalcRow>
      <CalcRow>
        {!shift ? (
          <OperatorButton value="log(" text="log" toolTip="Logarithm" />
        ) : (
          <OperatorButton
            value="10^"
            text="10ˣ"
            toolTip="Ten to the power of x"
          />
        )}
        {!shift ? (
          <OperatorButton value="sqrt(" text="√" toolTip="Square root" />
        ) : (
          <OperatorButton value="cbrt(" text="3√" toolTip="Cube root" />
        )}
      </CalcRow>
      <CalcRow>
        {!shift ? (
          <OperatorButton value="log( , e)" text="ln" toolTip="Natural logarithm" />
        ) : (
          <OperatorButton value="e^" text="eˣ" toolTip="Exponential function" />
        )}
        {!shift ? (
          <OperatorButton value="^" text="xʸ" toolTip="x to the power of y" />
        ) : (
          <OperatorButton value="^(-" text="x¹/ʸ" toolTip="x to the power 1/y" />
        )}
      </CalcRow>
      <CalcRow>
        <OperatorButton value="i" text="i" toolTip="Imaginary unit" />
        <OperatorButton value="10^" text="x·10ʸ" toolTip="Exponent" />
      </CalcRow>
    </div>
  );
}
export default LeftPanel;
