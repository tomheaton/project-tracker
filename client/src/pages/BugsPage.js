import {useLocation} from "react-router-dom";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {useRef, useState} from "react";
import BugsForm from "../components/BugsForm";

const BugsPage = () => {

  const { state } = useLocation();
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [showForm, setShowForm] = useState(false);
  const [bugsList, setBugsList] = useState([
    {name: "alpha", completed: false}, {name: "beta", completed: false},
    {name: "gamma", completed: true}, {name: "delta", completed: true}
  ]);

  const handleDragStart = (e, index, name) => {
    dragItem.current = index;
    console.log(e.target.outerHTML.includes('completed="false"'));
    /*    e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/html", e.target.parentNode);
        e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);*/
  }

  const handleDragOver = (e, index, name) => {
    e.preventDefault();
    /*if (dragItem.current === dragOverItem.current) {
      return;
    }
    let listCopy = bugsList.filter((item, index) => index !== dragItem.current);
    listCopy.splice(index, 0, dragItem.current);*/

    const listCopy = [...bugsList];
    const draggingItemContent = listCopy[dragItem.current];
    listCopy.splice(dragItem.current, 1);
    listCopy.splice(dragOverItem.current, 0, draggingItemContent);

    dragItem.current = dragOverItem.current;

    setBugsList(listCopy);
  }

  const handleDragEnd = (e, index, name) => {
    dragItem.current = null;
    dragOverItem.current = null;
  }

  return (
    <div className={"container"}>
      <header>
        <h1>Bugs</h1>
        <h2>Project: {state.name}</h2>
      </header>
      <br/>
      <Container>
        <Row>
          {!showForm && <Button onClick={() => setShowForm(!showForm)}>Create</Button>}
          {showForm && <BugsForm setShowForm={setShowForm}/>}
        </Row>
        <br/>
        <Row>
          <h4>List: {JSON.stringify(bugsList)}</h4>
          <Col>
            <h3>In Progress</h3>
            <ul id={"inProgressList"}>
              {bugsList.filter((element) => element.completed === false).map((element, index) => {
                return (
                  <li key={element.name}>
                    <Card className={"bug-card"} draggable key={element.name} completed={"false"}
                          onDragStart={(e) => handleDragStart(e, index)}
                          onDragOver={(e) => handleDragOver(e, index)}
                          onDragEnd={(e) => handleDragEnd(e, index)}
                    >
                      <Card.Body>{element.name}</Card.Body>
                    </Card>
                  </li>
                );
              })}
            </ul>
          </Col>
          <Col>
            <h3>Completed</h3>
            <ul id={"completedList"}>
              {bugsList.filter((element) => element.completed === true).map((element, index) => {
                return (
                  <li key={element.name}>
                    <Card className={"bug-card"} draggable key={element.name} completed={"true"}
                          onDragStart={(e) => handleDragStart(e, index)}
                          onDragOver={(e) => handleDragOver(e, index)}
                          onDragEnd={(e) => handleDragEnd(e, index)}
                    >
                      <Card.Body>{element.name}</Card.Body>
                    </Card>
                  </li>
                );
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BugsPage;