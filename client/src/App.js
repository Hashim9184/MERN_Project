import React from 'react';
import {Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dash from './components/Dash';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Errorpage from './components/Errorpage';
import './App.css';

const App =()=>{
    return(
        <>
       <Navbar/>

        <Switch>
        <Route exact path = "/">
       <Home/>
       </Route>

       <Route path = "/dash">
       <Dash/>
       </Route>

       <Route path = "/contact">
       <Contact/>
       </Route>

       <Route path = "/login">
       <Login/>
       </Route>

       <Route path = "/signup">
       <Signup/>
       </Route>

        <Route >
            <Errorpage/>
        </Route>
        </Switch>
        </>
    )
}

export default App; 