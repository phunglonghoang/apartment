import '../Login/Login.scss';

import { useState} from 'react'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {registerNewUser} from '../../service/callApiService/callApiService'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import validator from 'validator';


const Register = (props) =>{
   const history = useHistory()
    const [email, setEmail]=useState("");
    const [username, setUsername]=useState("");
    const [phone,setPhone]=useState("");
    const [password, setPassword]=useState("");
    const [confirmPassword, setConfirmPassword]=useState("");
    const [firstName, setFirstName]=useState("");
    const [lastName, setLastName]=useState("");
    const [room, setRoom]=useState("");
    const [birthDay, setBirthDay]=useState("");
    const [sex, setSex]=useState("");
    const [groupId, setGroupId]= useState("");
    // setObjectCheckInput
    const [joinDate, setJoinDate]=useState("");
    const defaultValidInput={
        isValidEmail: true,
        isValidUserName:true,
        isValidPhone: true, 
        isValidPassWord: true,
        isValidConfirmPassword:true,
        isValidRoom: true,
        isValidGroupId:true
    }
    const [objectCheckInput,setObjectCheckInput]= useState(defaultValidInput);
    const handleSexChange = (event) => {
        setSex(event.target.value);
      };
    const handleRoleChange =(event)=>{
        setGroupId(event.target.value);
    }


   
    const invalidInput = () =>{
        setObjectCheckInput (defaultValidInput);
        
        if (validator.isEmpty(email)){
             toast.error('nhập thiếu dữ liệu Email')
            setObjectCheckInput({...defaultValidInput, isValidEmail: false})
            return false;
         }
        else if (!validator.isEmail(email)){
            toast.error('email không đúng')
            setObjectCheckInput({...defaultValidInput, isValidEmail: false})
            return false;
        }
        else if (validator.isEmpty(username)){
            toast.error('nhập thiếu dữ liệu User Name');
            setObjectCheckInput({...defaultValidInput, isValidUserName: false});
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
        else if (!validator.isStrongPassword(password )){
            toast.error('mật khẩu phải có từ 8 kí và đủ kí tự hoa, thường, kí tự số, kí tự đặc biệt')
            setObjectCheckInput({...defaultValidInput, isValidPassWord: false});
            return false;
         }
         else if(confirmPassword !== password){
            toast.error('mật khẩu không khớp');
            setObjectCheckInput({...defaultValidInput, isValidConfirmPassWord: false});
            return false;
        }
        else if(validator.isEmpty(room)){
            toast.error('chưa chọn phòng');
            setObjectCheckInput({...defaultValidInput, isValidConfirmPassWord: false});
            return false;
        }
        else if(validator.isEmpty(groupId)){
            toast.error('chưa chọn chức vụ');
            setObjectCheckInput({...defaultValidInput, isValidConfirmPassWord: false});
            return false;
        }

        else{
        
            return true;
        }

        
        
       
    }
   
    const handleRegister =async ( ) =>{
        
        let check = invalidInput();
    
        if (check === true){
         
           let serverData = await registerNewUser( email,username,phone,password,firstName,lastName,room, birthDay,sex,joinDate,groupId)
           
        //    let serverData = response.data
        
            if (+serverData.EC === 0 ){
               
                toast.success(serverData.EM);
                history.push('/admin')
                
                // console.log('register', a)
            }
            else {
                
                toast.error(serverData.EM)
            }
        }

    }
    const handleEnter = (event)=>{
        if (event.charCode === 13 && event.code ==='Enter'){
            handleRegister();
        }
    }
    return (
        <div className="login-container mt-3">
            <div className="container">
                <div className="row px-3 px-ms-0">
                    <div className="content-left col-12 d-none col-sm-7 d-sm-block">
                        <div className='brand'>
                            Sky Building
                        </div>
                        <div className='detail'>
                            Sky Building luôn luôn đồng hành cùng bạn.
                        </div>
                    </div>
                    
                    <div className="content-right  col-sm-5 col-12 d-flex flex-column gap-3 py-3">
                        <div className='brand d-sm-none'>
                            Sky Building
                        </div>
                        <div>
                        
                            <input type="text" className={objectCheckInput.isValidEmail?'form-control':'form-control is-invalid'} placeholder='Email'
                            value ={email}onKeyPress= {(event)=> handleEnter(event)} onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div>
                            <input type="text" className={objectCheckInput.isValidUserName?'form-control':'form-control is-invalid'} placeholder='name'
                            value ={username} onKeyPress= {(event)=> handleEnter(event)} onChange={(event) => setUsername(event.target.value)}
                            
                            />
                        </div>
                        <div>
                            <input type="text" className={objectCheckInput.isValidPhone?'form-control':'form-control is-invalid'} placeholder='phone'
                            value ={phone} onKeyPress= {(event)=> handleEnter(event)} onChange={(event) => setPhone(event.target.value)} />
                            
                        </div>
                        <div>
                            <input type="password" className={objectCheckInput.isValidPassWord?'form-control':'form-control is-invalid'} placeholder='Password'
                            value ={password} onKeyPress= {(event)=> handleEnter(event)} onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <div>
                            <input type="password" className={objectCheckInput.isValidConfirmPassword?'form-control':'form-control is-invalid'} placeholder='Confirm Password'
                            value ={confirmPassword} onKeyPress= {(event)=> handleEnter(event)} onChange={(event) => setConfirmPassword(event.target.value)}
                            />
                        </div>
                        <div>
                            <input type="text" className='form-control' placeholder='firstname'
    
                            value ={firstName} onKeyPress= {(event)=> handleEnter(event)} onChange={(event) => setFirstName(event.target.value)}
                            />
                        </div>
                        <div>
                            <input type="text" className='form-control' placeholder='lastname'
                            value ={lastName} onKeyPress= {(event)=> handleEnter(event)} onChange={(event) => setLastName(event.target.value)}
                            />
                        </div>
                        <div>
                            <input type="text" className={objectCheckInput.isValidRoom?'form-control':'form-control is-invalid'} placeholder='room'
                            value ={room} onKeyPress= {(event)=> handleEnter(event)} onChange={(event) => setRoom(event.target.value)}
                            />
                        </div>
                        <div>
                            <label>
                            ngày sinh
                            </label>
                            <input type="date" className='form-control' placeholder='birthDay'
                            value ={birthDay} onKeyPress= {(event)=> handleEnter(event)} onChange={(event) => setBirthDay(event.target.value)}
                            />
                        </div>
                        <label>giới tính</label>
                        <div>
                            <input type="hidden" className='form-control' placeholder='sex'
                            value ={sex}  onChange={(event) => setSex(event.target.value)}
                            />
                            <div class="form-check">
                                    <input type="radio"
                                    className="form-check-input"
                                    name="sex"
                                    id="male"
                                    value="nam"
                                    checked={sex === 'nam'}
                                    onChange={handleSexChange}/>
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        nam
                                    </label>
                            </div>
                            <div class="form-check">
                                    <input type="radio"
                                    className="form-check-input"
                                    name="sex"
                                    id="female"
                                    value="nữ"
                                    checked={sex === 'nữ'}
                                    onChange={handleSexChange}/>
                                    <label class="form-check-label" for="flexRadioDefault2">
                                       nữ
                                    </label>
                            </div>
                        </div>
                        <div>
                            <label>
                            ngày vào 
                            </label>
                            <input type="date" className='form-control' placeholder='join date'
                            value ={joinDate} onChange={(event) => setJoinDate(event.target.value)}
                            />

                        </div>
                        <div>
                        <label>loại account</label>
                            <input type="hidden" className='form-control' placeholder='role'
                            value ={groupId} onChange={(event) => setGroupId(event.target.value)}
                            />
                                    <div class="form-check">
                                    <input type="radio"
                                    className="form-check-input"
                                    name="1"
                                    id="1"
                                    value="1"
                                    checked={groupId === '1'}
                                    onChange={handleRoleChange}/>
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        admin
                                    </label>
                                    </div>
                                    <div class="form-check">
                                    <input type="radio"
                                    className="form-check-input"
                                    name="2"
                                    id="2"
                                    value="2"
                                    checked={groupId === '2'}
                                    onChange={handleRoleChange}/>
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        nhân viên
                                    </label>
                                    
                                    </div>
                                    <div class="form-check">
                                    <input type="radio"
                                    className="form-check-input"
                                    name="3"
                                    id="3"
                                    value="3"
                                    checked={groupId === '3'}
                                    onChange={handleRoleChange}/>
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        chủ phòng
                                    </label>
                                    </div>
                        </div>
                        
                        
                        <button type='submit' className='btn btn-success' onClick={()=> handleRegister()}  >Đăng Kí</button> 
                        
                      
                        <hr/>
                        <span className='text-center'>
                            <a className='forgot-password' href='/'>Trở về trang chủ.</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Register;