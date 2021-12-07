import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import signpic from "./Images/signpic.png";
import "../App.css";

const Signup = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { fname, lname, username, email, phone, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname,
        lname,
        username,
        email,
        phone,
        password,
        cpassword,
      }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert(" Registration successfull");
      console.log(" Registration successfull");

      history.push("/login");
    }
  };

  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <div className="form-title">Sign up</div>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="fname">
                    <img src="https://img.icons8.com/ios/20/000000/name--v2.png" />
                  </label>

                  <input
                    type="text"
                    name="fname"
                    id="fname"
                    autoComplete="off"
                    value={user.fname}
                    onChange={handleInputs}
                    placeholder="First Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lname">
                    <img src="https://img.icons8.com/ios-filled/20/000000/name.png" />
                  </label>

                  <input
                    type="text"
                    name="lname"
                    id="lname"
                    autoComplete="off"
                    value={user.lname}
                    onChange={handleInputs}
                    placeholder="Last Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="username">
                    <img src="https://img.icons8.com/ios-glyphs/20/000000/employee-card.png" />
                  </label>

                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="off"
                    value={user.username}
                    onChange={handleInputs}
                    placeholder="Username"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/20/000000/external-email-cyber-security-kiranshastry-solid-kiranshastry-1.png" />
                  </label>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInputs}
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">
                    <img src="https://img.icons8.com/ios-filled/20/000000/apple-phone.png" />
                  </label>

                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleInputs}
                    placeholder="Contact No"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <img src="https://img.icons8.com/ios-glyphs/20/000000/password--v2.png" />
                  </label>

                  <input
                    type="text"
                    name="password"
                    id="password"
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInputs}
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cpassword">
                    <img src="https://img.icons8.com/material-outlined/20/000000/password.png" />
                  </label>

                  <input
                    type="text"
                    name="cpassword"
                    id="cpassword"
                    autoComplete="off"
                    value={user.cpassword}
                    onChange={handleInputs}
                    placeholder="Confirm Password"
                  />
                </div>
                <button
                  type="submit"
                  name="submit"
                  value="register"
                  onClick={PostData}
                >
                  Register
                </button>
              </form>
            </div>

            <div className="signup-image">
              <figure>
                <img src={signpic} alt="registration pic" />
              </figure>
              <NavLink to="/login" className="signup-image-link">
                Already Ragistered?
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
