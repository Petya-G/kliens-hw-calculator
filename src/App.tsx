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
import HistoryPanel from "./HistoryPanel";
import { Col } from "react-bootstrap";

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
      const res = evaluate(input);

      if (typeof res === "function") {
        setResult("Syntax error");
        return;
      }

      setResult(String(res));
    } catch (error) {
      setResult("Syntax error");
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
      <Row>
        <Col>
          <Row>
            <Col>
              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <h1>{result}</h1>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <LeftPanel />
            <MiddlePanel />
            <RightPanel />
          </Row>
        </Col>
        <HistoryPanel />
      </Row>
    </AppContext.Provider>
  );
}

export { App, AppContext };
