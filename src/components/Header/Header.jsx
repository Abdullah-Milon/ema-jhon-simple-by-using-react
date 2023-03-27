import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'
import logo from '../images/Logo.svg';

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <img src={logo} alt="" />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                   
                    <Nav>
                        <Nav.Link href="/shop">shop</Nav.Link>
                        <Nav.Link href="/order">order</Nav.Link>
                        <Nav.Link href="/inventory">inventory</Nav.Link>
                        <Nav.Link href="/login">login</Nav.Link>
                        
                    </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;


















/* import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'
import logo from  '../images/Logo.svg';

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <nav className='header'>
                <img src={logo} alt="" />
                <div className='nav2'>
                    <a href="/shop">shop</a>
                    <a href="/order">order</a>
                    <a href="/inventory">Inventory</a>
                    <a href="/login">login</a>
                </div>
            </nav>
        </Navbar>
    );
}

export default Header;
 */