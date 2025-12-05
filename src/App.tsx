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

function CalcButton({ value }: { value: string }) {
  const { setInput } = useContext(AppContext)!;
  return (
    <Col>
      <Button onClick={() => setInput((input) => input + value)}>
        {value}
      </Button>
    </Col>
  );
}

function EqualsButton() {
  const { input, setResult } = useContext(AppContext)!;
  return (
    <Col>
      <Button onClick={() => setResult(() => evaluate(input))}>
        =
      </Button>
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
          <Row>{result}</Row>
          <Row>
            <Form.Control
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </Row>
        </Container>
        <Container>
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
            <EqualsButton/>
          </Row>
          <Row>
            <CalcButton value="0" />
            <CalcButton value="0" />
            <CalcButton value="." />
            <EqualsButton/>
          </Row>
        </Container>
      </Container>
    </AppContext>
  );
}

export default App;
