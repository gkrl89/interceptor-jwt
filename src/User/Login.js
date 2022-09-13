import React, { useState } from "react";
import "./userlogin.css";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import customAxios from "./axios";
import UserHome from "./USerHome";

function UserLogin() {
  const [user, setUser] = useState({
    userid: "",
    pwd: "",
  });
  const [success, setSuccess] = useState(false);
  const [userlist, setUserlist] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser(() => {
      return {
        ...user,
        [name]: value,
      };
    });
  };

  const Clicklogin = () => {

    

    customAxios
        .post('/auth/login', { userid : user.userid })
        .then((resp) => {
          console.log('resp data', resp);
          if (resp?.data?.status === 'Successful Login') {
            localStorage.setItem('access_token', resp.data.token);
            localStorage.setItem('refresh_token', resp.data.refreshToken);
            navigate('/USerHome');
          } else {
            alert('Login failed');
          }
        })
        .catch((err) => console.error(err.message));
    }

  return (
    <>
      <div className="header">
        <h1>My Website</h1>
      </div>
      <div className="body">
        <div className="form">
          <Form>
            <Form.Group>
              <Form.Label>User ID</Form.Label>
              <Form.Control
                type="text"
                name="userid"
                value={user.userid}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="pwd"
                value={user.pwd}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
          </Form>
          <div className="mt">
            <Button variant="success" onClick={Clicklogin}>
              Login
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
export default UserLogin;
