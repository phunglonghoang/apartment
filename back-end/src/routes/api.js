import express from "express";

import apiRegisterController from "../controller/api/apiRegisterController"
import apiLoginController from "../controller/api/apiLoginController"
import usersController from"../controller/users/usersController"
import {checkUserJWT, checkUserPermission} from "../middleWare/JWTActions"
const router = express.Router();



// function checkUser  (req, res, next) {

//     const nonSecurePaths = ['/','/login', '/home'];
//     if (nonSecurePaths.includes(req.path));
//     return next()

// }
const initApiRoutes = (app) => {
   router.all("*",checkUserJWT,checkUserPermission) 
   
    router.post("/register",apiRegisterController.handelRegister);
    router.post("/login", apiLoginController.handelLogin);
    router.get("/user/admin/read", usersController.readAdmin);
    router.get("/user/read", usersController.readFunc);
    router.put("/user/update", usersController.updateFunc);
    router.post("/user/admin/create",usersController.createFunc);
    router.delete("/user/delete", usersController.deleteFunc)
  
    return app.use("/api/v1",router);
}

export default initApiRoutes;