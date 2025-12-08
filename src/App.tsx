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
      history: { value: string }[];
      setHistory: Dispatch<SetStateAction<{ value: string }[]>>;
      shift: boolean;
      setShift: Dispatch<SetStateAction<boolean>>;
      hyperbolic: boolean;
      setHyperbolic: Dispatch<SetStateAction<boolean>>;
    }
  | undefined
>(undefined);

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState<{ value: string }[]>(() => {
    const saved = localStorage.getItem("history");
    return saved ? JSON.parse(saved) : [];
  });
  const [shift, setShift] = useState(false);
  const [hyperbolic, setHyperbolic] = useState(false);

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
        if (
          input !== "" ||
          result !== "" ||
          input === result 
        ) {
          setHistory((prev) => [...prev, { value: input + "=" + result }]);

          setInput(result);
          setResult("");
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [result]);

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  return (
    <AppContext.Provider
      value={{
        input,
        setInput,
        result,
        setResult,
        history,
        setHistory,
        shift,
        setShift,
        hyperbolic,
        setHyperbolic,
      }}
    >
      <Row className="border">
        <Col xs={8} className="border rounder">
          <Row className="mb-3 p-3 border rounded bg-light">
            <Col>
              <Row className="mb-2">
                <Col>
                  <Form.Control
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col className="text-end position-relative">
                  <span className="invisible d-block display-1">888888</span>

                  <span className="position-absolute top-0 end-0 display-1">
                    {result}
                  </span>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xs={3}>
              <LeftPanel />
            </Col>
            <Col xs={4}>
              <MiddlePanel />
            </Col>
            <Col xs={3}>
              <RightPanel />
            </Col>
          </Row>
        </Col>
        <Col xs={4}>
          <HistoryPanel />
        </Col>
      </Row>
      <Row>
        <h2>{shift ? "SHIFT" : "NORM"}</h2>
      </Row>
    </AppContext.Provider>
  );
}

export { App, AppContext };
