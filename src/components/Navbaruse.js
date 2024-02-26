import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";


function Navbaruse() {
 
  return (
    <>
      <div className="float-right">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <a> Welcome to ComapnyList </a>:<a>Welcome</a>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>

                <a></a>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* {/* {Showalert===true ?
  <Alertcomponent    mess={messagetodisplay} variant={vari}/>:
<div></div> */}
      </div>
    </>
  );
}

export default Navbaruse;
