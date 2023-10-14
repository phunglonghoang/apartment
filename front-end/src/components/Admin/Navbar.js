import React from "react";
import './Navbar.scss';
import { NavLink } from "react-router-dom";


const Navbar = (post) => {
    return(
        <div className="navbar-container">
                {/* <!-- Spinner Start --> */}
            {/* <div id="spinner" className="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner-border text-primary" style={"width: 3rem; height: 3rem;"} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div> */}
            
            <div className="sidebar pe-4 pb-3">
                <nav className="navbar bg-secondary navbar-dark">
                    <a href="index.html" className="navbar-brand mx-4 mb-3">
                        <h3 className="text-primary"><i className="fa fa-user-edit me-2"></i>DarkPan</h3>
                    </a>
                    <div className="d-flex align-items-center ms-4 mb-4">
                        <div className="position-relative">
                            <img className="rounded-circle" src="img/user.jpg" alt="" />
                            <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                        </div>
                        <div className="ms-3">
                            <h6 className="mb-0">Jhon Doe</h6>
                            <span>Admin</span>
                        </div>
                    </div>
                    <div className="navbar-nav w-100">
                        <a className="nav-item nav-link active"><i className="fa fa-tachometer-alt me-2"></i>Dashboard</a>
                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="far fa-file-alt me-2"></i>Quản lí dân cư</a>
                            <div className="dropdown-menu bg-transparent border-0">
                            <NavLink to='/user' className="dropdown-item">đếm số dân cư</NavLink>
                            <NavLink to='/register' className="dropdown-item">thêm dân cư</NavLink>
                            <NavLink to='/user' className="dropdown-item">xem danh sách dân cư</NavLink>
                            <NavLink to='/user' className="dropdown-item">xem phòng</NavLink>
                                
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="far fa-file-alt me-2"></i>Pages</a>
                            <div className="dropdown-menu bg-transparent border-0">
                           
                            <NavLink to='/home' className="dropdown-item">trang chủ</NavLink>
                            <NavLink to='/home' className="dropdown-item">trang chủ</NavLink>
                            <NavLink to='/home' className="dropdown-item">trang chủ</NavLink>
                            <NavLink to='/home' className="dropdown-item">404 not found </NavLink>
                               
                            </div>
                        </div>
                    </div>
                </nav>
        </div>
        {/* <!-- Sidebar End --> */}

        
      
        
        </div>
    );

}

export default Navbar;