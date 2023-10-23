import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Hader() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-secondary  shadow-lg ">
      <Container>
       <Link  style={{textDecoration:'none',colo:'black', fontWeight:'bolder'}} to={'/'} > <Navbar.Brand href="">CRUD-APP</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            
            <Link style={{textDecoration:'none',colo:'black', fontWeight:'bolder'}} to={'/Home'}><Nav.Link href="#link"> Manages-Employee</Nav.Link></Link>
            <Link style={{textDecoration:'none',colo:'black', fontWeight:'bolder'}} to={'/create'}><Nav.Link href="#link"> Create-Employee</Nav.Link></Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Hader