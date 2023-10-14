import React from "react";
import './About.scss';
// import '/style.css';
import {NavLink} from 'react-router-dom';
import BackToTopButton from "../scollTop";

const About = (post) => {
    return (
        <div className="container-about">
                {/* <!-- Page Header Start --> */}
                <div class="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                    <div class="container text-center py-5 mt-4">
                        <h1 class="display-2 text-white mb-3 animated slideInDown">Giới thiệu</h1>
                        <nav aria-label="breadcrumb animated slideInDown">
                            <ol class="breadcrumb justify-content-center mb-0">
                                <li class="breadcrumb-item"><a href="/">Trang chủ</a></li>
                                <li class="breadcrumb-item" aria-current="page">Giới thiệu</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            
                {/* <!-- Page Header End -->
                    
                <!-- About Start --> */}
                <BackToTopButton/>
            <section className = "blog-single section-padding about-page" >
                <div class="container-about" >
                    <div class ="blog-single-content">
                        <div class="post">
                            <div class="post-body">
                                <h2><img alt="" src="/img/z3754448038297_5b1f67b1aba1489e8bb48b4217e0230fvi.jpg" className="img-sty"  /></h2>

                                <h2 ><strong>C&Ocirc;NG TY DỊCH VỤ QUẢN L&Yacute; T&Ograve;A NH&Agrave; L&Ecirc; XI TẠI HẢI PH&Ograve;NG</strong></h2>

                                <p className="text-align">Với 12&nbsp;năm kinh nghiệm trong c&ocirc;ng t&aacute;c quản l&yacute; vận h&agrave;nh khai th&aacute;c c&aacute;c T&ograve;a nh&agrave; tại Hải Ph&ograve;ng. C&ocirc;ng ty Lexico đ&atilde; quản l&yacute;, vận h&agrave;nh nh&agrave; chung cư, t&ograve;a nh&agrave; căn hộ như l&agrave; đơn vị Quản l&yacute; vận h&agrave;nh, Ban quản trị, Chủ đầu tư, Chủ sở hữu Căn hộ. C&ocirc;ng ty Lexico đ&atilde; t&iacute;ch lũy được Bộ quy tr&igrave;nh, ti&ecirc;u chuẩn Quản l&yacute; t&ograve;a nh&agrave; theo chuẩn Đ&ocirc;ng Nam &Aacute; v&agrave; ph&ugrave; hợp với m&ocirc;i trường hoạt động tại Việt Nam, g&oacute;p phần n&acirc;ng cao c&ocirc;ng t&aacute;c &ldquo;Quản l&yacute; xanh - Phục vụ sạch&rdquo; đối với c&aacute;c T&ograve;a nh&agrave;.</p>

                                <p className="text-align">C&ocirc;ng ty Lexico đ&atilde; tư vấn, vận h&agrave;nh, tư vấn x&acirc;y dựng c&aacute;c t&ograve;a nh&agrave; th&agrave;nh một cộng đồng văn minh, lịch sự, đo&agrave;n kết, tr&agrave;n đầy nh&acirc;n &aacute;i v&agrave; đạt hiệu quả cao.</p>
                                <div className="img-sty">
                                    <p ><img  src="/img/1-td-plaza-hai-phong-532.jpg" alt=""  className="img-container"/></p>

                                    <p ><img alt="" src="/img/1-td-plaza-hai-phong-534.png" className="img-container" /></p>
                                </div>
                                <blockquote>
                                <p className="text-align">&nbsp;</p>

                                <p className="text-align">&nbsp;Xem th&ecirc;m:&nbsp;<a href="http://www.haiphong.gov.vn/Portal/Detail.aspx?Organization=SXD&amp;MenuID=19237&amp;ContentID=154916" target="_blank">Th&ocirc;ng tin ban h&agrave;nh của Sở X&acirc;y Dựng&nbsp;về Quản l&yacute; Chung cư Hải Ph&ograve;ng,</a></p>
                                </blockquote>

                                <h3 className="text-align"><strong>Mọi chi tiết vui l&ograve;ng li&ecirc;n hệ <span ></span>:</strong></h3>

                                <p className="text-align">Mobile : 0906182555 ( Th&ugrave;y Dung)</p>

                                <p className="text-align">Email:&nbsp;<a href="mailto:thuydung.lexico@gmail.com">thuydung.lexico@gmail.com</a></p>

                                <p className="text-align">Website : <a href="http://quanlychungcuhaiphong.vn/">www.quanlychungcuhaiphong.vn</a> -&nbsp;<a href="http://www.lexico.com.vn/">www.lexico.com.vn</a></p>

                            </div>
                        </div>
                    </div>
                </div>
                </section>
 </div>


          
  

     
    );
}

export default About;