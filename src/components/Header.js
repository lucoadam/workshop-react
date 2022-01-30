import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
    return   <Navbar bg="dark" variant="dark">
    <Container>
    <Link className='navbar-brand'  to="/">React Workshop</Link>
    <Nav className="me-auto">
    <Link className='nav-link'  to="/users">Users</Link>
      <Link className='nav-link'  to="/example">Example</Link>
    </Nav>
    </Container>
  </Navbar>;

}
//   return <div className='header-top'>

//   </div>;
// }
