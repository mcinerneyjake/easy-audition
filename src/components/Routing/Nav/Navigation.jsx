import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown, Dropdown, NavItem } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import './Navigation.css';

function Navigation() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  return (
    <Router>
      <Navbar className='navbar-style' sticky='top'>
        <Container>
          <Navbar.Brand as={Link} to='/' className='navbar-title'>
            Easy Audition
          </Navbar.Brand>
          <Nav className='dropdown'>
            <NavDropdown as={NavItem} title='Menu' align='end' id='dropdown-menu-align-end' autoClose='true'>
              {!user.id && (
                <Nav.Link as={Link} to='/login'>
                  Login / Register
                </Nav.Link>
              )}

              {user.id && (
                <>
                  <Nav.Link as={Link} to='/user'>
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to='/upcoming-auditions'>
                    Upcoming Auditions
                  </Nav.Link>
                  <Nav.Link as={Link} to='/past-auditions'>
                    Past Auditions
                  </Nav.Link>
                  <Nav.Link as={Link} to='/form'>
                    Add Audition
                  </Nav.Link>
                  <Nav.Link as={Link} to='/analytics'>
                    Audition Analytics
                  </Nav.Link>
                  <Nav.Link as={Link} to='/classifieds'>
                    Classifieds
                  </Nav.Link>
                  <Dropdown.Divider />
                  <Nav.Link as={Link} to='/info'>
                    Info
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
