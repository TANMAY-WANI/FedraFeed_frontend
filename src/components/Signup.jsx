import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

function Signup({show,setShow}) {
  //States
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [phno,setPhno] = useState('')
  const [pass,setPass] = useState('')
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleSubmit = () => {
    const usr_data = {
      Name: name,
      Email: email,
      Phone: phno,
      Password: pass,
    };
  
    const headers = {
      // Define your custom headers here, if needed
      // Example:
      'Authorization': 'Bearer your_token',
      'Content-Type': 'application/json',
    };
  
    axios
      .post('http://localhost:5000/usrInfo', usr_data, { headers: headers })
      .then((res) => {
        navigate('/Home');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up to NewsFeed</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="SignupForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
                type="text"
                autoFocus
                onChange={(event)=>{setName(event.target.value)}}
              />
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
                type="number"
                autoFocus
                onChange={(event)=>{setPhno(event.target.value)}}
              />
              
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@Signup.com"
                autoFocus
                onChange={(event)=>{setEmail(event.target.value)}}
              />
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                autoFocus
                onChange={(event)=>{setPass(event.target.value)}}
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
          <Button variant="primary" onClick={handleSubmit}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Signup;