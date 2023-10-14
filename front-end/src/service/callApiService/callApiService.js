import axios from '../../setup/axios'


const registerNewUser = ( email,username,phone,password,firstName,lastName,room, birthDay,sex,joinDate,groupId)=>{
    return axios.post('/api/v1/register',{
        email,username,phone,password,firstName,lastName,room, birthDay,sex,joinDate,groupId
})
}

const loginUser = (valueLogin, password) =>{
    return axios.post('/api/v1/login',{
        valueLogin,password
})
}
const fetchAllUserMember = () =>{
    return axios.get('/api/v1/user/read' ,{
    })
}
const fetchAllUser = (page, limit) =>{
    return axios.get(`/api/v1/user/admin/read?page=${page}&limit=${limit} `,{
    })
}
const deleteUser =(user) => {
    return axios.delete('/api/v1/user/delete', {data:{id:user.id}})
}
const userDetail =(id)=>{
    return axios.get(`/api/v1/user/detail?id=${id}`,{

    })
}
const getUserAccount = (userData)=>{
    return axios.get('/api/v1/account' ,{
    })
}
const logoutUser = ()=>{
    return axios.post('/api/v1/logout')
}
export {registerNewUser,loginUser, fetchAllUser, fetchAllUserMember,deleteUser,
    userDetail,getUserAccount,logoutUser
        }