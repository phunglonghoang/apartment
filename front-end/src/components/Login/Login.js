import './Login.scss';
import { useEffect, useState} from 'react'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {useHistory  } from 'react-router-dom';
import { NavLink } from 'react-router-dom';    
import { loginUser } from '../../service/callApiService/callApiService';
import validator from 'validator'
const Login = (props) =>{
    const history = useHistory();
    const [valueLogin, setValueLogin]= useState("");
    const [password, setPassword]= useState("");
    const defaultValidInput={
        isValidLogin : true,
        isValidPassword : true
    }
    const [objectCheckInput,setObjectCheckInput]= useState(defaultValidInput);
    


   
 
    const handleLogin=async()=>{
        setObjectCheckInput(defaultValidInput);
        if(validator.isEmpty(valueLogin)){
            setObjectCheckInput({...defaultValidInput, isValidLogin: false})
            toast.error('chưa nhập email hoặc username hoặc sđt');
            return false;
        }
       
        if (validator.isEmpty(password)){
            setObjectCheckInput({...defaultValidInput, isValidPassword: false})
            toast.error('chưa nhập password')
            return false;
        }
        let response = await loginUser (valueLogin, password);
        if (response  && +response.EC===0){
            toast.success('đăng nhập thành công')
            let data = {
                isAuthenticated: true,
                token: 'fake token',

            }
            sessionStorage.setItem('account', JSON.stringify(data))
            history.push('/Home');
            window.location.reload();
        }
        if (response && +response.EC!==0){
            toast.error(response.EM)
        }
       

    }
    
    const handleEnter = (event)=>{
        if (event.charCode === 13 && event.code ==='Enter'){
            handleLogin();
        }
    }
    useEffect (()=>{
        
    })
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

                        <input type="text"
                        onKeyPress= {(event)=> handleEnter(event)}
                        className={objectCheckInput.isValidLogin?'form-control':'form-control is-invalid'}
                        value ={valueLogin} onChange={(event) => setValueLogin(event.target.value)}
                        placeholder='Email, Username hoặc số điện thoại'/>

                        <input type="password" 
                        value ={password} onChange={(event) => setPassword(event.target.value)}
                        onKeyPress= {(event)=> handleEnter(event)}
                        className={objectCheckInput.isValidPassword?'form-control':'form-control is-invalid'}
                         placeholder='Password'/>
                        <button className='btn btn-success' onClick={()=>handleLogin()}>Đăng Nhập</button>

                        <span className='text-center'>
                        <NavLink to="/Home">Quên mật khẩu</NavLink>
                        </span>
                        <hr/>
                        <span className='text-center'>
                            <NavLink to="/Home">Trở về trang chủ</NavLink>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;