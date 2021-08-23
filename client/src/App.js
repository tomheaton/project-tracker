import './styles/App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import { Container, Navbar, Nav } from "react-bootstrap";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar expand={"lg"} bg={"dark"} variant={"dark"}>
          <Container>
            <Navbar.Brand href={"/"}>Project Tracker</Navbar.Brand>
            <Nav.Link href={"home"}>Home</Nav.Link>
            <Nav.Link href={"project"}>Project</Nav.Link>
          </Container>
        </Navbar>

      <Switch>
        <Route exact path={"/home"} component={Home}/>
        <Route exact path={"/project"} component={Project}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
