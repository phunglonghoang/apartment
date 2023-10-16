import db from '../models/index'
const customerRequest = async (rawData)=>{
    try {
        await db.Contact.create({
            name: rawData.name,
            email: rawData.email,
            phone: rawData.phone,
            message:rawData.message,
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
module.exports= {
    customerRequest
}