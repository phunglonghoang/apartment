import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const  DeleteModal= (props)=> {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>xác nhận xóa người dùng</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có chắc chắn muốn xóa : {props.dataModal.username}?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            không
          </Button>
          <Button variant="primary" onClick={props.confirmDeleteUser}>
            xác nhận
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;