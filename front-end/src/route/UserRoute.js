import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
    Route
  } from "react-router-dom";
const UserRoute = (props)=>{
    const history = useHistory();
    useEffect(()=>{
        let session = sessionStorage.getItem('account');
        if(session){
            history.push("/home")
        }
    },[])
    return (
        <>
        <Route path={props.path} component={props.component}/>
        </>
    )
}
export default UserRoute
