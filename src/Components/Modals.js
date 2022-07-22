import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import ReactNotification from "react-notifications-component";

import { update } from "../redux/apicall2";
import { updateSuccess } from "../redux/updateContact";
import { login } from "../redux/apicalls";

const notify = () => toast.success("Successfully updated contact");
export const Mymodals = () => {
  const user = useSelector((state) => state.user.currentUser);
  const updated = useSelector((state) => state.contact.contacts);

  const [number, setphone] = useState(user?.number);
  const [email, setemail] = useState(user?.email);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  // const notify = () => {
  //   toast('Basic notification')
  // }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = (e) => {
    // e.preventDefault();
    update(dispatch, { number, email });
    // user = updated
    console.log("clicked");
  };

  return (
    <>
      <div variant="primary" onClick={handleShow}>
        edit
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                onChange={(e) => setemail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="+234*****"
                onChange={(e) => setphone(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              notify();
              handleClick();
              handleClose();
            }}
          >
            Save Changes
            {/* <Toaster/> */}
          </Button>
          {/* <Toaster/> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const MymodalsSocials = () => {
  const user = useSelector((state) => state.user.currentUser);
  // const updated = useSelector((state) => state.contact.contacts);

  const [linked, setlinked] = useState(user?.linked);
  const [website, setwebsite] = useState(user?.website);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  // const notify = () => {
  //   toast('Basic notification')
  // }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = (e) => {
    // e.preventDefault();
    update(dispatch, { linked, website });
    // user = updated
    // console.log('clicked')
  };

  return (
    <>
      <Button
        variant="secondary"
        onClick={handleShow}
        style={{ width: "100%", marginTop: "15px" }}
      >
        Update Socials
      </Button>

      <Modal show={show} onHide={handleClose} size="sm">
        <Modal.Header closeButton>
          <Modal.Title>Update Socials</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                placeholder="website"
                autoFocus
                onChange={(e) => setwebsite(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>linkedlin</Form.Label>
              <Form.Control
                type="text"
                placeholder="linkedlin"
                onChange={(e) => setlinked(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              notify();
              handleClick();
              handleClose();
            }}
          >
            Save Changes
            {/* <Toaster/> */}
          </Button>
          {/* <Toaster/> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};