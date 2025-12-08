import type { ReactNode } from "react";
import Row from "react-bootstrap/Row";
function CalcRow({ children }: { children?: ReactNode }) {
  return <Row className="g-0 flex-nowrap">{children}</Row>;
}

export default CalcRow;
