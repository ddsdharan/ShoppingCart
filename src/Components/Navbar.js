import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SearchInput from './SearchInput';
import ShoppingCart from './ShoppingCart';
import SettingsIcon from './SettingsIcon';

const NavBar = ({ cartItems, onRemoveFromCart = [] }) => {
    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#Categories">Categories</Nav.Link>
                        <Nav.Link href="#Collections">Collections</Nav.Link>
                        <NavDropdown title="Deals&Offers" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#Daily Deals">Daily Deals</NavDropdown.Item>
                            <NavDropdown.Item href="#All Deals">All Deals</NavDropdown.Item>
                            <NavDropdown.Item href="#Offers">Offers</NavDropdown.Item>
                            <NavDropdown.Divider /><NavDropdown.Item href="#AllDeals&Offers">All Deals & Offers</NavDropdown.Item>
                        </NavDropdown>
                        <SearchInput />
                    </Nav>
                    <Nav>
                        <Nav.Link href="#Contactus">Contact-Us</Nav.Link>
                        <Nav.Link href="#Settings"><SettingsIcon /></Nav.Link>
                        <ShoppingCart cartItems={cartItems} onRemoveFromCart={onRemoveFromCart} />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;