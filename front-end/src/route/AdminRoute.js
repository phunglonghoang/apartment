import React  from "react";
import { Route, Redirect } from "react-router-dom";
import {UserContext} from '../context/UserContext'
const AdminRoute = (props)=>{
 
  const {user} = React.useContext(UserContext)
    
    
  if (user && user.isAuthenticated === true ){
    return (
      <>
      <Route path={props.path} component={props.component}/>
      </>
  )
  }else {
    return < Redirect to= '/login'/>
  }
}
export default AdminRoute
