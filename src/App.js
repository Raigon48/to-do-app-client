import React from 'react';
import {Route, Switch } from 'react-router-dom';

import NavBar from './component/Navigation/NavBar';
import LoginPage from './component/Authentication/Login';
import SignUpPage from './component/Authentication/SignUp';


import './App.css';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
        <Switch>
          <Route exact path='/login'><LoginPage/></Route>
          <Route exact path='/signup'><SignUpPage/></Route>
        </Switch>
    </React.Fragment>
     
    
  );
}

export default App;
