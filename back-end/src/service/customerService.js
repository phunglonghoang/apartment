import db from '../models/index'
const customerRequest = async (rawData)=>{
    try {
        await db.Contact.create({
            name: rawData.name,
            email: rawData.email,
            phone: rawData.phone,
            message:rawData.message,
           time:rawData.createdAt
        })
        return {
            EM: 'cảm ơn quý khách đã tìm đến chúng tôi, yêu cầu của quý khách sẽ sớm được trả lời qua email',
            EC: 0
            
        }
    } catch (error) {
        return {
            EM: 'yêu cầu của quý khách chưa được thực thi xin vui lòng thử lại',
            EC: -2
            
        }
    }
        
}
const getAllContact =async()=>{
   
    try {
        
        let users2 = await db.Contact.findAll({
            
            attributes: ["id", "name", "email", "phone", "message"],
           
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

const getContactWithPagination= async(page,limit) =>{
    try {
        let offset = (page -1) * limit;
        const {count, rows} = await db.Contact.findAndCountAll({
            offset: offset,
            limit: limit,
            attributes: ["id", "name", "email", "phone", "message"],
           
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
const detailContact =async(id) =>{
    try {

        let contact = await db.User.findOne({
            where: {id :id}
        })
        if (contact){
           
            return {
                EM: 'lấy thành công contact',
                EC: 0,
                DT: contact
            }
        }
        else{
            return {
                EM: 'contact không tồn tại',
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
module.exports= {
    customerRequest,
    getAllContact,getContactWithPagination,
    detailContact
}