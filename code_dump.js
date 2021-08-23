{ !user ? (
  <>
    <LinkContainer to="/login">
      <Nav.Link>Login</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/signup">
      <Nav.Link>Signup</Nav.Link>
    </LinkContainer>
  </>
) : (
  <>
    <Navbar.Text>
      Signed in as: Tom Heaton
    </Navbar.Text>
  </>
)}