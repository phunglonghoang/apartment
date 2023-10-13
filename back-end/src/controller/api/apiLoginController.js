import loginService from '../../service/loginService'
const handelLogin =async(req, res)=>{
try {
    console.log(">>>>>> check api login", req.body);
    let data = await loginService.handleUserLogin(req.body)
    //set cookie
    if(data && data.DT && data.DT.access_token){
        res.cookie("jwt", data.DT.access_token, {httpOnly:true, maxAge : 60*60*1000})
    }
   
   
    return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
        
    })
   
} catch (error) {
    return res.status(500).json({
        EM: "lỗi từ server",
        EC: "-1",
        DT:"",
    })
}
    
}

module.exports ={
    handelLogin
}