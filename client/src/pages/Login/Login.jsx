import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { FormInput } from "../../components";
import "./Login.scss";

const Login = (loginF) => {
  const [logins, setLogins] = useState({
    Email: "",
    Password: "",
  });

  const loginform = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
    },
  ];

  const handleLogin = () => {
    loginF.setIsLogin(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setLogins({ ...logins, [e.target.name]: e.target.value });
  };
  console.log(logins);
  return (
    <Modal {...loginF} className="app__login" centered>
      <div className="app__login-container">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          {loginform.map((login) => (
            <FormInput ket={login.id} {...login} value={logins[login.name]} onChange={onChange} />
          ))}
          <button onClick={handleLogin}>Login</button>
        </form>
      </div>
    </Modal>
  );
};

export default Login;
