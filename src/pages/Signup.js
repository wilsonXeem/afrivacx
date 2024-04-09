import React, { useState } from "react";
import Logo from "../data/afrivacx.png";
import Loader from "../data/loader.gif";

import GoogleTrans from "../components/GoogleTrans";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser, faEye } from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";

import naijaStates from "naija-state-local-government";

// import { useNavigate } from "react-router-dom";

const Signup = () => {
  // const navigate = useNavigate();
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("");
  const [position, setPosition] = useState("");
  const [title, setTitle] = useState("");
  const [zone, setZone] = useState("");
  const [state, setState] = useState("");
  const [lga, setLga] = useState("");
  const [lgaList, setLgaList] = useState([]);
  const [load, setLoad] = useState(false);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [type1, setType1] = useState(false);
  const [type2, setType2] = useState(false);
  const [message, setMessage] = useState("");
  const [err, setErr] = useState("");
  const [shows, setShows] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const [errorMessage, setErrorMessage] = useState("");

  let file;
  const imageChange = (e) => {
    if (e.target.files) {
      file = e.target.files[0];
      setSelectedFile(file);
    }
  };

  const handleSubmit = () => {
    if (firstName === "" && lastName === "" && email === "" && state === "") {
      setShows(!shows);
    } else {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("phoneNumber", phoneNumber)
      formData.append("password", password);
      formData.append("state", state);
      formData.append("address", lga);
      formData.append("zone", zone);
      formData.append("position", position);
      formData.append("title", title);
      formData.append("file", selectedFile);

      // setLoad(!load);
      fetch("http://127.0.0.1:8000/auth/signup", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          // setLoad(!load);
          return response.json();
        })
        .then((res) => {
          console.log(res.error);
          if (res.error === "error") {
            setErr(res.message);
            setLoad(false);
          } else {
            setMessage(res.message);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setState("");
            setLga("");
            setZone("");
            setPhoneNumber('')
            setLoad(!load);
            setShow(!show);
          }
        })
        // .then(() => {
        //   setUsername("");
        //   setEmail("");
        //   setPassword("");
        //   setConpassword("");
        //   setPlan("");
        //   setCountry("");
        //   setLoad(!load);
        //   setShow(!show);
        // })
        .catch((err) => console.log(err));
    }
  };

  return (
    <section className="signup">
      <div className="signup-img"></div>
      <div className="sign">
        <a className="navbar-brand" href="/" style={{ margin: "0px" }}>
          <img
            src={Logo}
            alt="afrivacx.org"
            width={100}
            style={{ marginTop: "0rem" }}
            className="logoss"
          />
        </a>
        <GoogleTrans />
        {show ? (
          <p style={{ padding: "2rem" }}>{message}</p>
        ) : (
          <div>
            {load ? (
              <div className="loader">
                <img src={Loader} alt="loader" />
              </div>
            ) : (
              <div className="fom">
                <InputGroup>
                  {!shows ? (
                    ""
                  ) : (
                    <i
                      style={{
                        textAlign: "start",
                        fontSize: "small",
                        color: "red",
                      }}
                    >
                      Please make sure that all fields are completely filled!
                    </i>
                  )}
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="title (e.g Pharm, Dr)"
                    aria-label="title"
                    aria-describedby="basic-addon1"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="firstName"
                    aria-label="firstName"
                    aria-describedby="basic-addon1"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                  <InputGroup.Text id="basic-addon1">
                    <FontAwesomeIcon icon={faUser} />
                  </InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="lastName"
                    aria-label="lastName"
                    aria-describedby="basic-addon1"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                  <InputGroup.Text id="basic-addon1">
                    <FontAwesomeIcon icon={faUser} />
                  </InputGroup.Text>
                </InputGroup>
                <InputGroup>
                  <i
                    style={{
                      textAlign: "start",
                      fontSize: "small",
                      color: "red",
                    }}
                  >
                    {err}
                  </i>
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="basic-addon1"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setErr("")}
                    required
                  />
                  <InputGroup.Text id="basic-addon1">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Phone Number"
                    aria-label="phone number"
                    aria-describedby="basic-addon1"
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </InputGroup>
                <InputGroup>
                  {errorMessage === "" ? null : (
                    <i
                      style={{
                        fontWeight: "bold",
                        color: errorMessage === "strong!" ? "green" : "red",
                        fontSize: "x-small",
                      }}
                    >
                      {errorMessage}
                    </i>
                  )}
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                    type={type1 ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <InputGroup.Text
                    id="basic-addon1"
                    onClick={() => setType1(!type1)}
                    style={{ cursor: "pointer" }}
                  >
                    <FontAwesomeIcon icon={faEye} />
                  </InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="position"
                    aria-label="position"
                    aria-describedby="basic-addon1"
                    type="text"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    required
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Select
                    aria-label="Default select example"
                    value={zone}
                    onChange={(e) => setZone(e.target.value)}
                  >
                    <option>Zone</option>
                    <option value="north_east">NorthEast</option>
                    <option value="south_east">SouthEast</option>
                    <option value="north_west">NorthWest</option>
                    <option value="south_west">SouthWest</option>
                    <option value="north_central">North Central</option>
                    <option value="south_south">South South</option>
                  </Form.Select>
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Select
                    aria-label="Default select example"
                    value={state}
                    onChange={(e) => {
                      setState(e.target.value);
                      setLgaList(naijaStates.lgas(e.target.value).lgas);
                    }}
                  >
                    <option>State</option>
                    {naijaStates.states().map((state) => (
                      <option value={state}>{state}</option>
                    ))}
                  </Form.Select>
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Select
                    aria-label="Default select example"
                    value={lga}
                    onChange={(e) => {
                      setLga(e.target.value);
                    }}
                  >
                    <option>LGA</option>
                    {state !== "" &&
                      lgaList.map((lga) => <option value={lga}>{lga}</option>)}
                  </Form.Select>
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="title (e.g Pharm, Dr)"
                    aria-label="title"
                    aria-describedby="basic-addon1"
                    type="file"
                    onChange={imageChange}
                    required
                  />
                </InputGroup>
                <button className="sin" onClick={handleSubmit}>
                  Sign up
                </button>
                {/* <div className="or">
              <hr />
              Or
              <hr />
            </div>
            <button className="ssn" onClick={() => navigate("/login")}>
              Login Here
            </button> */}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Signup;
