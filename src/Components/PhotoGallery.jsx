import { useState } from 'react';
import ImgGallery from './ImgGallery';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Offcan({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button id="offcan" onClick={handleShow} className="me-2 mx-2">
       View our photo gallery
      </button>
      <Offcanvas show={show} onHide={handleClose} {...props} id="heightVh">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="fw-bold fs-3">Our photography gallery</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body id="centerBody">
          <ImgGallery />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default function PhotographyGallery() {
  return (
    <>
      {['bottom'].map((placement, idx) => (
        <Offcan key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}