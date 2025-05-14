import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link } from 'react-router-dom';


export default function AppNavbar() {
    return(
        <Navbar expand="lg" className="bg-body-tertiary nav-border sticky-top shadow">
        <Container fluid className='px-3 py-2'>
            <Navbar.Brand className='fw-bold text-primary'>E-Commerce</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/products">Products</Nav.Link>
                <Nav.Link as={Link} to="/sign-up">Sign Up</Nav.Link>
                <Nav.Link as={Link} to="/sign-in">Sign In</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}