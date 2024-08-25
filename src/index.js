import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard'
import Login from './components/Profile/Login'
import Register from './components/Profile/Register';
import ActiveRide from './components/Dashboard/ActiveRides'
import History from './components/Dashboard/History'
import NewRide from './components/Dashboard/NewRide'
import Setting from './components/Profile/Setting' 
// import { UserProvider } from './contexts/UserContext';
import NewRideForm from './components/Dashboard/NewRideForm';
import QRForm from './components/Dashboard/QRForm';
import Vehicle from './components/Dashboard/Vehicles';
import ForgotPassword from './components/Profile/ForgotPassword';

import store from './store/store';
import { Provider } from 'react-redux';
import ProtectedRoute from './components/ProtectedRoute'

const router = createBrowserRouter(
  createRoutesFromElements( 
      < >
         <Route exact path='/' element={<Login/>} />
         <Route exact path='/forgotPassword' element={<ForgotPassword/>}/>
         <Route exact path='/register' element={<Register/>} />
         <Route exact path='/dashboard' element={<ProtectedRoute element={<Dashboard/>}/>}> 
               <Route path='' element={<Navigate to={'activeRide'}/>}/>
               <Route path='activeRide' element={<ActiveRide/>}/>
               <Route path='history' element={<History/>}/>
               <Route path='newRide' element={<NewRide/>}>
                  <Route path='' element={<Navigate to={'newrideform'}/>}/>
                  <Route path='newrideform' element={<NewRideForm/>}/>
                  <Route path='qrform' element={<QRForm/>}/>
               </Route>
               <Route path='vehicles' element={<Vehicle/>}/>
               <Route path='setting' element={<Setting/>}/>
         </Route>
      </ >
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <Provider store={store} >
     <RouterProvider router={router}/>
  </Provider> 
);
 