import { Modal, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";

export function Messages(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  useEffect(() => {
    setShow(props.params.show);
  }, [props.params.show]);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{props.params.message}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
