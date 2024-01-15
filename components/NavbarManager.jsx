import { Nav, Navbar, Container } from "react-bootstrap";

export default function NavbarComponentManager() {
    return (
        <Navbar
            expand="lg"
            bg="dark"
            data-bs-theme="dark"
            fixed="top"
            className="flex-column navbar-custom full-height d-flex justify-content-center"
        >
            <Container fluid>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="w-100">
                    <Nav className="me-auto flex-column text-center">
                        <Navbar.Brand className="mx-auto">Manager</Navbar.Brand>
                        <Nav.Link href="/manager">Record</Nav.Link>
                        <Nav.Link href="/manager/table">Table</Nav.Link>
                        <Nav.Link href="/manager/menu">Menu</Nav.Link>
                        <Nav.Link href="/manager/order">Order</Nav.Link>
                        <Nav.Link href="/manager/payment">Payment</Nav.Link>
                        <Nav.Link href="/manager/logout">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
