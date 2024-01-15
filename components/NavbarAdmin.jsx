import { Nav, Navbar, Container } from "react-bootstrap";

export default function NavbarComponentAdmin() {
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
                        <Navbar.Brand className="mx-auto">Admin</Navbar.Brand>
                        <Nav.Link href="/admin">StaffX</Nav.Link>
                        <Nav.Link href="/admin/table">Table</Nav.Link>
                        <Nav.Link href="/admin/menu">Menu</Nav.Link>
                        <Nav.Link href="/admin/ingredient">Ingredient</Nav.Link>
                        <Nav.Link href="/admin/order">Order</Nav.Link>
                        <Nav.Link href="/admin/payment">Payment</Nav.Link>
                        <Nav.Link href="/admin/record">Record</Nav.Link>
                        <Nav.Link href="/admin/reset">Reset</Nav.Link>
                        <Nav.Link href="/admin/logout">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
