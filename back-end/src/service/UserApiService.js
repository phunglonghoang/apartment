import { Model, where } from 'sequelize'
import db from '../models/index'
import { Op, literal } from'sequelize';

//đưa hết danh dách lên cho admin 

const getAdminAllUser =async()=>{
   
    try {
        
        let users2 = await db.User.findAll({
            
            attributes: ["id", "username", "email", "firstName", "lastName","birthDay","room", "sex", "phone", "joinDate","groupId"],
            include :{model: db.Group,attributes: ["id", "name"], } ,
            raw :true,
            nest: true
           });
        if (users2 ){
            console.log("checkkkk USER", users2)
            return {
                EM: 'lấy dữ liệu thành công',
                EC: 0,
                DT: users2
            }
        }
        else{
            return {
                EM: 'lấy dữ liệu thành công',
                EC: 0,
                DT: []
            }
        }
    } catch (error) {
        console.log(error)
        return {
            EM: 'lấy dữ liệu không thành công',
            EC: 1,
            DT: []
        }
    }
}

const getUserWithPagination= async(page,limit) =>{
    try {
        let offset = (page -1) * limit;
        const {count, rows} = await db.User.findAndCountAll({
            offset: offset,
            limit: limit,
            attributes: ["id", "username", "email", "firstName", "lastName","birthDay", "sex", "phone", "joinDate","groupId"],
            include :{model: db.Group,attributes: ["id", "name"], } ,
        })
        let totalPages = Math.ceil(count / limit);
        let data = {
                totalRows: count,
                totalPages: totalPages,
                users: rows
        }
       
        return {
            EM: 'lấy dữ liệu thành công',
            EC: 0,
            DT: data
        }
    } catch (error) {
        console.log(error)
        return {
            EM: 'lấy dữ liệu không thành công',
            EC: 1,
            DT: []
        }
    }
}
//tạo mới user (chỉ dùng cho admin)
const createUser =async(data)=> {
    try {
        await db.User.create({

        })
    } catch (error) {
        
    }
}
//sửa user (admin hoặc user chủ phòng)
const updateUser =async (data) =>{
    try {
        let user = await  db.User.findOne(
            {
                where :{id: data.id}
            }

        );
        if (user){
            //update User
            // user.save({

            // })
        }
        else {
            //not found
        }

    } catch (error) {
        
    }

}
// xóa user(chỉ có admin)

const deleteUser =async(id) =>{
    try {

        let user = await db.User.findOne({
            where: {id :id}
        })
        if (user){
            await user.destroy();
            return {
                EM: 'xóa user thành công',
                EC: 0,
                DT: []
            }
        }
        else{
            return {
                EM: 'user không tồn tại',
                EC: 2,
                DT: []
            }
        }
    } catch (error) {
         return {
            EM: 'lấy dữ liệu không thành công',
            EC: 1,
            DT: []
        }
    }
}

const count =async ()=>{
    try {
        let totalUserCount = await db.Member.findAll({
            attributes: [
              [literal('(SELECT COUNT(*) FROM User where groupId =3) + COUNT(*)'), 'totalUser'],
            ],
            
          });
        
          if(totalUserCount){
        
            return {
                
                EM: 'tính số dân cư thành công',
                EC: 0,
                DT: totalUserCount[0].dataValues.totalUser
            }
          }
          else{
            return {
                EM: 'tính số dân cư không thành công',
                EC: -1,
                DT: ''
            }
          }
    } catch (error) {
        return {
            EM: 'tính số dân cư không thành công',
            EC: -1,
            DT: ''
        }
    }
    
    }


// const userDetail = async(firstName, lastName, username, room,birthDay ) =>{
//     try {
        
//         let userid= await db.User.findOne(
//             { firstName:firstName, username:username, room:room, lastName:lastName, birthDay:birthDay },
//             {where: {id:id}}
//            );
//         if (userid){
//             console.log("checkkkk USER", users)
//             return {
//                 EM: 'lấy dữ liệu thành công',
//                 EC: 0,
//                 DT: users
//             }
//         }
//         else{
//             return {
//                 EM: 'lấy dữ liệu thành công',
//                 EC: 0,
//                 DT: []
//             }
//         }
//     } catch (error) {
//         console.log(error)
//         return {
//             EM: 'lấy dữ liệu không thành công',
//             EC: 1,
//             DT: []
//         }
//     }
// }
module.exports = {
 
    createUser,
    updateUser,
    deleteUser,
  
    getAdminAllUser,
    getUserWithPagination, count
}


