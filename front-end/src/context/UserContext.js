import React , {useState, useEffect} from 'react'
import {getUserAccount} from '../service/callApiService/callApiService'; 

const UserContext = React.createContext(null);

const UserProvider = ({children}) =>{
 const userDefault ={
  isLoading: true,
  isAuthenticated:false,
  token:"",
  account: {}
 }
   // User is the name of the "data" that gets stored in context
  const [user, setUser] = useState(userDefault);

  // Login updates the user data with a name parameter
  const loginContext = (userData) => {
    setUser({...userData,isLoading:false});
  };

  // Logout updates the user data to default
  const logoutContext = () => {
    setUser({...userDefault,isLoading:false});
  };
  const fetchUser = async() =>{

    let response = await getUserAccount();
    if (response && response.EC ===0){
      let groupWithRoles= response.DT.groupWithRoles;
      let username = response.DT.username;
      let email = response.DT.email;
      let token = response.DT.access_token;
      let data = {
          isAuthenticated: true,
          token: token,
          account: {
              groupWithRoles,
              email,
              username

          },
        isLoading:false
      }
     
        setUser(data);
     
       
     
    }
    else{
      setUser({...userDefault, isLoading: false})
    }
  }
  
  useEffect(()=>{
  
    if (  window.location.pathname !=="/home" && 
    window.location.pathname !=="/login" && window.location.pathname !=="/about"
    && window.location.pathname !=="/chung-chi" && window.location.pathname !=="/can-ho" && window.location.pathname !=="/cac-mau-don" && window.location.pathname !=="/lien-he"
    &&window.location.pathname !=="/noi-quy-website" &&window.location.pathname !=="/chinh-sach-bao-mat"){
    fetchUser()
    }else{
      setUser({...user, isLoading:false})
    }


  },[])

  return (
    <UserContext.Provider value={{ user, loginContext, logoutContext }}>
      {children}
    </UserContext.Provider>
  );
}
export {UserProvider,UserContext,};