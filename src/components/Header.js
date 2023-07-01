import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/" className="navbar-brand">홈</Link>
          <Nav className="me-auto">
            <Link to="/joinFrom"    className="nav-link">회원가입</Link>
            <Link to="/loginFrom"   className="nav-link">로그인</Link>
            <Link to="/saveForm"    className="nav-link">글쓰기</Link>
          </Nav>
          <Form>
            <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
            <Button variant="outline-info">Search</Button>
          </Form>
        </Container>
      </Navbar>   
        </>
    );
};

export default Header;