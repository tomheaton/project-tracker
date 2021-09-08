import {useState} from "react";
import {Button, Offcanvas} from "react-bootstrap";

const Sidebar = ({name, ...props}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Button variant="primary" onClick={toggleShow} className="me-2">Sidebar</Button>
      <Offcanvas show={show} onHide={handleClose} scroll={true} backdrop={false}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Sidebar</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Lorem ipsum odor amet, consectetuer adipiscing elit.
          Eu pulvinar tempor consectetur.
          Magna fringilla faucibus porttitor nisi.
          Eleifend hendrerit sollicitudin aptent.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;