import React, { useState } from "react";
import { Row, Col, Form, Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Company() {
  const history = useHistory();
  const [validated, setValidated] = useState(true);
  localStorage.removeItem("islogin");
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(false);
      event.preventDefault();
      event.stopPropagation();
    } else {
      setValidated(true);
      localStorage.setItem("islogin", true);
      let path = "Home";
      history.push(path);
    }
  };
  return (
    <React.Fragment>
      <br></br>
      <Row className="justify-content-md-center">
        <Col sm={5}>
          <Card>
            <Card.Header>
              <b> Login</b>
            </Card.Header>
            <Card.Body>
              <Card.Title>Login by providing inputs values </Card.Title>
              <Form noValidate validated={!validated} onSubmit={handleSubmit}>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Enter email"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    required
                    type="password"
                    placeholder="Password"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide password.
                  </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
}
export default Company;
