import { useState } from "react";
import React from 'react'
import "./Login.css"
import { useAuth } from "host/AuthProvider";
import { useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";
// import LoginLeftBg from "./assets/img/login-left-bg.jpg";
// import KshemaLogo from "./assets/img/kshema_logo.svg";
import {Input, Button, Col, Container, Form, Label, Row } from "reactstrap";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate("/app1");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    // <form onSubmit={handleLogin}>
      
      
    
      <Container className="p-0 m-0 login-parent">
      <Row className="p-0 m-0">
        <Col md={6} className="p-0 m-0 position-relative">
          <div className="position-relative image-parent-height">
            {/* <Image
              src={LoginLeftBg}
              alt="img"
              className="opacity-52  image-parent w-100"
            /> */}
            <div className="bg-overlay position-absolute top-0 start-0 w-100 image-parent-height" />
            <div className="position-absolute welcome-parent">
              <div className="text-left">
                <Label className="welcome">Welcome to</Label>
                <Label className="fieldAssist mt-n25">Kshema Portal !!!</Label>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6} className="p-3 m-0">
          <div className="m-5">
            {/* <Image src={KshemaLogo} alt="img" className="logo" /> */}
            <Form>
            <Input type="text" placeholder="Username" className="mt-5" onChange={(e) => setUsername(e.target.value)} required />
            <Input type="password" placeholder="Password" className="mt-5" onChange={(e) => setPassword(e.target.value)} required />
              <Button
                variant="success"
                size="lg"
                className="login-button"
                onClick={handleLogin}
              >
                Login
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
      
    </Container>
    
    
    // </form>



  );
};

export default Login;