import React, { useState, useEffect } from 'react';
import './Nav.scss';
import {NavLink} from 'react-router-dom';
import { Link } from 'react-scroll';


const Nav = (post) => { 
        const [scrolling, setScrolling] = useState(false);
      
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
    return (
       <div className='home-container '>
            {/* <!-- Spinner Start --> */}
            {/* <div id="spinner"
                className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner-border text-primary" role="status" ></div>
            </div> */}
            {/* <!-- Spinner End --> */}


            {/* <!-- Topbar Start --> */}
            <div className="container-fluid py-2 d-none d-lg-flex">
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <div>
                            <small className="me-3"><i className="fa fa-map-marker-alt me-2"></i>Phòng 27A02 - Tầng 27 - Diamond Plaza, 34 Lê Duẩn, Phường Bến Nghé, Q.1, TP.HỒ CHÍ MINH</small>
                            <small className="me-3"><i className="fa fa-clock me-2"></i>Mon-Sat 09am-5pm, Sun Closed</small>
                        </div>
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
                                <span>+012 345 6789</span>
                            </div>
                        </div>
                        <a href="index.hbs" className="h1 text-white mb-0">Lexi<span className="text-dark">Co</span></a>
                        <div className="d-flex">
                            <i className="bi bi-envelope fs-2"></i>
                            <div className="ms-3">
                                <h5 className="text-white mb-0">Email</h5>
                                <span>info@example.com</span>
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
                                <NavLink to="/" exact className="nav-item nav-link active">Trang chủ</NavLink>
                            
                                <div className="nav-item dropdown">
                                    <NavLink to="about" className="nav-link dropdown-toggle" >Giới thiệu</NavLink>
                                    <div className="dropdown-menu bg-light m-0">
                                        <NavLink to="chung-chi" className="dropdown-item">Chứng chỉ</NavLink>
                                        <NavLink to="chinh-sach-bao-mat" className="dropdown-item">Chính sách bảo mật</NavLink>
                                        <NavLink to="noi-quy-website" className="dropdown-item">Nội quy Website</NavLink>
                                    </div>
                                </div>
                                <NavLink to="dich-vu" className="nav-item nav-link">Dịch vụ</NavLink>
                                <NavLink to="can-ho" className="nav-item nav-link">Căn hộ</NavLink>
                                <NavLink to="cac-mau-don" className="nav-item nav-link">Các mẫu đơn</NavLink>
                                <a href="/about=" className="nav-item nav-link">Tin tức</a>
                                <NavLink to="lien-he" className="nav-item nav-link">Liên hệ</NavLink>
                            </div>
                            <div className="ms-auto d-none d-lg-flex">
                                <a className="btn btn-sm-square btn-primary ms-2" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-sm-square btn-primary ms-2" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-sm-square btn-primary ms-2" href=""><i className="fab fa-linkedin-in"></i></a>
                                <a className="btn btn-sm-square btn-primary ms-2" href=""><i className="fab fa-youtube"></i></a>
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