import validator from 'validator';
import customerService from '../../service/customerService'

const getReqCustomer = async(req, res) =>{
    try {
        if (validator.isEmpty(req.body.email) || validator.isEmpty(req.body.name) || validator.isEmpty(req.body.phone) ||validator.isEmpty(req.body.message)){
            return res.status(200).json({
                EM:"lỗi thiếu dữ liệu", 
                EC: '1',
                DT: '',
            })
        }
        if(!validator.isEmail(req.body.email)){
            return res.status(200).json({
                EM:"email không đúng", 
                EC: '1',
                DT: '',
            })
        }
        let data = await customerService.customerRequest(req.body)

        console.log("thong tin",req.body)
     
        return res.status(200).json({
            
            EM: data.EM,
            EC: data.EC,
            DT: '',
        })
    } catch (error) {
        return res.status(500).json({
            EM: "lỗi từ server",
            EC: "-1",
            DT:"",
        })
    }
}
const readContact =async(req,res)=>{
 
   
 
        try {
            if(req.query.page && req.query.limit){
                let page = req.query.page;
                let limit = req.query.limit;
                let data = await customerService.getContactWithPagination(+page,+limit);
           
            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT,
            })
            }
            else{
            let data = await customerService.getContactWithPagination();
           
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
const contactDetails =async(req,res)=>{
    try {
        
        let data = await customerService.detailContact(req.body.id)
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
module.exports= {
    getReqCustomer,readContact,contactDetails
}
