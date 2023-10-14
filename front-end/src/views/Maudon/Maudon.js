import React from "react";
import './Maudon.scss';
import { NavLink } from "react-router-dom";




const Maudon = (post) =>{
    
    return(
        <div className="dichvu-container">
             {/* <!-- Page Header Start --> */}
            <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container text-center py-5 mt-4">
                    <h1 className="display-2 text-white mb-3 animated slideInDown">Các mẫu đơn</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><NavLink to="/">Trang chủ </NavLink></li>
                            <li className="breadcrumb-item" aria-current="page">Mẫu đơn</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div class="container-fluid container-service py-5">
        <div class="container py-5 container-pictrure">
            <div class="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" >
                <h1 class="display-6 mb-3">Biên bản và mẫu đơn dành cho chung cư</h1>
                <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue, iaculis id elit eget, ultrices pulvinar tortor.</p>
            </div>
            <div class="row g-4">
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-item">
                        <div class="icon-box-primary mb-4 ">
                        <i class="bi bi-house-add"></i>
                        </div>
                        <h5 class="mb-3">Đơn xin sửa chữa căn hộ</h5>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p class="mb-4">Dành cho khách hàng sử dụng căn hộ báo cáo tình trạng và yêu cầu được sửa chữa.</p>
                        <a class="btn btn-light px-3" href="./fileWord/01.doc" download="don-xin-sua-chua-can-ho.doc">Tải về<i class="bi bi-chevron-double-right ms-1"></i></a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="service-item">
                        <div class="icon-box-primary mb-4">
                            <i class="bi bi-house-gear"></i>
                        </div>
                        <h5 class="mb-3">Đơn trình bày (xin thay đổi kết cấu căn hộ)</h5>
                            <p class="mb-4">Dành cho khách hàng sử dụng có nhu cầu thay đổi kết cấu căn hộ.</p>
                            <a class="btn btn-light px-3" href="./fileWord/02.doc" download="don-thay-doi-ket-cau-can-ho.doc">Tải về<i class="bi bi-chevron-double-right ms-1"></i></a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="service-item">
                        <div class="icon-box-primary mb-4">
                        <i class="bi bi-card-checklist"></i>
                        </div>
                        <h5 class="mb-3">Phiếu tiếp thu ý kiến khách hàng</h5>
                            <p class="mb-4">Thu thập thông tin ý kiến khách hàng về dịch vụ và an ninh của chung cư.</p>
                            <a class="btn btn-light px-3" href="./fileWord/03.doc" download="tiep-thu-y-kien-khach-hang.doc">Tải về<i class="bi bi-chevron-double-right ms-1"></i></a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div class="service-item">
                        <div class="icon-box-primary mb-4">
                            <i class="bi bi-person-plus"></i>
                        </div>
                        <h5 class="mb-3">Bản khai nhân khẩu (cho người Việt Nam)</h5>
                            <p class="mb-4">Thực hiện yêu cầu khai báo nhân khẩu theo quy định của nhà nước.</p>
                            <a class="btn btn-light px-3" href="./fileWord/04.doc" download="khai-bao-nhan-khau-VN.doc">Tải về<i class="bi bi-chevron-double-right ms-1"></i></a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-item">
                        <div class="icon-box-primary mb-4">
                            <i class="bi bi-person-vcard"></i>
                        </div>
                        <h5 class="mb-3">Phiếu khai báo tạm trú (cho người nước ngoài)</h5>
                            <p class="mb-4">Khai báo tạm trú, tạm vắng cho người quốc tịch nước ngoài.</p>
                            <a class="btn btn-light px-3" href="./fileWord/05.doc" download="khai-bao-tam-tru-nuocngoai.doc">Tải về<i class="bi bi-chevron-double-right ms-1"></i></a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="service-item">
                        <div class="icon-box-primary mb-4">
                            <i class="bi bi-cone-striped"></i>
                        </div>
                        <h5 class="mb-3">Thẻ nhà thầu ra vào khu vực thi công</h5>
                            <p class="mb-4">Đơn dành cho đơn vị nhà thầu thi công công trình.</p>
                            <a class="btn btn-light px-3" href="./fileWord/06.doc" download="don-vi-thi-cong.doc">Tải về<i class="bi bi-chevron-double-right ms-1"></i></a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="service-item">
                        <div class="icon-box-primary mb-4">
                            <i class="bi bi-journal-medical"></i>
                        </div>
                        <h5 class="mb-3">Biên bản sự việc</h5>
                            <p class="mb-4">Biên bản tường trình sự việc xảy ra tại chung cư.</p>
                            <a class="btn btn-light px-3" href="./fileWord/07.doc" download="bien-ban-su-viec.doc">Tải về<i class="bi bi-chevron-double-right ms-1"></i></a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div class="service-item">
                        <div class="icon-box-primary mb-4">
                            <i class="bi bi-card-checklist"></i>
                        </div>
                        <h5 class="mb-3">Phiếu đánh giá chất lượng của khách hàng</h5>
                            <p class="mb-4">Đánh giá mức độ hài lòng của khách hàng về chung cư.</p>
                            <a class="btn btn-light px-3" href="./fileWord/09.doc" download="danh-gia.doc">Tải về<i class="bi bi-chevron-double-right ms-1"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>

        </div>
    );
}

export default Maudon;