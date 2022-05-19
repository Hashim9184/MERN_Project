import React from "react";
import axios from "axios";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";  
import {deleteStudent} from '../Api/Api'

class Dash extends React.Component {
  state = {
    users: [],
  }; 

  componentDidMount = () => {
    this.getBlogPost();
  };

  getBlogPost = () => {
    axios
      .get("/api")
      .then((response) => {
        const data = response.data;
        this.setState({ users: data });
        console.log("Data has been recieved");
        console.log(data);
      })
      .catch((err) => {
          console.log(err)
        alert("Error retriving data");
      });
  };
  displayLogPost = (users) => {
    if (!users.lenght) return null;
  };

  
  render() {

    const handleAccept =() =>{
      console.log("you clicked it")
    }

    const handleDecline = async _id => {
      deleteStudent(_id)
      clerData();
    };
  


    const { users } = this.state;
    return (
      <form>
      <div className="das">
        {users.map((user, index) => (
          <div key={index}>
            <div className="container">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{user._id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <button onClick={handleAccept}>Accept</button>
                    <button onClick={handleDecline}>Decline</button>
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        ))}
      </div>
      </form>
    );
  }
}
export default Dash;
