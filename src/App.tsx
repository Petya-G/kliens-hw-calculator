import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { createContext } from "react";
import LeftPanel from "./LeftPanel";
import MiddlePanel from "./MiddlePanel";
import RightPanel from "./RightPanel";

const AppContext = createContext<
  | {
      input: string;
      setInput: Dispatch<SetStateAction<string>>;
      result: string;
      setResult: Dispatch<SetStateAction<string>>;
    }
  | undefined
>(undefined);

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  return (
    <AppContext.Provider value={{ input, setInput, result, setResult }}>
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
          <LeftPanel />
          <MiddlePanel />
          <RightPanel />
        </Row>
      </Container>
    </AppContext.Provider>
  );
}

export { App, AppContext };
