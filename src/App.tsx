import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";

import { createContext, useContext } from "react";
import { evaluate } from "mathjs";

const AppContext = createContext<
  | {
      input: string;
      setInput: Dispatch<SetStateAction<string>>;
      result: string;
      setResult: Dispatch<SetStateAction<string>>;
    }
  | undefined
>(undefined);

function useCalculate() {
  const { input, setResult } = useContext(AppContext)!;
  return () => {
    try {
      setResult(evaluate(input));
    } catch (error) {
      setResult("Syntax error");
    }
  };
}

function CalcButton({ value }: { value: string }) {
  const { setInput } = useContext(AppContext)!;
  const calculate = useCalculate();
  return (
    <Col>
      <Button
        onClick={() => {
          setInput((input) => input + value);
          calculate();
        }}
      >
        {value}
      </Button>
    </Col>
  );
}

function EqualsButton() {
  const calculate = useCalculate();
  return (
    <Col>
      <Button onClick={calculate}>=</Button>
    </Col>
  );
}

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  return (
    <AppContext value={{ input, setInput, result, setResult }}>
      <Container>
        <Container>
          <Row>
            <Form.Control
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </Row>
          <Row>
            <h1>{result}</h1>
          </Row>
        </Container>
        <Row>
          <Col>
            <Row>
              <CalcButton value="Hyp" />
              <CalcButton value="mod" />
            </Row>
            <Row>
              <CalcButton value="sin" />
              <CalcButton value="1/x" />
            </Row>
            <Row>
              <CalcButton value="cos" />
              <CalcButton value="x!" />
            </Row>
            <Row>
              <CalcButton value="tan" />
              <CalcButton value="x^2" />
            </Row>
            <Row>
              <CalcButton value="log" />
              <CalcButton value="sqrt(x)" />
            </Row>
            <Row>
              <CalcButton value="ln" />
              <CalcButton value="x^y" />
            </Row>
            <Row>
              <CalcButton value="i" />
              <CalcButton value="x*10^y" />
            </Row>
          </Col>
          <Col>
            <Row>
              <CalcButton value="%" />
              <CalcButton value="/" />
              <CalcButton value="*" />
              <CalcButton value="-" />
            </Row>
            <Row>
              <CalcButton value="7" />
              <CalcButton value="8" />
              <CalcButton value="9" />
              <CalcButton value="+" />
            </Row>
            <Row>
              <CalcButton value="4" />
              <CalcButton value="5" />
              <CalcButton value="6" />
              <CalcButton value="3" />
            </Row>
            <Row>
              <CalcButton value="1" />
              <CalcButton value="2" />
              <CalcButton value="3" />
              <EqualsButton />
            </Row>
            <Row>
              <CalcButton value="0" />
              <CalcButton value="0" />
              <CalcButton value="." />
              <EqualsButton />
            </Row>
          </Col>
          <Col>
            <Row>
              <CalcButton value="C" />
              <CalcButton value="<-" />
            </Row>
            <Row>
              <CalcButton value="AC" />
              <CalcButton value="MS" />
            </Row>
            <Row>
              <CalcButton value="(" />
              <CalcButton value="M" />
            </Row>
            <Row>
              <CalcButton value=")" />
              <CalcButton value="MR" />
            </Row>
            <Row>
              <CalcButton value="+/-" />
              <CalcButton value="M+" />
            </Row>
          </Col>
        </Row>
      </Container>
    </AppContext>
  );
}

export default App;
