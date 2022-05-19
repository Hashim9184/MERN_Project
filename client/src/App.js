import React, { useContext, useReducer, createContext } from 'react';
import {Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dash from './components/Dash';
import Contact from './components/Contact';
import Login from './components/Login';
import Logout from './components/Logout'
import Signup from './components/Signup';
import Errorpage from './components/Errorpage';
import './App.css';
import {initialState, reducer} from "../src/reducer/UseReducer"

export const UserContext = createContext();

const Routing = () =>{
return(
    <>
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

   <Route path="/logout">
       <Logout />
   </Route>

    <Route >
        <Errorpage/>
    </Route>
    </Switch>
    </>
)
}

const App =()=>{

    const [state, dispatch] = useReducer(reducer, initialState);

return(

    <>
        <UserContext.Provider value={{state, dispatch}}>
            <Navbar/>
            <Routing/>
        </UserContext.Provider>
    </>
)
}

export default App; 