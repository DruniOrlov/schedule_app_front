import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {UserInfoDropdown} from "./UserInfoDropdown";

export function NavigationBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="ml-auto" style={{justifyContent: "right"}}>
                    <Nav className="d-flex">
                        <Nav.Link href="/">Расписание</Nav.Link>
                        <Nav.Link href="/news">Новости</Nav.Link>
                        <Nav.Link href="/diary">Журнал</Nav.Link>
                        <Container style={{marginRight: "0px"}}>
                            <UserInfoDropdown />
                        </Container>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}