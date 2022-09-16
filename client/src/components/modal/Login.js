import React from 'react'
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import {AttachFile} from '@mui/icons-material'

export default function Login({showAddLogin, handleCloseAddLogin}) {
  return (
    <div>
        <Modal show={showAddLogin} onHide={handleCloseAddLogin} centered>
        <Modal.Header className="bg-dark text-white border-0">
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark">
         
          <Form> 
            {/* Email */}
            <Form.Group className="mb-3" controlId="email">
              <Form.Control
                type="email"
                placeholder="Email"
                className="mb-3 bg-secondary text-white formModal"
                name="email"
                // onChange={handleChange}
                autoFocus
              />
              </Form.Group>

            {/* Password */}
            <Form.Group className="mb-3" controlId="password">
              <Form.Control
                type="password"
                placeholder="Password"
                className="mb-3 bg-secondary text-white formModal"
                name="password"
                // onChange={handleChange}
              />
              </Form.Group>
 
          <Button variant="danger" type="submit" className="text-white fw-bold border-0 btn-full" size="lg">Login
          </Button>
          </Form>
        </Modal.Body>
        </Modal>
    </div>
  )
}
