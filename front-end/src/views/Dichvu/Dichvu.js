import React from "react";
import './Dichvu.scss';
import { NavLink } from "react-router-dom";

const Dichvu = (post) =>{
    return(
        <div className="dichvu-container">
             {/* <!-- Page Header Start --> */}
             <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container text-center py-5 mt-4">
                    <h1 className="display-2 text-white mb-3 animated slideInDown">Dịch vụ</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><NavLink to="/">Trang chủ </NavLink></li>
                            <li className="breadcrumb-item" aria-current="page">Dịch vụ</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Dichvu;