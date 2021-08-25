import {useEffect, useState} from "react";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import UsersPage from "./pages/UsersPage";
import SignupPage from "./pages/SignupPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import ProjectPage from "./pages/ProjectPage";
import ProtectedRoute from "./components/ProtectedRoute";
import UserPage from "./pages/UserPage";
import BugsPage from "./pages/BugsPage";

const App = () => {

  const [ user, setUser ] = useState(null);

  const handleLogout = () => {
    setUser(null);
    console.log("logging out...");
  }

  useEffect(() => {
    const saved = window.localStorage.getItem("user");
    setUser(JSON.parse(saved))
  },[]);

  useEffect(() => {
    window.localStorage.setItem("user", JSON.stringify(user));
  },[user]);

  return (
    <BrowserRouter>
      <div>

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

        {/*<Sidebar/>*/}

        <Switch>
          <Route exact path={"/home"} component={HomePage}/>
          <Route exact path={"/projects"} component={() => <ProjectsPage user={user}/>}/>
          <Route exact path={"/projects/:id"} component={ProjectPage}/>
          <Route exact path={"/projects/:id/bugs"} component={BugsPage}/>
          <Route exact path={"/users"} component={UsersPage}/>
          <Route exact path={"/users/:id"} component={UserPage}/>
          <ProtectedRoute exact path={"/signup"} redirect={"/profile"} condition={!user} component={() => <SignupPage setUser={setUser}/>}/>
          <ProtectedRoute exact path={"/login"} redirect={"/profile"} condition={!user} component={() => <LoginPage setUser={setUser}/>}/>
          <ProtectedRoute exact path={"/profile"} redirect={"/login"} condition={user} component={() => <ProfilePage setUser={setUser} user={user}/>}/>
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
