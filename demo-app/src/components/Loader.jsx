import React from "react";
import { Spinner, Modal } from "react-bootstrap";

const Loader = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      contentClassName="loader-modal-content"
    >
      <Spinner animation="border" variant="light" />
    </Modal>
  );
};
export default Loader;
