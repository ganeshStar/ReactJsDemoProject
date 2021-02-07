import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Container,
  Button,
  Row,
  Col,
} from "react-bootstrap";

export const CommonLayout = ({ children }) => (
  <React.Fragment>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>

    <Container fluid>
      <Row>
        <Col sm={12}>{children}</Col>
      </Row>
    </Container>
  </React.Fragment>
);
