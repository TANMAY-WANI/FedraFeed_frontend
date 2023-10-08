import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Login({show,setShow}) {

  const handleClose = () => setShow(false);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="SignupForm.ControlInput1">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
                type="number"
                autoFocus
              />
              <Form.Label>OTP</Form.Label>
            <Form.Control
                type="number"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="SignupForm.ControlTextarea1"
            >
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login;