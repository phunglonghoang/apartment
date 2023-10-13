require('dotenv').config()
import db from "../models/index"
import bcrypt from 'bcryptjs';
import {getGroupWithRoles} from './JWTService'
import {CreateJWT} from '../middleWare/JWTActions'
const { Op } = require("sequelize");

const salt = bcrypt.genSaltSync(10);
const hashUserPassWord =(userPassword)=>{
    let hashPassWord = bcrypt.hashSync(userPassword, salt);
    return hashPassWord;
}
const checkPassword = (inputPassword, hashPassWord)=> {
   return bcrypt.compareSync(inputPassword, hashPassWord);
}
const handleUserLogin = async(rawData) =>{
    try {
        let user = await db.User.findOne({
            where:{
                [Op.or ]: [
                    {  email: rawData.valueLogin },
                    { phone: rawData.valueLogin,},
                    {username: rawData.valueLogin}
                ]
            }
        })
        if (user){
            
            let isCorrectPassword = checkPassword(rawData.password, user.password);
            if (isCorrectPassword===true){
           
               let groupWithRoles = await getGroupWithRoles(user);
               let payload = {
                email: user.email, 
                groupWithRoles,
                expiresIn : process.env.EXPIRESIN_IN
               }
               let token = CreateJWT(payload)
                return {
                    EM: 'pw oke',
                    EC :'0',
                    DT: {
                        access_token : token,
                        groupWithRoles,
                        email: user.email,
                        username: user.username
                       
                    }
                }
            }
        }
       
           
            return {
                EM:'email/SĐT/username hoặc password không đúng ',
                EC:-2 
            }
        
    
       
    } catch (error) {
        console.log(">>>>> lỗi ", error)
        return {
            EM:'đã xảy ra lỗi',
            EC:-2 
        }
    }
}
module.exports ={
    handleUserLogin
}