import userApiService from '../../service/UserApiService'

const readFunc =async(req,res)=>{
 
    try {
        let data = await userApiService.getAllUser();
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        })
        
        
    } catch (error) {
        console.log(">>>>>>>>>>>>>>>>>>>>******L ", error)
        return res.status(500).json({
            EM: "lỗi từ server",
            EC: "-1",
            DT:"",
        })
    }
}
const readAdmin =async(req,res)=>{
 
    try {
        if(req.query.page && req.query.limit){
            let page = req.query.page;
            let limit = req.query.limit;
            let data = await userApiService.getUserWithPagination(+page,+limit);
       
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        })
        }
        else{
        let data = await userApiService.getUserWithPagination();
       
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        })
        }
        
       
        
    } catch (error) {
        console.log(">>>>>>>>>>>>>>>>>>>>******L ", error)
        return res.status(500).json({
            EM: "lỗi từ server",
            EC: "-1",
            DT:"",
        })
    }
}
const updateFunc =async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(">>>>>>>>>>>>>>>>>>>>******L ", error)
        return res.status(500).json({
            EM: "lỗi từ server",
            EC: "-1",
            DT:"",
        })
    }
}
const createFunc =async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(">>>>>>>>>>>>>>>>>>>>******L ", error)
        return res.status(500).json({
            EM: "lỗi từ server",
            EC: "-1",
            DT:"",
        })
    }
}
const deleteFunc =async(req,res)=>{
    try {
        
        let data = await userApiService.deleteUser(req.body.id)
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        })
    } catch (error) {
        console.log(">>>>>>>>>>>>>>>>>>>>******L ", error)
        return res.status(500).json({
            EM: "lỗi từ server",
            EC: "-1",
            DT:"",
        })
    }
}
const getUserAccount = async(req,res) =>{
    return res.status(200).json({
        EM: "OK",
        EC: "0",
        DT:{
                access_token : req.token,
                groupWithRoles: req.user.groupWithRoles,
                email: req.user.email,
                username: req.user.username
            }
    })
}
const countUser = async(req,res)=>{
    try {
        
        let data = await userApiService.count();
        console.log(data)
        return res.status(200).json({
           data
        })
        
        
    } catch (error) {
        console.log(">>>>>>>>>>>>>>>>>>>>******L ", error)
        return res.status(500).json({
            EM: "lỗi từ server",
          
        })
    }
}
module.exports ={
    readFunc,
    updateFunc,
    createFunc,
    deleteFunc,
    readAdmin,
    getUserAccount,countUser
}