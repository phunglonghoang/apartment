import React , { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Route} from "react-router-dom";
  import {UserContext} from '../context/UserContext'
const PrivateRoute = (props)=>{
    const history = useHistory();
    const {user} = React.useContext(UserContext)
    useEffect(()=>{
      console.log("check context user", user)
        let session = sessionStorage.getItem('account');
    if (!session){
      history.push("/login")
    }
    },[])
    return (
        <>
        <Route path={props.path} component={props.component}/>
        </>
    )
}
export default PrivateRoute
