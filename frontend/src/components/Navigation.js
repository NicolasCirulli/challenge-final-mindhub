import {Button, Offcanvas} from "react-bootstrap"
import { useState } from "react";

const options = 
  {
    name: 'Enable body scrolling',
    scroll: true,
    backdrop: false,
  }
;

export default function OffCanvasExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Button variant="primary" onClick={toggleShow} className="me-2">
        {options.name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} scroll={options.scroll} backdrop={options.backdrop} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}



