import { Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
export function Address({ props }) {
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [suite, setSuite] = useState("");
  const [zipcode, setZipcode] = useState("");

  useEffect(() => {
    setCity(props.city);
    setStreet(props.street);
    setSuite(props.suite);
    setZipcode(props.zipcode);
  }, [props]);

  return (
    <>
      <Row>
        <Col>
          <b>City : </b> <label>{city}</label>
        </Col>
      </Row>
      <Row>
        <Col>
          <b>Street : </b> <label>{street}</label>
        </Col>
      </Row>
      <Row>
        <Col>
          <b>Suite : </b> <label>{suite}</label>
        </Col>
      </Row>
      <Row>
        <Col>
          <b>Zip Code : </b> <label>{zipcode}</label>
        </Col>
      </Row>
    </>
  );
}
