import React from 'react';
import '../App.css';
import {Navbar, Nav, NavDropdown, NavItem} from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom';

function NavbarMenu() {
  return (
    <>

    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">

        <Nav className="mr-auto">
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="pricing">Action</NavDropdown.Item>
            <NavDropdown.Item href="pricing">Another action</NavDropdown.Item>
            <NavDropdown.Item href="pricing">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="pricing">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        
        <Nav>

            <Nav.Link as={NavLink} to="pricing"> Pricing  </Nav.Link>
            <Nav.Link as={NavLink} to="features"> Features </Nav.Link>
            <Nav.Link as={NavLink} to="MoreDeets"> More deets </Nav.Link>
            <Nav.Link as={NavLink} to="Dankmenu"> Dank memes </Nav.Link>
 
            {/* <Link to='/pricing'>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Link>          
            <Link to='/features'>
                <Nav.Link href="#features">Features</Nav.Link>
            </Link>
            <Link to='/pricing'>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Link>          
            <Link to='/MoreDeets'>
                <Nav.Link href="#deets">More deets</Nav.Link>
            </Link> */}
            {/* <Link to='/Dankmenu'>
                <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                </Nav.Link>            
            </Link> */}
        </Nav>

      </Navbar.Collapse>
    </Navbar>

    </>
  );
}

export default NavbarMenu;
