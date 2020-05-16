import React from 'react';
import {Route, Switch } from 'react-router-dom';

import LoginPage from './component/Authentication/Login';
import SignUpPage from './component/Authentication/SignUp';


import './App.css';
import NavBar from './component/Navigation/NavBar';
import Home from './component/Page/Home';
import Todos from './component/Page/Todos';
import Account from './component/Page/Account';
import Todo from './component/Page/AddToDo';

function App() {
  return (
    <React.Fragment>
        <NavBar/>
        <Switch>
          <Route exact path='/home'><Home/></Route>
          <Route exact path='/todos'><Todos/></Route>
          <Route exact path='/account'><Account/></Route>
          <Route exact path='/login'><LoginPage/></Route>
          <Route exact path='/signup'><SignUpPage/></Route>
          <Route exact path='/todos/create'><Todo/></Route>
        </Switch>
    </React.Fragment>
     
    
  );
}

export default App;
