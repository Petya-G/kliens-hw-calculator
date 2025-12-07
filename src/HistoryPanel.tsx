import { useContext } from "react";
import { Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { AppContext } from "./App";

function HistoryPanel() {
  const { history } = useContext(AppContext)!;
  return (
    <Col>
      <ListGroup>
        {history.map((item, i) => (
          <ListGroupItem key={i}>
            {item.input}={item.result}
          </ListGroupItem>
        ))}
      </ListGroup>
    </Col>
  );
}

export default HistoryPanel;
