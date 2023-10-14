import React, {useEffect, useState, useContext} from 'react';
import './Nav.scss';
import {NavLink, useLocation, useHistory} from 'react-router-dom';
import { UserContext,  } from '../../context/UserContext';
import NavDropdown from 'react-bootstrap/NavDropdown';    
import {logoutUser} from '../../service/callApiService/callApiService'
import { toast } from 'react-toastify';

const Nav = (props) => { 
    const [scrolling, setScrolling] = useState(false);
    const history = useHistory();
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    const location=useLocation();

    const{user,logoutContext}= useContext(UserContext);
    const handleLogout = async()=>{
        let data = await logoutUser()
        localStorage.removeItem('jwt')
        logoutContext();
        if (data && +data.EC ===0 ){
            toast.success('đăng xuất thành công')
            history.push('/login')
        }
        else {
            toast.error(data.EM)
        }
    }
    
    return (
    

       <div className='home-container'>
           


            {/* <!-- Topbar Start --> */}
            <div className="container-fluid py-2 d-none d-lg-flex">
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <div>
                            <small className="me-3"><i className="fa fa-map-marker-alt me-2"></i>Phòng 27A02 - Tầng 27 - Diamond Plaza, 34 Lê Duẩn, Phường Bến Nghé, Q.1, TP.HỒ CHÍ MINH</small>
                            <small className="me-3"><i className="fa fa-clock me-2"></i>Mon-Sat 09am-5pm, Sun Closed</small> 
                        </div>
                        <div>
                        <NavLink to="admin" className="dropdown-item">admin</NavLink>
                        </div>
                        
                        {user && user.isAuthenticated===true ?
                            <> <span>Welcome {user.account.username}   </span>
                            <NavDropdown title="setting" id="basic-nav-dropdown">
                            <NavDropdown.Item >
                            <span onClick={()=>handleLogout()}>đăng xuất</span>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                            <span>đổi mật khẩu</span>
                                
                            </NavDropdown.Item>
                            </NavDropdown></>
                            :
                            <> <div>
                            <NavLink to="login" className="dropdown-item">login</NavLink>
                            </div>
                            </>
                           
                        }
                        
                       
                        
                        
                        
                        
                    </div>
                </div>
            </div>
            {/* <!-- Topbar End --> */}


            {/* <!-- Brand Start --> */}
            <div className="container-fluid bg-primary text-white pt-4 pb-5 d-none d-lg-flex">
                <div className="container pb-2">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex">
                            <i className="bi bi-telephone-inbound fs-2"></i>
                            <div className="ms-3">
                                <h5 className="text-white mb-0">Điện thoại</h5>
                                <span>090 618 25 55</span>
                            </div>
                        </div>
                        <NavLink to="/home" className="h1 text-white mb-0">Lexi<span className="text-dark">Co</span></NavLink>
                        
                        <div className="d-flex">
                            <i className="bi bi-envelope fs-2"></i>
                            <div className="ms-3">
                                <h5 className="text-white mb-0">Email</h5>
                                <span>lexicoApartment@lxc.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Brand End --> */}


            {/* <!-- Navbar Start --> */}
            <div className="container-fluid sticky-top">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-white py-lg-0 px-lg-3">
                        <a href="index.hbs" className="navbar-brand d-lg-none">
                            <h1 className="text-primary m-0">Lexi<span className="text-dark">Co</span></h1>
                        </a>
                        <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav">
                                <NavLink to="/Home" exact className="nav-item nav-link active">Trang chủ</NavLink>
                            
                                <div className="nav-item dropdown">
                                    <NavLink to="about" className="nav-link dropdown-toggle" >Giới thiệu</NavLink>
                                    <div className="dropdown-menu bg-light m-0">
                                        <NavLink to="chung-chi" className="dropdown-item">Chứng chỉ</NavLink>
                                        <NavLink to="chinh-sach-bao-mat" className="dropdown-item">Chính sách bảo mật</NavLink>
                                        <NavLink to="noi-quy-website" className="dropdown-item">Nội quy Website</NavLink>
                                    </div>
                                </div>
                               
                                <NavLink to="can-ho" className="nav-item nav-link">Căn hộ</NavLink>
                                <NavLink to="cac-mau-don" className="nav-item nav-link">Các mẫu đơn</NavLink>
                                <NavLink to="/about" className="nav-item nav-link">Tin Tức</NavLink>
                               
                                <NavLink to="lien-he" className="nav-item nav-link">Liên hệ</NavLink>
                            </div>
                            <div className="ms-auto d-none d-lg-flex">
                                <a className="btn btn-sm-square btn-primary ms-2" href="https://www.facebook.com/lexico.com.vn/"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-sm-square btn-primary ms-2" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-sm-square btn-primary ms-2" href=""><i className="fab fa-linkedin-in"></i></a>
                                <a className="btn btn-sm-square btn-primary ms-2" href="https://www.youtube.com/@lexico7459"><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* <!-- Navbar End --> */}

       </div>
           
            
    );
        }
    

export default Nav;