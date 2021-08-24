import { useState } from "react";
import './styles/App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Users from "./pages/Users";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Project from "./pages/Project";

const App = () => {

  const [ user, setUser ] = useState(true);

  const handleLogout = () => {
    setUser(false)
    console.log("logging out...");
  }

  return (
    <BrowserRouter>
      <div>

        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/home">Project Tracker</Navbar.Brand>
            <Nav className="me-auto">
              {/*<Link to={"/home"} className={"nav-link"}>Home</Link>*/}
              <Link to={"/projects"} className={"nav-link"}>Projects</Link>
              <Link to={"/users"} className={"nav-link"}>Users</Link>
            </Nav>
            <Nav className="justify-content-end">
              {!user ? (
                <>
                  <Link to={"/login"} className={"nav-link"}>Login</Link>
                  <Link to={"/signup"} className={"nav-link"}>Signup</Link>
                </>
              ) : (
                <>
                  <Navbar.Text>
                    Signed in as: <a href={"/profile"}>Tom Heaton</a>
                  </Navbar.Text>
                  <Link onClick={handleLogout} to={"/home"} className={"nav-link"}>Logout</Link>
                </>
              )}
            </Nav>
          </Container>
        </Navbar>

      <Switch>
        <Route exact path={"/home"} component={Home}/>
        <Route exact path={"/projects"} component={Projects}/>
        <Route exact path={"/projects/:id"} component={Project}/>
        <Route exact path={"/users"} component={Users}/>
        <Route exact path={"/profile"} component={Profile}/>
        {/*<Route exact path={"/login"} component={Login}/>*/}
        <Route exact path={"/login"}>
          <Login setUser={setUser}/>
        </Route>
        <Route exact path={"/signup"} component={SignUp}/>
      </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
