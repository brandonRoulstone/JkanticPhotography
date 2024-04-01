import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import VideoComponent from './VideoComponent';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div id="offcan" onClick={handleShow} className="me-2">
        Our work
      </div>
      <Offcanvas show={show} onHide={handleClose} {...props} id="heightVh">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="fw-bold fs-3">Our work</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body id="centerBody">
          <VideoComponent />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default function Example() {
  return (
    <>
      {['bottom'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}