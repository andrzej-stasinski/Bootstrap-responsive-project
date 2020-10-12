import React from 'react';
// import '../App.css';
import {Navbar, Nav, NavDropdown, NavItem} from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom';
import homeFill from './svg/house-fill.svg';
import homeDoor from './svg/house-door.svg';
import './Navbar.css';

function NavbarMenu() {

  // Zmienia naprzemiennie kolor home po każdym click
  // wykorzystano del/add class i w zależności od tego zmienie pliku - svg
  const handleColor = (e) => {

    console.log(e.target);
    e.target.classList.toggle("home");
    console.log(e.target.src);

    if(e.target.classList.contains("home")) {
      e.target.src = homeFill;
    } else {
      e.target.src = homeDoor;
    }
  
  }
  return (
    <>

    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">

      <Navbar.Brand href="/" to='/'>
        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-house-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
          <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
        </svg>        
      </Navbar.Brand>

      <Navbar.Brand as={NavLink} to="/">
        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-house-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
          <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
        </svg>         
      </Navbar.Brand>

      <Navbar.Brand as={NavLink} to="/">
          <img src={homeFill} alt="" width="32" height="32" title="Home" onClick={handleColor} className='home' />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">

        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/">
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-house-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
              <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
            </svg> 
          </Nav.Link>
        </Nav>
        
        <Nav>
            <Nav.Link as={NavLink} to="/pricing"> Pricing  </Nav.Link>
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
