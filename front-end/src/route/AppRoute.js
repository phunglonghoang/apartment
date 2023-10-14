import {
   
    Switch,
    Route,
  } from "react-router-dom";
import Login from '../components/Login/Login';
import Home  from '../views/Home/Home';
import Register from '../components/register/register';

import PrivateRoute from "./PrivateRoute";
import ScrollToTopButton from "../views/scollTop";

import Userdt from "../views/userdt/userdt";
import UserRoute from "./UserRoute";

import About  from '../views/About/About';
import Chungchi from '../views/Chungchi/Chungchi';
import Chinhsachbaomat from '../views/Chinhsachbaomat/Chinhsachbaomat';
import NoiquyWebsite from '../views/NoiquyWebsite/NoiquyWebsite';
import Lienhe from '../views/Lienhe/Lienhe';
import Canho from '../views/Canho/Canho';
import Nav from '../components/Navigation/Nav';
import NotFound from "../views/Notfound/NotFound";

import Footer from '../components/Navigation/Footer';
import Maudon from '../views/Maudon/Maudon';
import AllUser from "../views/AllUser/AllUser";
import Navbar from "../components/Admin/Navbar";
import Form from "../components/Admin/Form";
import Table from "../components/Admin/Table";
import Bar from "../components/Admin/Bar";


const AppRoute = (props) => {
    return(
        <>
                <Switch>
           
            {/* <Route  path="/" >
                <Home/>
            </Route> */}
              <Route exact path="/">
              <Nav/><Home/><Footer/><ScrollToTopButton/>
              </Route>

              <Route path="/Admin">
              <Navbar/>
              <Bar/>
              </Route>
              <Route path="/form">
              <Navbar/>
              <Bar/>
              <Form/>
              </Route>
              <Route path="/table">
              <Navbar/>
              <Bar/>
              <Table/>
              </Route>


              <Route path="/chung-chi">
              <Nav/><Chungchi/><Footer/>
              </Route>

              <Route path="/cac-mau-don">
              <Nav/><Maudon/><Footer/>
              </Route>

              <Route path="/chinh-sach-bao-mat">
              <Nav/><Chinhsachbaomat/><Footer/>
              </Route>
              <Route path="/noi-quy-website">
              <Nav/><NoiquyWebsite/><Footer/>
              </Route>
              <Route path="/about">
              <Nav/><About/><Footer/>
              </Route>
              <Route path="/lien-he">
              <Nav/><Lienhe/><Footer/>
              </Route>
              
              <Route path="/can-ho">
              <Nav/><Canho/><Footer/>
              </Route>

              <Route path="*">
              <Nav/><NotFound/><Footer/>
              </Route>

              <Route path="/user">
              <Nav/><AllUser/><Footer/>
              </Route>
              
                  <UserRoute path="/login" component={Login}/>
                  
                  <Route>
                      <Nav/>
                      <PrivateRoute   path="/users/details/" component={Userdt}/>
                      <PrivateRoute path="/Register" component={Register}/>
                      <Footer/>
                  </Route>
                   
                    
                  
                    
                </Switch>
        </>
    )
    
}
export default AppRoute