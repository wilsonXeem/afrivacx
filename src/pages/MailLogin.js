import React, { useState, useContext, useEffect } from "react";

import Logo from "../data/afrivacx.png";
import Loader from "../data/loader.gif";

import GoogleTrans from "../components/GoogleTrans";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

import { ValueContext } from "../Context";

const Login = () => {
  const { setUser } = useContext(ValueContext);
  const { mail } = useParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [load, setLoad] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch(
      `https://coherent-alike-patient.glitch.me/user/verifyaccount/${mail}`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    setEmail(mail);
  }, [mail]);

  const handleSubmit = () => {
    setLoad(!load);
    fetch("https://coherent-alike-patient.glitch.me/user/signin", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.type === "user") {
          setUser(json.user);
          setLoad(!load);
          navigate("/dashboard/");
        } else if (json.type === "verify") {
          setLoad(false);
          setShow(!show);
        } else if (json.type === "email") {
          setLoad(false);
          setEmailErr(!emailErr);
        } else if (json.type === "password") {
          setLoad(false);
          setPassErr(!passErr);
        }
      });
  };

  return (
    <section className="login">
      <div className="login-img"></div>
      <div className="log">
        <a className="navbar-brand" href="/">
          <img
            src={Logo}
            alt="britishfx.org"
            width={70}
            style={{ margin: "0px" }}
            className="logoss"
          />
          <span
            style={{
              color: "#1F51FF",
              fontWeight: "bolder",
              fontSize: "35px",
              textShadow: "2px 0px 2px black",
            }}
          >
            British
          </span>
          <span
            style={{
              color: "#fff",
              fontWeight: "bolder",
              fontSize: "35px",
              textShadow: "2px 4px 4px #1F51FF",
            }}
          >
            FX
          </span>
        </a>
        <GoogleTrans />
        <div style={{ margin: "1rem 0px 2rem" }}>
          <p style={{ fontSize: "1.5rem", margin: "0px" }}>
            Log into your account
          </p>
          <p style={{ fontSize: "0.8rem", margin: "0px" }}>
            Don't have an account? <a href="/signup">Register here</a>
          </p>
        </div>

        <div>
          {show && (
            <i style={{ color: "red", fontSize: "small" }}>
              Account not yet verified. Kindly check your mail to verify
            </i>
          )}
          {load ? (
            <div className="loader">
              <img src={Loader} alt="loader" />
            </div>
          ) : (
            <div>
              {emailErr && (
                <i style={{ color: "red", fontSize: "small" }}>
                  Incorrect email
                </i>
              )}
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setEmailErr(false)}
                />
                <InputGroup.Text id="basic-addon1">
                  <FontAwesomeIcon icon={faUser} />
                </InputGroup.Text>
              </InputGroup>
              {passErr && (
                <i style={{ color: "red", fontSize: "small" }}>
                  Incorrect password
                </i>
              )}
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setPassErr(false)}
                />
                <InputGroup.Text id="basic-addon1">
                  <FontAwesomeIcon icon={faLock} />
                </InputGroup.Text>
              </InputGroup>
              <div className="forgot">
                <Form.Check type="radio" label="Remember me" />
                <a href="/password-reset" style={{ paddingLeft: "1rem" }}>
                  <small>Forgot Password?</small>
                </a>
              </div>
              <button className="sin" onClick={handleSubmit}>
                Sign in
              </button>
              {/* <div>
            <hr />
            Or
            <hr />
          </div>
          <button className="ssn" onClick={() => navigate("/signup")}>
            <FontAwesomeIcon icon={faUserPlus} /> Create Free Account
          </button> */}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
