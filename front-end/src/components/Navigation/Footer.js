import React from "react";
import './Footer.scss';
import { NavLink } from "react-router-dom";

const Footer = (post) => {
    return (
        <div className="footer-container">
             {/* <!-- Footer Start --> */}
            <div className="container-fluid footer position-relative bg-dark text-white-50 py-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row g-5 py-5">
                        <div className="col-lg-6 pe-lg-5">
                            <NavLink to="/" className="navbar-brand">
                                <h1 className="h1 text-primary mb-0">Lexi<span className="text-white">co</span></h1>
                            </NavLink>
                            <p className="fs-5 mb-4">Luôn luôn đồng hành cùng khách hàng.</p>
                            <p><i className="fa fa-map-marker-alt me-2"></i>TD Plaza - Lê Hồng Phong - Hải Phòng</p>
                            <p><i className="fa fa-phone-alt me-2"></i>+012 345 67890</p>
                            <p><i className="fa fa-envelope me-2"></i>info@example.com</p>
                            <div className="d-flex mt-4">
                                <a className="btn btn-lg-square btn-primary me-2" href="https://www.facebook.com/profile.php?id=100066781932277"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-lg-square btn-primary me-2" href="https://www.facebook.com/profile.php?id=100066781932277"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-lg-square btn-primary me-2" href="https://www.facebook.com/profile.php?id=100066781932277"><i className="fab fa-linkedin-in"></i></a>
                                <a className="btn btn-lg-square btn-primary me-2" href="https://www.facebook.com/profile.php?id=100066781932277"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-6 ps-lg-5">
                            <div className="row g-5">
                                <div className="col-sm-6">
                                    <h4 className="text-light mb-4">Quick Links</h4>
                                    <NavLink className="btn btn-link" to="/">Trang chủ</NavLink>
                                    <NavLink className="btn btn-link" to="about">Giới thiệu</NavLink>
                                    <NavLink className="btn btn-link" to="can-ho">Căn hộ</NavLink>
                                    <NavLink className="btn btn-link" to="lien-he">Liên hệ</NavLink>
                                    <NavLink className="btn btn-link" to="cac-mau-don">Mẫu đơn</NavLink>
                                </div>
                                <div className="col-sm-6">
                                    <h4 className="text-light mb-4">Popular Links</h4>
                                    <a className="btn btn-link" href="">About Us</a>
                                    <a className="btn btn-link" href="">Contact Us</a>
                                    <a className="btn btn-link" href="">Our Services</a>
                                    <a className="btn btn-link" href="">Terms & Condition</a>
                                    <a className="btn btn-link" href="">Support</a>
                                </div>
                                <div className="col-sm-12">
                                    <h4 className="text-light mb-4">Newsletter</h4>
                                    <div className="w-100">
                                        <div className="input-group">
                                            <input type="text" className="form-control border-0 py-3 px-4"  placeholder="Your Email Address"/><button className="btn btn-primary px-4">Sign Up</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Footer;