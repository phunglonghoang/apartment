
import './App.scss';
import { ToastContainer } from 'react-toastify';


import {
  BrowserRouter as Router,
  Switch,
 Route
} from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';



import AppRoute from './route/AppRoute';


function App() {
 
  return (
    
    <Router>
   <div className='app-container'>
        <Switch>
            {/* <Nav/> */}
              <div className='app-container'>
                <AppRoute/>
              </div>
              <Route exact path="*">
              404 not found
              </Route>
        </Switch>
   </div>
   <ToastContainer
      position="top-center"
      autoClose={1500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
   </Router>
    
  );
}

export default App;
