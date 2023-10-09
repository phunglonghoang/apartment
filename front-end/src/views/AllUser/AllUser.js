import React, { useEffect, useState } from "react";
import {fetchAllUser, deleteUser} from '../../service/callApiService/callApiService'
import ReactPaginate from 'react-paginate';
import DeleteModal from '../../components/Modal/DeleteModal'
import './AllUser.scss'
import { toast } from "react-toastify";

import { Link } from "react-router-dom/cjs/react-router-dom";
const AllUser = (props) => {
    const [listUsers, setListUsers] = useState([]);
    const [currentPages, setCurrentPages] = useState(1);
    const [currentLimit, setCurrentLimit] = useState(3);
    const [totalPages, setTotalPages]= useState(0);
    const [isShowModal, setIsShowModal]= useState(false)
    const [dataModal, setDataModal] = useState({})

    useEffect(()=>{
         fetchUsers();
    },[currentPages])
    const fetchUsers =async()=>{
        let response= await fetchAllUser(currentPages, currentLimit)
        if (response && response && response.EC===0){
            setTotalPages(response.DT.totalPages)
            setListUsers(response.DT.users)
            
        }
    }
    const handlePageClick = async(event) => {
     setCurrentPages(+event.selected +1)
       
    
     
      };
    const handleDeleteUser = async(user)=>{
        setDataModal(user)
        setIsShowModal(true)
       
    }
    const handleClose=()=>{
        setIsShowModal(false)
        setDataModal({})
    }
    const confirmDeleteUser =async() =>{
        let response = await deleteUser(dataModal)
        console.log(response)

        if (response && response.EC===0 ){
            toast.success(response.EM);
            await fetchUsers();
            setIsShowModal(false)
        }
        else{
            toast.error(response.EM);
        }
    }
    const refresh = () => window.location.reload(true)
   
    return(
        <>
        
        <div class="container">
            <div class="row">
                <div class="user-info-container">
                    <div className="action">
                     <button className="btn btn-success" onClick={refresh}> refresh</button>
                     <Link to="/register">
                     <button className="btn btn-primary" 
                     > thêm người dùng mới</button>
                        </Link>
                    
                    </div>
                    <h3 class="table-user-list">Danh sách người dùng trong chung cư</h3>
                    <div class="table-user">
                        
                        <table class="table table-hover table-bordered">
                            <thead class="thead-dark">
                              <tr>
                                <th scope="col">number</th>
                                <th scope="col">id</th>
                                <th scope="col">email</th>
                                <th scope="col">user name</th>
                                <th scope="col">first name</th>
                                <th scope="col">last name</th>
                                <th scope="col">room</th>
                                <th scope="col">phone</th>
                                <th scope="col">sex</th>
                                <th scope="col">loại User</th>
                                <th scope="col"></th>
                               
                               
                              </tr>
                            </thead>
                            <tbody>
                                {(listUsers && listUsers.length >0) ? 
                                    <>
                                        {listUsers.map(( item,index)=>{
                                            return (
                                                <tr key= {`row-${index}`}>
                                                    <td>{(currentPages-1)*currentLimit+ index+1}</td>
                                                    <td>{item.id}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.username}</td>
                                                    <td>{item.firstName}</td>
                                                    <td>{item.lastName}</td>
                                                    <td>{item.room}</td>
                                                    <td>{item.phone}</td>
                                                    <td>{item.sex}</td>
                                                    <td>{item.Group ? item.Group.name : ''}</td>
                                                    <td className="btndt">
                                                        <button type="button"  class="btn btn-warning"
                                                        >
                                                        sửa
                    
                                                        </button>
                                                        <button type="button"  class="btn btn-danger"
                                                        onClick={()=>handleDeleteUser(item)}
                                                        >
                                                            xóa
                    
                                                        </button>
                                                        <Link
                                                        to={{
                                                          pathname: `/users/details/${item.id}`,
                                                         
                                                        }}
                                                      >
                                                        <button type="button" class="btn btn-info">chi tiết</button>
                                                      </Link>
                                                   
                                                    
                                                    
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                       
                                    </>
                                    :
                                    <><tr><td>not found user</td></tr></>
                                }
                                {totalPages > 0 && 
                                <div className="user-footer">
                                <ReactPaginate
                                nextLabel="next >"
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={3}
                                marginPagesDisplayed={2}
                                pageCount={totalPages}
                                previousLabel="< previous"
                                pageClassName="page-item"
                                pageLinkClassName="page-link"
                                previousClassName="page-item"
                                previousLinkClassName="page-link"
                                nextClassName="page-item"
                                nextLinkClassName="page-link"
                                breakLabel="..."
                                breakClassName="page-item"
                                breakLinkClassName="page-link"
                                containerClassName="pagination"
                                activeClassName="active"
                                renderOnZeroPageCount={null}
                              />
                                </div>
                                }
                            </tbody>
                          </table>
                    </div>
                </div>
            </div>
        </div>
        <DeleteModal
        show= {isShowModal} 
        handleClose={handleClose}
        confirmDeleteUser={confirmDeleteUser}
        dataModal={dataModal}
        />

       
        </> 
  
       
    );
}


export default AllUser;