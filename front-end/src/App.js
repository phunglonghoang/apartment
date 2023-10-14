
import './App.scss';
import { ToastContainer } from 'react-toastify';
import { ProgressBar } from 'react-loader-spinner'

import {
  BrowserRouter as Router,
  Switch,
 Route
} from "react-router-dom";


import AppRoute from './route/AppRoute';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';

import Nav from './components/Navigation/Nav';

function App() {
 const {user}= useContext(UserContext)
  return (
    <Router>
   <div className='app-container'>
        <Switch>

            {user && user.isLoading ?
              <div className='loading'>
              <ProgressBar
                height="80"
                width="80"
                ariaLabel="progress-bar-loading"
                wrapperStyle={{}}
                wrapperClass="progress-bar-wrapper"
                borderColor = '#F4442E'
                barColor = '#51E5FF'
              />
              <label>loading data.....</label>
              </div>
              
              :
              <>
              <div className='app-header'>
                <Nav/>
              </div>
              <div className='app-container'>
                <AppRoute/>
              </div>
              </>
            }
            
              
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
