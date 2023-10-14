import React from 'react';
import './Home.scss';
import image1 from './Footer1.png';
import image2 from './Footer2.png';
import image3 from './cd220270fa0931576818-28.jpg';
import image4 from './chung-cu-minato-hai-phong-89.jpg';
import image5 from './phoi-canh-chung-cu-hera-hai-phong-1-41.jpg';
import image6 from './Kỹ-Sư-Trưởng.jpg';
import image7 from './Chuyên-Gia-Tư-Vấn.jpg';
import image8 from './Phó-Giám-Đốc.jpg';

const Home = (post) => {
    return (
        
        <div className="carosel">
            <div className="container-fluid header-carousel px-0 mb-5">
                <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src={image1} alt="Image"/>
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-lg-7 text-start">
                                            <h1 className="display-1 text-white animated slideInRight mb-3">Doanh nghiệp Lexico</h1>
                                            <p className="mb-5 animated slideInRight">chún tôi luôn xem những mong muốn của khách hàng là những ước mơ để theo đuổi.</p>
                                            <a href="" className="btn btn-primary py-3 px-5 animated slideInRight">Explore More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src={image2} alt="Image"/>
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row justify-content-end">
                                        <div className="col-lg-7 text-end">
                                            <h1 className="display-1 text-white animated slideInLeft mb-3">Bất động sản hàng đầu Việt Nam</h1>
                                            <p className="mb-5 animated slideInLeft">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue, iaculis id elit eget, ultrices pulvinar tortor. Quisque vel lorem porttitor, malesuada arcu quis, fringilla risus.</p>
                                            <a href="" className="btn btn-primary py-3 px-5 animated slideInLeft">Explore More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            {/* <!-- About Start --> */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="row g-0">
                                <div className="col-6">
                                    <img className="img-fluid" src={image3}/>
                                </div>
                                <div className="col-6">
                                    <img className="img-fluid" src={image4}/>
                                </div>
                                <div className="col-6">
                                    <img className="img-fluid" src={image5}/>
                                </div>
                                <div className="col-6">
                                    <div className="bg-primary w-100 h-100 mt-n5 ms-n5 d-flex flex-column align-items-center justify-content-center">
                                        <div className="icon-box-light">
                                            <i className="bi bi-award text-dark"></i>
                                        </div>
                                        <h1 className="display-1 text-white mb-0" data-toggle="counter-up">25</h1>
                                        <small className="fs-5 text-white">Năm kinh nghiệm</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <h1 className="display-6 mb-4">Quản lý vận hành tòa nhà, chung cư và cụm chung cư</h1>
                            <p className="mb-4">Với 25 năm kinh nghiệm trong công tác quản lý vận hành khai thác các Tòa nhà tại Hải Phòng. Công ty Lexico đã quản lý, vận hành nhà chung cư, tòa nhà căn hộ như là đơn vị Quản lý vận hành.</p>
                            <div className="row g-4 g-sm-5 justify-content-center">
                                <div className="col-sm-6">
                                    <div className="about-fact btn-square flex-column rounded-circle bg-primary ms-sm-auto">
                                        <p className="text-white mb-0">Giải thưởng</p>
                                        <h1 className="text-white mb-0" data-toggle="counter-up">13</h1>
                                    </div>
                                </div>
                                <div className="col-sm-6 text-start">
                                    <div className="about-fact btn-square flex-column rounded-circle bg-secondary me-sm-auto">
                                        <p className="text-white mb-0">Căn hộ hoàn chỉnh</p>
                                        <h1 className="text-white mb-0" data-toggle="counter-up">2700</h1>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="about-fact mt-n130 btn-square flex-column rounded-circle bg-dark mx-sm-auto">
                                        <p className="text-white mb-0">Khách hàng vui vẻ</p>
                                        <h1 className="text-white mb-0" data-toggle="counter-up">9999</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}


            {/* <!-- Features Start --> */}
            <div class="container-fluid py-5">
                <div class="container">
                    <div class="row g-0 feature-row">
                        <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                            <div class="feature-item border h-100 p-5">
                                <div class="icon-box-primary mb-4">
                                    <i class="bi bi-award text-dark"></i>
                                </div>
                                <h5 class="mb-3">Giải thưởng</h5>
                                <p class="mb-0">Vinh dự khi được nhận bằng khen của nhà nước và cũng như những giải thưởng quốc tế khác.</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                            <div class="feature-item border h-100 p-5">
                                <div class="icon-box-primary mb-4">
                                    <i class="bi bi-people text-dark"></i>
                                </div>
                                <h5 class="mb-3">Kỹ sư chuyên môn</h5>
                                <p class="mb-0">Chúng tôi có những chuyên gia hàng đầu trong lĩnh vực nhà ở bất động sản.</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                            <div class="feature-item border h-100 p-5">
                                <div class="icon-box-primary mb-4">
                                    <i class="bi bi-cash-coin text-dark"></i>
                                </div>
                                <h5 class="mb-3">Giá căn hộ</h5>
                                <p class="mb-0">Bình quân so với tiêu chuẩn của người lao động nước ta hiện nay.</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                            <div class="feature-item border h-100 p-5">
                                <div class="icon-box-primary mb-4">
                                    <i class="bi bi-headphones text-dark"></i>
                                </div>
                                <h5 class="mb-3">Hỗ trợ 24/7</h5>
                                <p class="mb-0">Chúng tôi rất hân hạnh được phục vụ quý khách mọi lúc.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Features End --> */}

            {/* <!-- Features Start --> */}
            <div class="container-fluid feature mt-5 wow fadeInUp" data-wow-delay="0.1s">
                <div class="container">
                    <div class="row g-0">
                        <div class="col-lg-6 pt-lg-5">
                            <div class="bg-white p-5 mt-lg-5">
                                <h1 class="display-6 mb-4 wow fadeIn" data-wow-delay="0.3s">Giải pháp tối ưu về vấn đề nhà ở</h1>
                                <p class="mb-4 wow fadeIn" data-wow-delay="0.4s">Xây dựng và phát triển các dự án bất động sản xanh sẽ giúp giảm tác động tiêu cực lên môi trường, tiết kiệm năng lượng và tạo ra các không gian sống lành mạnh cho cư dân. Điều này bao gồm việc sử dụng công nghệ xanh, cải thiện quy trình xây dựng và thiết kế thân thiện với môi trường.</p>
                                <div class="row g-5 pt-2 mb-5">
                                    <div class="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                                        <div class="icon-box-primary mb-4">
                                            <i class="bi bi-person-plus text-dark"></i>
                                        </div>
                                        <h5 class="mb-3">Chuyên gia </h5>
                                        <span>Các chuyên gia có kinh nghiệm lâu năm trong việc xây dựng và quản lý chung cư.</span>
                                    </div>
                                    <div class="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                                        <div class="icon-box-primary mb-4">
                                            <i class="bi bi-check-all text-dark"></i>
                                        </div>
                                        <h5 class="mb-3">Tiêu chuẩn Châu Âu</h5>
                                        <span>An toàn, bền vững và chất lượng của dự án.</span>
                                    </div>
                                </div>
                                <a class="btn btn-primary py-3 px-5 wow fadeIn" data-wow-delay="0.5s" href="">Xem thêm</a>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="row h-100 align-items-end">
                                <div class="col-12 wow fadeIn" data-wow-delay="0.3s">
                                    <div class="d-flex align-items-center justify-content-center" >
            
                                            <span><iframe width="450" height="320" src="https://www.youtube.com/embed/9KdeyiYGD8g?si=ozB2EsTuNoiCOqpZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></span>
                                       
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="bg-primary p-5">
                                        <div class="experience mb-4 wow fadeIn" data-wow-delay="0.3s">
                                            <div class="d-flex justify-content-between mb-2">
                                                <span class="text-white">Nội thất</span>
                                                <span class="text-white">100%</span>
                                            </div>
                                            <div class="progress">
                                                <div class="progress-bar bg-dark" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div class="experience mb-4 wow fadeIn" data-wow-delay="0.4s">
                                            <div class="d-flex justify-content-between mb-2">
                                                <span class="text-white">Mức độ hoàn hảo</span>
                                                <span class="text-white">99%</span>
                                            </div>
                                            <div class="progress">
                                                <div class="progress-bar bg-dark" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div class="experience mb-0 wow fadeIn" data-wow-delay="0.5s">
                                            <div class="d-flex justify-content-between mb-2">
                                                <span class="text-white">Mức độ hài lòng</span>
                                                <span class="text-white">99.99%</span>
                                            </div>
                                            <div class="progress">
                                                <div class="progress-bar bg-dark" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* {/* <!-- Features End --> */}

           

            {/* <!-- Video Modal Start --> */} 
            <div class="modal modal-video fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content rounded-0">
                        <div class="modal-header">
                            <h3 class="modal-title" id="exampleModalLabel">Youtube Video</h3>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            {/* <!-- 16:9 aspect ratio --> */}
                            <div class="ratio ratio-16x9">
                                <iframe class="embed-responsive-item" src="" id="video" allowfullscreen
                                    allowscriptaccess="always" allow="autoplay"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Video Modal End --> */}

            {/* <!-- Appoinment Start --> */}
            <div class="container-fluid py-5">
                <div class="container">
                    <div class="row g-5">
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <h1 class="display-6 mb-4">Chúng tôi đảm bảo bạn sẽ luôn nhận được sự hài lòng tốt nhất</h1>
                            <p>Chung cư cung cấp các tiện ích và tiện nghi phù hợp với tiêu chuẩn chất lượng Châu Âu. Điều này bao gồm các tiện ích như hệ thống an ninh, hồ bơi, phòng tập thể dục, sân chơi, và các khu vui chơi.</p>
                            <p class="mb-4">Giấy tờ và thủ tục pháp lý liên quan đến xây dựng chung cư cần phải được tuân thủ và hoàn thiện đúng cách.</p>
                            <div class="d-flex align-items-start wow fadeIn" data-wow-delay="0.3s">
                                <div class="icon-box-primary">
                                    <i class="bi bi-geo-alt text-dark fs-1"></i>
                                </div>
                                <div class="ms-3">
                                    <h5>Địa chỉ</h5>
                                    <span> TD Plaza - Lê Hồng Phong - Hải Phòng</span>
                                </div>
                            </div>
                            <hr/>
                            <div class="d-flex align-items-start wow fadeIn" data-wow-delay="0.4s">
                                <div class="icon-box-primary">
                                    <i class="bi bi-clock text-dark fs-1"></i>
                                </div>
                                <div class="ms-3">
                                    <h5>Thời gian</h5>
                                    <span>Thứ 2 - 6 09:00-17:00</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <h2 class="mb-4">Liên hệ với chúng tôi</h2>
                            <div class="row g-3">
                                <div class="col-sm-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="name" placeholder="Your Name"/>
                                        <label for="name">Họ & Tên</label>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-floating">
                                        <input type="email" class="form-control" id="mail" placeholder="Your Email"/>
                                        <label for="mail">Email của quý khách</label>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="mobile" placeholder="Your Mobile"/>
                                        <label for="mobile">SĐT</label>
                                    </div>
                                </div>
                                
                                <div class="col-12">
                                    <div class="form-floating">
                                        <textarea class="form-control lh-lg" placeholder="Leave a message here" id="message"
                                            ></textarea>
                                        <label for="message">Ghi chú</label>
                                    </div>
                                </div>
                                <div class="col-12 text-center">
                                    <button class="btn btn-primary w-100 py-3" type="submit">Liên hệ</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Appoinment Start --> */}

            {/* <!-- Team Start --> */}
            <div class="container-fluid container-team py-5">
                <div class="container pb-5">
                    <div class="row g-5 align-items-center mb-5">
                        <div class="col-md-6 wow fadeIn" data-wow-delay="0.3s">
                            <img class="img-fluid w-100" src={image6} alt=""/>
                        </div>
                        <div class="col-md-6 wow fadeIn" data-wow-delay="0.5s">
                            <h1 class="display-6 mb-3">Ông Bùi Nguyên Hưng</h1>
                            <p class="mb-1">CEO & Founder</p>
                            <p class="mb-5">Lexico, Lê Hồng Phong, Hải Pòng</p>
                            <h3 class="mb-3">Tiểu sử</h3>
                            <p class="mb-4">Thạc sĩ Quản trị kinh doanh(MBA) - Trường Quản trị kinh doanh, Viên công nghệ Châu Á(Bangkok, Thailand).</p>
                            <p class="mb-4">Bùi Nguyên Hưng là một chuyên gia tư vấn bất động sản có kinh nghiệm gần 4 năm làm truyền thông cho các dự án bất động sản của các tập đoàn lớn như Vingroup, Sungroup.</p>
                            <div class="d-flex">
                                <a class="btn btn-lg-square btn-primary me-2" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-lg-square btn-primary me-2" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-lg-square btn-primary me-2" href=""><i class="fab fa-linkedin-in"></i></a>
                                <a class="btn btn-lg-square btn-primary me-2" href=""><i class="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="row g-4">
                        <div col col-md-8 col-md-offset-2>
                            <div className='section-title-5s'>
                                <h2>Chuyên gia</h2>
                                <p1>Hãy liên hệ với chúng tôi, chúng tôi sẽ giúp bạn giải đáp mọi yêu cầu</p1>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="team-item">
                                <div class="position-relative overflow-hidden">
                                    <img class="img-fluid w-100" src={image6} alt=""/>
                                    <div class="team-social">
                                        <a class="btn btn-square btn-light mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                        <a class="btn btn-square btn-light mx-1" href=""><i class="fab fa-twitter"></i></a>
                                        <a class="btn btn-square btn-light mx-1" href=""><i class="fab fa-linkedin-in"></i></a>
                                        <a class="btn btn-square btn-light mx-1" href=""><i class="fab fa-youtube"></i></a>
                                    </div>
                                </div>
                                <div class="text-center p-4">
                                    <h5 class="mb-1">Ông Bùi Nguyên Hưng</h5>
                                    <span>Kỹ sư trưởng</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="team-item">
                                <div class="position-relative overflow-hidden">
                                    <img class="img-fluid w-100" src={image7} alt=""/>
                                    <div class="team-social">
                                        <a class="btn btn-square btn-light mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                        <a class="btn btn-square btn-light mx-1" href=""><i class="fab fa-twitter"></i></a>
                                        <a class="btn btn-square btn-light mx-1" href=""><i class="fab fa-linkedin-in"></i></a>
                                        <a class="btn btn-square btn-light mx-1" href=""><i class="fab fa-youtube"></i></a>
                                    </div>
                                </div>
                                <div class="text-center p-4">
                                    <h5 class="mb-1">TS.Lê Va Xi</h5>
                                    <span>Chuyên gia tư vấn QLVH chung cư</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="team-item">
                                <div class="position-relative overflow-hidden">
                                    <img class="img-fluid w-100" src={image8} alt=""/>
                                    <div class="team-social">
                                        <a class="btn btn-square btn-light mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                        <a class="btn btn-square btn-light mx-1" href=""><i class="fab fa-twitter"></i></a>
                                        <a class="btn btn-square btn-light mx-1" href=""><i class="fab fa-linkedin-in"></i></a>
                                        <a class="btn btn-square btn-light mx-1" href=""><i class="fab fa-youtube"></i></a>
                                    </div>
                                </div>
                                <div class="text-center p-4">
                                    <h5 class="mb-1">Ông Phạm Bá Cường</h5>
                                    <span>Phó giám đốc</span>
                                </div>
                            </div>
                        </div>
                        {/* <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div class="team-item">
                                <div class="position-relative overflow-hidden">
                                    <img class="img-fluid w-100" src="img/team-5.jpg" alt=""/>
                                    <div class="team-social">
                                        <a class="btn btn-square btn-light mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                        <a class="btn btn-square btn-light mx-1" href=""><i class="fab fa-twitter"></i></a>
                                        <a class="btn btn-square btn-light mx-1" href=""><i class="fab fa-linkedin-in"></i></a>
                                        <a class="btn btn-square btn-light mx-1" href=""><i class="fab fa-youtube"></i></a>
                                    </div>
                                </div>
                                <div class="text-center p-4">
                                    <h5 class="mb-1">Clarabelle Samber</h5>
                                    <span>Lab Assistant</span>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* <!-- Team End --> */}

        </div>
    );
}

export default Home;
 