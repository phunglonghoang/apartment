import express from "express";
import configViewEngine from "./config/viewEngine";
import configCors from "./config/cors";
import bodyParser from "body-parser";
import initWebRoutes from "./routes/web";
import initApiRoutes from "./routes/api"
import cookieParser from 'cookie-parser'
require ("dotenv").config();
// import connection from "./config/connectDB";


const app = express();
const PORT= process.env.PORT || 3001;
configCors(app);
configViewEngine(app);


//config body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));


//cookie 

app.use(cookieParser())

// connection();

initWebRoutes(app);
initApiRoutes(app);



app.use((req,res)=>{
    return res.send('404 not found')
})
app.listen(PORT, ()=>{
    console.log(">>apartment-backend in running is localhost:"+PORT);
})
