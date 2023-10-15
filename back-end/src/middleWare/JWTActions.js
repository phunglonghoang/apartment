import jwt from 'jsonwebtoken';
require("dotenv").config();


const nonSecurePaths = ['/logout','/login',  ];
  
    
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
   let decoded =null;
    try {

         decoded = jwt.verify(token, key,{  expiresIn : process.env.EXPIRESIN_IN,});
       
    } catch (error) {
        console.log(error)
        
    }
   
    return decoded
}
const extractToken =(req)=> {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    } 
    return null;
}
//check token
const checkUserJWT = (req, res, next) =>{
    if (nonSecurePaths.includes(req.path)) return next();
    let cookies = req.cookies;
    const tokenHeader =  extractToken(req);
    if ((cookies && cookies.jwt) || tokenHeader)
    {
     
        let token =cookies && cookies.jwt? cookies.jwt:tokenHeader
        let decoded = verifyToken(token);
        if (decoded){
            req.user = decoded;
            req.token = token;
            next();
        }
        else {
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
    if (nonSecurePaths.includes(req.path) || req.path ==='/account') return next();
    if (req.user){
        let email = req.user.email;
        let roles = req.user.groupWithRoles.Roles;
        
        let currentUrl= req.path;
        if (!roles || roles.length===0){
            return res.status(403).json({
                EC: -1,
                EM: '',
                DT: `bạn không có quyền để vào trang này`,
            })
        }
        let canAccess = roles.some(item => item.url === currentUrl)
        if (canAccess === true  ){
            next();
        }
        else{
            return res.status(403).json({
                EC: -1,
                EM: '',
                DT: `not found  the user`,
            })
        }
    }else {
        return res.status(401).json({
            EC: -1,
            EM: '',
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