import React from "react";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import Plyr from "plyr-react";

const ContentPlayModal = ({ title, link }) => {
  const [show, setShow] = React.useState(false);

  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} variant="danger" className="px-4">
        Play
      </Button>
      <Modal show={show} onHide={() => setShow(false)} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Plyr
            source={{
              type: "video",
              sources: [
                {
                  src: link,
                  type: "video/mp4",
                },
              ],
            }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ContentPlayModal;
