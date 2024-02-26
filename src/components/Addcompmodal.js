import React from 'react';
import { Modal, Button, Form, ModalHeader, ModalBody} from 'react-bootstrap';
import Col from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useRef } from 'react';
import CloseButton from 'react-bootstrap/CloseButton';
import { useEffect } from 'react';
import { useComp } from '../Context/CompContext';

export default function Addcompmodal({onHide}) {



const {addcomp,fetchcompanies}=useComp()


            const title=useRef();
            const description=useRef();



            const handlesubmit=(e)=>{

                e.preventDefault();

                addcomp(title.current.value,description.current.value);
                        onHide()

                        fetchcompanies()

            }


        
         
  return (
    <>
    {/* <Modal.Header>Create New Note < closeButton></closeButton></Modal.Header> */}
    <ModalHeader >
          <Modal.Title>Create New company</Modal.Title>
          {/* <button className="btn-close">  */}
          {/* <button type="button" class="btn-close" aria-label="Close"></button> */}
          <button type="button" class="close" aria-label="Close">
  <span aria-hidden="true" onClick={()=>onHide()}>&times;</span>
</button>
        </ModalHeader>
   
    <ModalBody>
    <Form onSubmit={handlesubmit}>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
              Name
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="Title" ref={title} />{" "}
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
             location
              </Form.Label>
              <Col sm="10">
                {/* <Form.Control type="text" placeholder="Description " ref={description} /> */}
                <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" placeholder="Description " ref={description} ></textarea>
              </Col>

            </Form.Group>
      

            <Button type="submit" variant="primary" >
              Create
            </Button>{" "}
           
          </Form>
          </ModalBody>
          </>
  )
}
