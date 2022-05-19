import React, { useContext, useState } from 'react';
import loginpic from "./Images/loginpic.png";
import { NavLink, useHistory } from 'react-router-dom';
import { UserContext } from '../App';

const Login = () =>{

    const {state, dispatch} = useContext(UserContext);

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] =  useState('');

    const handleChange = (e) =>{
        if(email){
         setEmail(e.target.value)
        }else{
         setUsername(e.target.value)
        }
    }
    const loginUser = async (e) =>{
        e.preventDefault();

       const res = await fetch('/signin', {
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify({
                username,
                email,
                password
            })
       });

       const data = res.json();

       if(res.status === 400 || !data){
           window.alert("Invalid Credential");
       }else{
        dispatch({type:"USER", payload: true})
           window.alert("Login Succesfull");
           history.push("/")
       }

    }

    return(
        <>
         <section className="signin">
           <div className="container mt-5">
                <div className="signin-content">
                    <div className="signin-form">
                        <div className="form-title">Login</div>
                        <form method="POST" className="login-form" id="register-form">
                            <div className="form-group">
                                <label htmlFor="username and email">
                                <img src="https://img.icons8.com/ios-glyphs/20/000000/employee-card.png"/>                               
                                </label>
                                
                                <input type="text" name="username"  id="username" autoComplete="off"
                                    value={email || username}
                                    onChange={handleChange}
                                 placeholder="Username/Email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">
                                <img src="https://img.icons8.com/ios-glyphs/20/000000/password--v2.png"/>                                 
                                </label>
                                
                                <input type="text" name="password"  id="password" autoComplete="off"
                                    value={password}
                                    onChange={(e)=> setPassword(e.target.value)}
                                 placeholder="Password" />
                            </div>
                            <button type="submit" value="Log In" onClick={loginUser} name="submit" >Login</button>
                        </form>
                    </div>

                        <div className="signin-image">
                            <figure>
                                <img src={loginpic}   alt="registration pic"/>
                            </figure>
                            <NavLink to="/signup" className="signin-image-link">Creat a account</NavLink>
                        </div>

                </div>
           </div>
       </section>
        </>
    )
}

export default Login;