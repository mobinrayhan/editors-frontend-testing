export const OffcanvasBasicCode = `
const BSOffCanvas = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <Fragment>
            <Button variant="primary" onClick={handleShow}>Launch</Button>  
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
      </Fragment>
    );
}
export default BSOffCanvas;
`.trim();

export const OffCanvasResponsiveCode = `
import { useState } from 'react';
import {
	Button,
	Offcanvas,
	Alert
} from 'react-bootstrap';

function OffCanvasResponsive() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" className="d-lg-none" onClick={handleShow}>
        Launch
      </Button>

      <Alert variant="info" className="d-none d-lg-block">
        Resize your browser to show the responsive offcanvas toggle.
      </Alert>

      <Offcanvas show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p className="mb-0">
            This is content within an <code>.offcanvas-lg</code>.
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvasResponsive;
`
export const OffCanvasPlacementCode = `
const BSOffCanvas = () => {
     
    function OffCanvasPlacement({ name, ...props }) {
        const [show, setShow] = useState(false);
    
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
    
        return (
          <>
            <Button variant="primary" onClick={handleShow} className="me-2 mb-2 mb-lg-0">
              {name}
            </Button>
            <Offcanvas show={show} onHide={handleClose} {...props}>
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

    return (
        <Fragment>
            {['start', 'end', 'top', 'bottom'].map((placement, idx) => (
                <OffCanvasPlacement key={idx} placement={placement} name={placement} />
            ))}
        </Fragment>
    );
}
export default BSOffCanvas;
`.trim();

export const OffCanvasBackdropCode = `
const BSOffCanvas = () => {
            
    const options = [
        {
          name: 'Enable backdrop (default)',
          scroll: false,
          backdrop: true,
        },
        {
          name: 'Disable backdrop',
          scroll: false,
          backdrop: false,
        },
        {
          name: 'Enable body scrolling',
          scroll: true,
          backdrop: false,
        },
        {
          name: 'Enable both scrolling & backdrop',
          scroll: true,
          backdrop: true,
        },
    ];
    
    function OffCanvasBackdrop({ name, ...props }) {
        const [show, setShow] = useState(false);
    
        const handleClose = () => setShow(false);
        const toggleShow = () => setShow((s) => !s);
    
        return (
          <>
            <Button variant="primary" onClick={toggleShow} className="me-2 mb-2 mb-lg-0">
              {name}
            </Button>
            <Offcanvas show={show} onHide={handleClose} {...props}>
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

    return (
        <Fragment>
            {options.map((props, idx) => (
                <OffCanvasBackdrop key={idx} {...props} />
            ))}
        </Fragment>
    );
}
export default BSOffCanvas;
`.trim();

export const OffCanvasStaticBackdropCode = `
import { useState } from 'react';
import {Button, Offcanvas} from 'react-bootstrap';

function OffCanvasStaticBackdrop() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Toggle static offcanvas
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          I will not close if you click outside of me.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvasStaticBackdrop;
`
export const OffcanvasCode = [
  OffcanvasBasicCode,
  OffCanvasPlacementCode,
  OffCanvasBackdropCode
];

export default OffcanvasCode;
