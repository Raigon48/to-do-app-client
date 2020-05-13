import React from 'react';
import {Route, Switch } from 'react-router-dom';

import NavBar from './component/Navigation/NavBar';
import Login from './component/Login';
import SignUp from './component/SignUp';


function App() {
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route exact path="/login" ><Login/></Route>
        <Route exact path='/signUp'><SignUp/></Route>
      </Switch>
    </div>
     
    
  );
}

export default App;
