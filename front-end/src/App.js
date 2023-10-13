
import './App.scss';
import { ToastContainer } from 'react-toastify';


import {
  BrowserRouter as Router,
  Switch,
 Route
} from "react-router-dom";


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
              
              <Route path="*">
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
