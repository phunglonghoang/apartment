import {Switch, Route,} from "react-router-dom";
import Login from '../components/Login/Login';
import Home  from '../views/Home/Home';
import Register from '../components/register/register';

import PrivateRoute from "./PrivateRoute";

import Userdt from "../views/userdt/userdt";
import UserRoute from "./UserRoute";

import About  from '../views/About/About';
import Chungchi from '../views/Chungchi/Chungchi';
import Chinhsachbaomat from '../views/Chinhsachbaomat/Chinhsachbaomat';
import NoiquyWebsite from '../views/NoiquyWebsite/NoiquyWebsite';
import Lienhe from '../views/Lienhe/Lienhe';
import Canho from '../views/Canho/Canho';
import Nav from '../components/Navigation/Nav';

import Footer from '../components/Navigation/Footer';
import Maudon from '../views/Maudon/Maudon';
import AllUser from "../views/AllUser/AllUser";
import Navbar from "../components/Admin/Navbar";
import Form from "../components/Admin/Form";
import Table from "../components/Admin/Table";
import Bar from "../components/Admin/Bar";
import ScrollToTopButton from "../views/scollTop";
import NotFound from "../views/Notfound/NotFound";
import Customer from "../views/Customer/Customer";

const AppRoute = (props) => {
    return(
        <>
                <Switch>
           
                
              <Route path="/Home">
              <Nav/><Home/><Footer/>
              <ScrollToTopButton/>
              </Route>
              <Route path="/cac-mau-don">
              <Nav/><Maudon/><Footer/>
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
              <Route path="/customer">
              <Nav/><Customer/><Footer/>
              </Route>


              <Route path="/chung-chi">
              <Nav/><Chungchi/><Footer/>
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
              <Route path="/tin-tuc">
              <Nav/><Canho/><Footer/>
              </Route>
              
              <Route path="/admin">
              <Nav/><AllUser/><Footer/>
              </Route>
              
                  <UserRoute path="/login" component={Login}/>
                  
                  <Route>
                     
                      <PrivateRoute exact  path="/users/details/" component={Userdt}/>
                      <PrivateRoute exact path="/register" component={Register}/>
                      <Footer/>
                  </Route>
                 
                  <Route path="/">
                  <Nav/>
                  <Home/>
                    </Route>
                    <Route path="*">
              <Nav/><NotFound/><Footer/>
              </Route>
                </Switch>


            
        </>
    )
    
}
export default AppRoute