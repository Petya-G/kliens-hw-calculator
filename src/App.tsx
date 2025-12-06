import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { createContext } from "react";
import LeftPanel from "./LeftPanel";
import MiddlePanel from "./MiddlePanel";
import RightPanel from "./RightPanel";
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

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    if (input === "") {
      setResult("");
      return;
    }

    try {
      setResult(String(evaluate(input)));
    } catch (error) {
      setResult(String(error));
    }
  }, [input]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const active = document.activeElement;
      const isTypingInInput =
        active &&
        (active instanceof HTMLInputElement ||
          active instanceof HTMLTextAreaElement);
      if (isTypingInInput) return;

      if (e.key.length == 1) setInput((prev) => prev + e.key);
      else if (e.key == "Backspace")
        setInput((prev) => prev.substring(0, prev.length - 1));
      else if (e.key == "Enter") {
        setInput(result);
        setResult("");
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [result]);

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
