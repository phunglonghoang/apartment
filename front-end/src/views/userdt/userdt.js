import React from 'react';
import './userDetail.scss'
import { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CreateModal from '../../components/Modal/createModal';
const Userdt =(props) =>{
  const [userInfo, setUserInfo] = useState({});


    return (
      <>
      
      <div className='user-dt-container'>
      <div className='row'>
      <div className='info info-left col-4 '>
          <h1> thông tin người dùng</h1>
          <div className='img-user'>
          <img  src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/383969868_334450809104597_4217609843405884710_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=49d041&_nc_ohc=JLMme7alg_YAX9k7v6z&_nc_ht=scontent.fsgn2-9.fna&_nc_e2o=s&oh=00_AfCeV2TCONlLo-Qzjwg2GeGTDIz2YIFYW9MZlj52zN0x9A&oe=651CB637" class="rounded p-20 m-20" alt="..."/>
          
          </div>
         
          <div className='info-container'> 
            <ul>
            <li>
            Họ Tên
            </li>

            <li>
            phòng
            </li>
            <li>
            ngày sinh: 
    
            </li>
            <li>
            số thành viên trong phòng:
            </li>
            <li>
            username
            </li>
            </ul>
          </div>
          <button type="button" className="btn btn-warning">sửa thông tin</button>
          



      </div>
      <div className='info info-right col-7'>
        <h1 className='text-right'> thông tin thành viên </h1>
        
        
        <ul>
        <li>
              thành viên 1

        </li>
        <li>
        Họ:
        </li>
        <li>
       Tên:
        </li>
        <li>
        quan hệ với chủ hộ:
        </li>
        <li>
          giới tính
        </li>
        <li>
            ngày sinh
        </li>
        </ul>
       
        <div className='btn'>
        <button type="button" className="btn btn-warning ">sửa thành viên </button>
        </div>
        <div className='btn'>
        <button type="button" className="btn btn-danger">xóa thành viên</button>
        </div>
        <div className='btn'>
        <button type="button" className="btn btn-info">thêm thành viên</button>
      </div>
       
     
        
      </div>
      </div>
        
      </div>
      <CreateModal/>
      </>
    )
}


export default Userdt;