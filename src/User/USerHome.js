import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./userlogin.css";
import UserLogin from "./Login";
import { Button } from "react-bootstrap";
import { useNavigate, useResolvedPath } from "react-router-dom";
import customAxios from "./axios";
import { useEffect , useState } from "react"; 
import {Table} from "react-bootstrap";



export default function UserHome() {

  const [details, setDetails] = useState([]);

  const navigate= useNavigate();

  const ClickShow = () =>{

    customAxios
      .get('/auth/users')
      .then((response) => {
        console.log('response', response)
        setDetails(response.data.data.users);
        
      })
      .catch((err) => console.error(err.message))
    }
     
     

  const ClickLogout = () =>{

    localStorage.clear();

    navigate("/login");
  }
 
  

  return (
    <>
      <div className="header">
        <h1>My Website</h1>
        <Button type = 'submit ' variant="primary" onClick={ClickLogout}>Logout</Button>
           </div>
      <div className="table">
      <Button type = 'submit ' variant="primary" onClick={ClickShow}>Show</Button>
        <h2 style= {{textAlign:"left"}}>Product Dashboard</h2>

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>S.No</th>
              <th>userid</th>
              <th>pwd</th>
              
            </tr>
          </thead>
          <tbody>
            {details.map((user, id) => {
           
              return (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{user.userid}</td>
                  <td>{user.pwd}</td>
          
                  </tr>
              );
            })}
          </tbody>
        </Table>
      </div>

      </>
  )
}

      