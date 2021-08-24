import { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import UsersPage from "./pages/UsersPage";
import SignupPage from "./pages/SignupPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import ProjectPage from "./pages/ProjectPage";
import ProtectedRoute from "./components/ProtectedRoute";
import UserPage from "./pages/UserPage";

const App = () => {

  const [ user, setUser ] = useState({});

  const handleLogout = () => {
    setUser(false)
    console.log("logging out...");
  }

  return (
    <BrowserRouter>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/home">Project Tracker</Navbar.Brand>
          <Nav className="me-auto">
            {/*<Link to={"/home"} className={"nav-link"}>HomePage</Link>*/}
            <Link to={"/projects"} className={"nav-link"}>Projects</Link>
            <Link to={"/users"} className={"nav-link"}>Users</Link>
          </Nav>
          <Nav className="justify-content-end">
            {user && user.username ? (
              <>
                <Navbar.Text>
                  Signed in as: <a href={"/profile"}>{user.username}</a>
                </Navbar.Text>
                <Link onClick={handleLogout} to={"/home"} className={"nav-link"}>Logout</Link>
              </>
            ) : (
              <>
                <Link to={"/login"} className={"nav-link"}>Login</Link>
                <Link to={"/signup"} className={"nav-link"}>Signup</Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
      <div>

      <Switch>
        <Route exact path={"/home"} component={HomePage}/>
        <Route exact path={"/projects"} component={ProjectsPage}/>
        <Route exact path={"/projects/:id"} component={ProjectPage}/>
        <Route exact path={"/users"} component={UsersPage}/>
        <Route exact path={"/users/:id"} component={UserPage}/>
        <Route exact path={"/login"}>
          <LoginPage setUser={setUser}/>
        </Route>
        <Route exact path={"/signup"} component={SignupPage}/>
        <ProtectedRoute exact path={"/profile"} user={user} component={ProfilePage}/>
      </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
