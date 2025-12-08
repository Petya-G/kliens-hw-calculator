import { useContext } from "react";
import { Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { AppContext } from "./App";

function HistoryPanel() {
  const { history } = useContext(AppContext)!;
  return (
    <div className="border p-2 rounded h-100 overflow-auto">
      <ListGroup>
        {history.map((item, i) => (
          <ListGroupItem key={i}>
            {item.input}={item.result}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}

export default HistoryPanel;
