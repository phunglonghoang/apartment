import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const  DetailContactModal= (props)=> {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>chi tiết yêu cầu khách hàng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>tên khách hàng: {props.dataModal.name}?</div></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            đóng
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DetailContactModal;