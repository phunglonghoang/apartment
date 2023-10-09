import db from "../models/index";
const Member = (props) =>{
    const memberById = async(req, res)=>{
        await db.Member
    }
}
export default Member

app.get('/api/me', ensureAuthenticated, function(req, res) {
    User.findById(req.user, function(err, user) {
     res.send(user);
  });
 });