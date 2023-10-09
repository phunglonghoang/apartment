import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './CreateModal.scss'
const  CreateModal= (props)=> {
  const [show, setShow] = useState(false);
  const [sex, setSex]=useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSexChange = (event) => {
    setSex(event.target.value);
  };
  return (
    <>
      <Modal show={false} size="lg" onHide={props.handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>thêm mới member</Modal.Title>
        </Modal.Header>
       <Modal.Body>
            <div className='content-body row'>
                <div className='col-12 col-sm-6 form-group  '>
                <span>quan hệ với chủ hộ</span>
                <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  <option selected value="Vợ Chồng">Vợ Chồng</option>
                  <option value="Nữ">Con</option>
                  <option value="Cháu">Cháu</option>
                  <option value="Cha Mẹ">Cha Mẹ</option>
                  <option value="Khác">Khác</option>
              </select>
                </div>
                <div className='col-12 col-sm-6 form-group '>
                <span>họ</span>
                <input className='form-control' type="text" />
                </div>
                <div className='col-12 col-sm-6 form-group '>
                <span>tên</span>
                <input className='form-control' type="text" />
                </div>
                <div className='col-12 col-sm-6 form-group '>
                <span>ngày sinh</span>
                <input className='form-control' type="text" />
                </div>
                <div className='col-12 col-sm-6 form-group '>
                <span>giới tính</span>
                <input type="hidden" className='form-control' placeholder='sex'
                value ={sex}  onChange={(event) => setSex(event.target.value)}
                />
                <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  <option selected value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                  <option value="Khác">Khác</option>
              </select>
                
                </div>
                
            </div>
       </Modal.Body>
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

export default CreateModal;