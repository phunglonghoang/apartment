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
                        <a href="index.html" className="nav-item nav-link active"><i className="fa fa-tachometer-alt me-2"></i>Dashboard</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-laptop me-2"></i>Elements</a>
                            <div className="dropdown-menu bg-transparent border-0">
                                <a href="button.html" className="dropdown-item">Buttons</a>
                                <a href="typography.html" className="dropdown-item">Typography</a>
                                <a href="element.html" className="dropdown-item">Other Elements</a>
                            </div>
                        </div>
                        <a href="widget.html" className="nav-item nav-link"><i className="fa fa-th me-2"></i>Widgets</a>
                        <NavLink to="form" className="nav-item nav-link"><i className="fa fa-keyboard me-2"></i>Forms</NavLink>
                        <NavLink to="table" className="nav-item nav-link"><i className="fa fa-table me-2"></i>Tables</NavLink>
                        <a href="chart.html" className="nav-item nav-link"><i className="fa fa-chart-bar me-2"></i>Charts</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="far fa-file-alt me-2"></i>Pages</a>
                            <div className="dropdown-menu bg-transparent border-0">
                                <a href="signin.html" className="dropdown-item">Sign In</a>
                                <a href="signup.html" className="dropdown-item">Sign Up</a>
                                <a href="404.html" className="dropdown-item">404 Error</a>
                                <a href="blank.html" className="dropdown-item">Blank Page</a>
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