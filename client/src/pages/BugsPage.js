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

  const handleDragStart = (e, index) => {
    dragItem.current = index;
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/html", e.target.parentNode);
        e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
  }

  const handleDragOver = (e, index) => {
    e.preventDefault();
    dragOverItem.current = index;
    console.log("dragOverItem index: ", index)

    if (bugsList[dragOverItem.current].completed !== undefined) {
      const listCopy = [...bugsList];
      const dragItemContent = listCopy[dragItem.current];

      dragItemContent.completed = bugsList[dragOverItem.current].completed

      listCopy.splice(dragItem.current, 1);
      listCopy.splice(dragOverItem.current, 0, dragItemContent);

      dragItem.current = dragOverItem.current;
      setBugsList(listCopy);
    }
  }

  const handleDragEnd = (e, index) => {
    dragItem.current = null;
    dragOverItem.current = null;
  }

  const handleComplete = (e, index) => {
    //e.preventDefault();
    const listCopy = bugsList;
    listCopy[index].completed = true;
    setBugsList(listCopy)
  }

  const handleEdit = (e, index) => {
    console.log("bug edit");
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
            <ul id={"inProgressBugsList"}>
              {/*{bugsList && bugsList.filter((element) => element.completed === false).map((element, index) => {*/}
              {bugsList && bugsList.map((element, index) => {
                if (element.completed === false) return (
                  <li key={element.name}>
                    <Card className={"bug-card"} draggable key={element.name}
                          onDragStart={(e) => handleDragStart(e, index)}
                          onDragOver={(e) => handleDragOver(e, index)}
                          onDragEnd={(e) => handleDragEnd(e, index)}
                    >
                      <Card.Body>{element.name}</Card.Body>
                      <Button variant={"secondary"} onClick={(e) => handleComplete(e, index)}>Complete</Button>
                      <Button variant={"secondary"} onClick={(e) => handleEdit(e, index)}>Edit</Button>
                    </Card>
                  </li>
                );
              })}
            </ul>
          </Col>
          <Col>
            <h3>Completed</h3>
            <ul id={"completedBugsList"}>
              {/*{bugsList && bugsList.filter((element) => element.completed === true).map((element, index) => {*/}
              {bugsList && bugsList.map((element, index) => {
                if (element.completed === true) return (
                  <li key={element.name}>
                    <Card className={"bug-card"} draggable key={element.name}
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