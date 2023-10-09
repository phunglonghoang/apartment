import  jwt  from "jsonwebtoken"
require("dotenv").config();
const CreateJWT = (payload) => {
 
    let key =process.env.JWT_SECRET;
    let token = null;
    try {
        token = jwt.sign(payload,key );
     
    } catch (error) {
        console.log(error)
    }
    
    console.log("*********************************",token)
    return token
}

const verifyToken = (token) =>{
    let key = process.env.JWT_SECRET;
    let data = null;
    try {

        let decoded = jwt.verify(token, key);
        let data = decoded;
    } catch (error) {
        console.log(err)
    }
    return data;
}

module.exports ={
    CreateJWT,
    verifyToken
}