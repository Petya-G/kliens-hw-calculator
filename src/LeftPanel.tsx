import { useContext } from "react";
import { FunctionButton, OperatorButton } from "./Buttons";
import CalcRow from "./CalcRow";
import { AppContext } from "./App";

function LeftPanel() {
  const { shift, hyperbolic, setHyperbolic } = useContext(AppContext)!;
  function trig(name: string) {
    if (!shift && !hyperbolic)
      return { text: name, value: `${name}(`, tip: `${name} function` };

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
        <OperatorButton value="⁻¹" text="1/x" toolTip="Reciprocal" />
      </CalcRow>
      <CalcRow>
        <OperatorButton value={c.value} text={c.text} toolTip={c.tip} />
        <OperatorButton value="!" text="x!" toolTip="Factorial" />
      </CalcRow>
      <CalcRow>
        <OperatorButton value={t.value} text={t.text} toolTip={t.tip} />
        <OperatorButton value="²" text="x²" toolTip="Square" />
      </CalcRow>
      <CalcRow>
        <OperatorButton value="log(" text="log" toolTip="Logarithm" />
        <OperatorButton value="sqrt(" text="√" toolTip="Square root" />
      </CalcRow>
      <CalcRow>
        <OperatorButton value="ln(" text="ln" toolTip="Natural logarithm" />
        <OperatorButton value="^" text=" xʸ" toolTip="Power" />
      </CalcRow>
      <CalcRow>
        <OperatorButton value="i" text="i" toolTip="Imaginary unit" />
        <OperatorButton value="10^" text="x·10ʸ" toolTip="Exponent" />
      </CalcRow>
    </div>
  );
}
export default LeftPanel;
