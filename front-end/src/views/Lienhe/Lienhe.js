import React, {useState} from "react";
import validator from "validator";
import { toast } from "react-toastify";

import Form from 'react-bootstrap/Form';
import './Lienhe.scss';
import 'react-toastify/dist/ReactToastify.css';
import {postCustomer} from '../../service/callApiService/callApiService'
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Lienhe = (props) => {
    const history = useHistory();
    const scrollToTop = () => {
        window.scrollTo(0, 0);
      };
      const [email, setEmail]=useState("");
      const [cName, setCName]=useState("");
      const [phone,setPhone]=useState("");
      const [message,setMessage]=useState("");
      const defaultValidInput={
        isValidEmail: true,
        isValidCName:true,
        isValidPhone: true, 
        isValidMessage: true,
      }
      const [objectCheckInput,setObjectCheckInput]= useState(defaultValidInput);
      const invalidInput = () =>{
        setObjectCheckInput (defaultValidInput);
        
        if (validator.isEmpty(email)){
             toast.error('nhập thiếu dữ liệu Email')
            setObjectCheckInput({...defaultValidInput, isValidEmail: false})
            return false;
         }
        else if (!validator.isEmail(email)){
            toast.error('emai của quý khách không đúng')
            setObjectCheckInput({...defaultValidInput, isValidEmail: false})
            return false;
        }
        else if (validator.isEmpty(cName)){
            toast.error('nhập thiếu tên của quý khách');
            setObjectCheckInput({...defaultValidInput, isValidCName: false});
            return false;
        }
        else if(validator.isEmpty(phone)){
            toast.error('nhập thiếu dữ liệu số điên thoại')
            setObjectCheckInput({...defaultValidInput, isValidPhone: false})
            return false;
         }
        else if (!validator.isMobilePhone(phone, 'any', { strictMode: false })){
            toast.error('số điện thoại không hợp lệ');
            setObjectCheckInput({...defaultValidInput, isValidPhone: false});
            return false;
        }
        else if (validator.isEmpty(message))
        {
            toast.error('vui lòng nhập lời nhắn của quý khách');
            setObjectCheckInput({...defaultValidInput, isValidMessage: false})
            return false
        }
        
        
        else{
        
            return true;
        }

    }
    const handleCustomer = async () =>{
        let check = invalidInput();
        if (check === true){
         
            let serverData = await postCustomer(cName, email,phone,message)
            
         //    let serverData = response.data
             if (+serverData.EC === 0 ){
                 toast.success(serverData.EM);
                 setEmail("");
            setCName("");
            setPhone("");
            setMessage("");
             }
             else {
                 
                 toast.error(serverData.EM)
             }
         }
 
     }
     const handleEnter = (event)=>{
         if (event.charCode === 13 && event.code ==='Enter'){
            handleCustomer();
         }
     }
    
    return(
        <div className="lienhe-container">

             {/* <!-- Page Header Start --> */}
             <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container text-center py-5 mt-4">
                <h1 className="display-2 text-white mb-3 animated slideInDown">Liên hệ</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><NavLink to="/">Trang chủ </NavLink></li>
                            <li className="breadcrumb-item" aria-current="page">Liên hệ</li>
                        </ol>
                    </nav>
                </div>
            </div>
        
            
            {/* <!-- Page Header End --> */}
             {/* <!-- Contact Start --> */}
            <div className="contact">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-7">
                            <div className="form">
                            <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Label>tên của quý khách </Form.Label>
                              <Form.Control type="text"
                              value ={cName} onKeyPress= {(event)=> handleEnter(event)} onChange={(event) => setCName(event.target.value)}
                              className={objectCheckInput.isValidCName?'form-control':'form-control is-invalid'} placeholder="nhập tên  của quý khách tại đây" />
                              <Form.Text className="text-muted">
                               
                              </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Label>Email </Form.Label>
                              <Form.Control type="email"  
                              value ={email}onKeyPress= {(event)=> handleEnter(event)} onChange={(event) => setEmail(event.target.value)}
                              className={objectCheckInput.isValidEmail?'form-control':'form-control is-invalid'} placeholder="nhập email của quý khách tại đây" />
                              <Form.Text className="text-muted">
                               
                              </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Label>số điện thoại </Form.Label>
                              <Form.Control type="text" 
                              value ={phone}onKeyPress= {(event)=> handleEnter(event)} onChange={(event) => setPhone(event.target.value)}
                              className={objectCheckInput.isValidPhone?'form-control':'form-control is-invalid'} placeholder="nhập số điện thoại của quý khách tại đây" />
                              <Form.Text className="text-muted">
                               
                              </Form.Text>
                            </Form.Group>
                      
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>yêu cầu của quý khách</Form.Label>
                              <Form.Control type="text"  
                              value ={message}onKeyPress= {(event)=> handleEnter(event)} onChange={(event) => setMessage(event.target.value)}e
                              className={objectCheckInput.isValidMessage?'form-control':'form-control is-invalid'} placeholder="nhập yêu cầu của quý khách tại đây" />
                            </Form.Group>
                           
                           
                          </Form>
                          <button type='submit' className='btn btn-success' onClick={()=> handleCustomer()}  >Gửi yêu cầu</button>
                            </div>
                        </div>
                        
                        <div className="col-md-5">
                            <div className="contact-info">
                                <div className="section-header">
                                    
                                    <p>
                                       Chúng tôi cảm ơn quý khách đã ghé thăm trang web của chúng tôi, nếu cần bất kì hỗ trợ gì, vui lòng gửi thông tin bên trên. Chúng tôi sẽ  liên lạc sớm nhất để giải đáp những vấn đề của quý khách. Công ty chúng tôi xin cam đoan những thông tin là hoàn toàn tuyệt mật!
                                    </p>
                                </div>
                                <h4><i className="fa fa-map-marker"></i> Phòng 27A02 - Tầng 27 - Diamond Plaza, 34 Lê Duẩn, Phường Bến Nghé, Q.1, TP.HỒ CHÍ MINH</h4>
                                <h4><i className="fa fa-envelope"></i>lexicoApartment@lxc.com</h4>
                                <h4><i className="fa fa-phone"></i>090 618 25 55</h4>
                                <div className="scroll-to-top">
                    
                     
    </div>
   
                               
                            </div>
                        </div>

                        <div > <FontAwesomeIcon className="btnGTP" icon={faArrowUpLong} onClick={scrollToTop} /></div>
                    </div>
                </div>
            </div>
        {/* <!-- Contact End --> */}
        </div>
    );
}

export default Lienhe;