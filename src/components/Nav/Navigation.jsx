import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown, Dropdown, NavLink, NavItem } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

function Navigation() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  return (
    <Router>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            Easy Audition
          </Navbar.Brand>
          <Nav className='me-auto dropdown'>
            <NavDropdown as={NavItem} title='Menu' menuVariant='dark'>
              {!user.id && (
                // If there's no user, show login/registration links
                <Nav.Link as={Link} to='/login'>
                  Login / Register
                </Nav.Link>
              )}

              {user.id && (
                // If there's a user, show links to /user and /info
                <>
                  <Nav.Link as={Link} to='/user'>
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to='/info'>
                    Info Page
                  </Nav.Link>

                  <Nav.Link onClick={() => dispatch({ type: 'LOGOUT' })}>Log Out</Nav.Link>
                </>
              )}
              <Dropdown.Divider />
              <Nav.Link as={Link} to='/about'>
                About
              </Nav.Link>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </Router>
  );
}

export default Navigation;
