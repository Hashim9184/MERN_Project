import React from "react";
import { NavLink } from "react-router-dom";
import errorpic from './Images/errorpic.png'

const Errorpage = () =>{
    return(
        <>
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>404</h1>
                </div>
                <h2>We are sorry page not found</h2>
                <p className="mb-5">
                    The page you are looking for might have been removed had its name changed or its temporarily unavailable.
                </p>
                <span className="spanhome"><NavLink className="backhome" to="/">Back to HomePage</NavLink></span>
            </div>
            <div className="error-img">
                            <figure>
                                <img src={errorpic}   alt="error pic"/>
                            </figure>
                        </div>
        </div>
        </>
    )
}

export default Errorpage;