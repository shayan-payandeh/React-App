import React from 'react';
import './App.css';
import {Route, Redirect, Switch} from 'react-router-dom'
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error'
import Navbar from './component/Navbar';
import Adminstrator from  './component/panel/Adminstrator';


function App() {

  return (
    <React.Fragment>
      <Navbar />
      
      <main>
        <Switch>
          <Route path = '/home' component = {Home} ></Route>
          <Redirect from = '/' exact to = '/home'/>
          <Route exact path = '/rooms' component = {Rooms} ></Route>
          <Route exact  path = '/rooms/:slug' component = {SingleRoom} ></Route>
          <Route exact path ='/admin' component ={Adminstrator}></Route>
          <Route  component = {Error} ></Route>
          
        </Switch>
      </main>

    </React.Fragment>
  );
}

export default App;
