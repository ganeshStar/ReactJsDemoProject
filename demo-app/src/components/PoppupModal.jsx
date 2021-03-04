import { Modal, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";

export const PoppupModal = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  useEffect(() => {
    setShow(props.params.show);
  }, [props]);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.params.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.params.data}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
