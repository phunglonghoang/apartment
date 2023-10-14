import React from "react";
import './Lienhe.scss';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const Lienhe = (post) => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
      };
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
                                <form action="" method="">
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <input type="text" className="form-control" placeholder="Your Name" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input type="email" className="form-control" placeholder="Your Email" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Subject" />
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" rows="5" placeholder="Message"></textarea>
                                    </div>
                                    <div><button type="submit">Gửi</button></div>
                                </form>
                            </div>
                        </div>
                        <a href="#" onClick={scrollToTop}>Bấm vào để cuộn lên đầu</a>
                        <div className="col-md-5">
                            <div className="contact-info">
                                <div className="section-header">
                                    <h3>Get in Touch</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum quam ac mi viverra dictum. In efficitur ipsum diam, at dignissim lorem tempor in. Vivamus tempor hendrerit finibus.
                                    </p>
                                </div>
                                <h4><i className="fa fa-map-marker"></i>123 E Shop, Los Angeles, CA, USA</h4>
                                <h4><i className="fa fa-envelope"></i>email@example.com</h4>
                                <h4><i className="fa fa-phone"></i>+123-456-7890</h4>
                                <div className="scroll-to-top">
      <FontAwesomeIcon icon={faAngleUp} onClick={scrollToTop} />
    </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/* <!-- Contact End --> */}
        </div>
    );
}

export default Lienhe;