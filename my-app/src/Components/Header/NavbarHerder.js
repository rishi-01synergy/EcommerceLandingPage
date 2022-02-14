import React, { Component } from 'react';
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import {AiOutlineSearch}  from "@react-icons/all-files/ai/AiOutlineSearch";

class NavbarHerder extends Component {
   
    render() {
        return (
            <>
            <div id='MenuBar'>
            <Container >
             <Navbar bg="light" expand="lg">
  
    <Navbar.Brand href="#">
        <h1 className='logo'>Hekto</h1>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button className='customSrch-btn' ><AiOutlineSearch/></Button>
      </Form>
    </Navbar.Collapse>
</Navbar>
</Container>
</div>
            </>
        );
    }
}

export default NavbarHerder;