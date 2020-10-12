import React from 'react';
// import '../App.css';
import {Navbar, Nav, NavDropdown, NavItem} from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom';
import './styles/Navbar.css';

function NavbarMenu() {

  return (
    <>

    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">

      <Navbar.Brand></Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

        <Nav className="mr-auto">
          <Nav.Link as={NavLink} exact to="/" className='home'>
            <i className="fas fa-home-lg-alt" style={{fontSize: '22px'}}></i>
          </Nav.Link>
        </Nav>

         <Nav>
            <Nav.Link as={NavLink} to="/burgers"> Burgers </Nav.Link>
            <Nav.Link as={NavLink} to="/pricing"> Pricing </Nav.Link>
            <Nav.Link as={NavLink} to="/features"> Features </Nav.Link>
            <Nav.Link as={NavLink} to="/MoreDeets"> More deets </Nav.Link>
            <Nav.Link as={NavLink} to="/Dankmenu"> Dank memes </Nav.Link>
         </Nav>

      </Navbar.Collapse>
    </Navbar>

    </>
  );
}

export default NavbarMenu;
