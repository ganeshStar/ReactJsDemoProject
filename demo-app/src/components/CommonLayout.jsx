import React, { img } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Navbar,
  Nav,
  Form,
  Container,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import logo from "../images/logo.jpg";

export const CommonLayout = ({ children }) => {
  const history = useHistory();
  const logoutHandeler = () => {
    localStorage.removeItem("islogin");
    let path = "/";
    history.push(path);
  };
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img width="50" height="50" src={logo} />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/Home">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/Features">Features</Link>
          </Nav.Link>
        </Nav>
        <Form inline>
          <Button variant="outline-info" onClick={logoutHandeler}>
            Logout
          </Button>
        </Form>
      </Navbar>

      <Container fluid>
        <Row>
          <Col sm={12}>{children}</Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
