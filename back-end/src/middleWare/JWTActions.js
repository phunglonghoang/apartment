import jwt from 'jsonwebtoken';
require("dotenv").config();


const nonSecurePaths = ['/','/login', '/home'];
  
    
const CreateJWT = (payload) => {
 
    let key =process.env.JWT_SECRET;
    let token = null
    try {
         token = jwt.sign(payload,key );
        console.log("token", token)
      
    } catch (error) {
        console.log(error)
        
    }
    return token 
  
   
}

const verifyToken = (token) =>{
    let key = process.env.JWT_SECRET;
    console.log("key", key)
    try {
       
        let decoded = jwt.verify(token, key);
        return decoded;
    } catch (error) {
        console.log(error)
        return null
    }
    
}

//check token
const checkUserJWT = (req, res, next) =>{
    if (nonSecurePaths.includes(req.path)) return next();
    let cookies = req.cookies;
    if (cookies && cookies.jwt)
    {
     
        let token = cookies.jwt
        let decoded = verifyToken(token);
        if (decoded){
            req.user = decoded;
            next();
        } else {
            console.log("token", token)
            console.log("decoded", decoded)
            return res.status(401).json({
                EM: -1,
                EC: '',
                DT: 'không xác thực được người dùng',
            })
        }
       

    }
    else {
        return res.status(401).json({
            EM: -1,
            EC: '',
            DT: 'không xác thực được người dùng',
        })
    }
    // console.log(cookies)
}

const checkUserPermission = (req,res,next) =>{
    if (nonSecurePaths.includes(req.path)) return next();
    if (req.user){
        let email = req.user.email;
        let roles = req.user.groupWithRoles.Roles;
        console.log(" req.user.groupWithRoles.Roles", req.user.groupWithRoles.Roles)
        let currentUrl= req.path;
        if (!roles || roles.length===0){
            return res.status(403).json({
                EM: -1,
                EC: '',
                DT: `bạn không có quyền để vào trang này`,
            })
        }
        let canAccess = roles.some(item => item.url === currentUrl)
        if (canAccess === true  ){
            next();
        }
        else{
            return res.status(403).json({
                EM: -1,
                EC: '',
                DT: `not found  the user`,
            })
        }
    }else {
        return res.status(401).json({
            EM: -1,
            EC: '',
            DT: 'not found  the user',
        })
    }
}
module.exports ={
    CreateJWT,
    verifyToken,
    checkUserJWT,
    checkUserPermission,
}