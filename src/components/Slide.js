import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScroll,
  // faMessage,
  // faPhone,
} from "@fortawesome/free-solid-svg-icons";
// import GoogleTrans from "./GoogleTrans";

import Logo from "../data/afrivacx.png";

const Slide = () => {
  const [navBg, setNavBg] = useState(false);

  const changeNavBg = () => {
    window.scrollY >= 700 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);
  return (
    <header className="slide">
      <nav
        class="navbar navbar-expand-lg navbar-light scrolling-navbar fixed-top shadow-0"
        style={{ padding: "0px", backgroundColor: navBg && "white" }}
      >
        <div class="container">
          <a class="navbar-brand" href="/">
            <img
              src={Logo}
              alt="britishfx.org"
              width={150}
              style={{ margin: "0px" }}
              className="logoss"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ color: navBg ? "white" : "black" }}
          >
            <i class="fas fa-bars"></i>
          </button>
          <div
            class="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ backgroundColor: navBg && "white" }}
          >
            <div style={{ width: "5rem" }}></div>
            <ul class="navbar-nav me-auto">
              <li class="nav-item me-3 me-lg-0">
                <a
                  class="nav-link"
                  href="/"
                  style={{
                    color: "#0d47a1",
                    margin: "0px 1rem",
                    textShadow: navBg ? "none" : "0.5px 1px 0px white",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                  }}
                >
                  Home
                </a>
              </li>
              <li class="nav-item me-3 me-lg-0">
                <a
                  class="nav-link"
                  href="/vaccines"
                  style={{
                    color: "#0d47a1",
                    margin: "0px 1rem",
                    textShadow: navBg ? "none" : "0.5px 1px 0px white",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                  }}
                >
                  Vaccines
                </a>
              </li>
              <li class="nav-item me-3 me-lg-0">
                <a
                  class="nav-link"
                  href="/about"
                  style={{
                    color: "#0d47a1",
                    margin: "0px 1rem",
                    textShadow: navBg ? "none" : "0.5px 1px 0px white",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                  }}
                >
                  About
                </a>
              </li>
              <li class="nav-item me-3 me-lg-0">
                <a
                  class="nav-link"
                  href="/events"
                  style={{
                    color: "#0d47a1",
                    margin: "0px 1rem",
                    textShadow: navBg ? "none" : "0.5px 1px 0px white",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                  }}
                >
                  Events
                </a>
              </li>
              <li class="nav-item me-3 me-lg-0">
                <a
                  class="nav-link"
                  href="/contact"
                  style={{
                    color: "#0d47a1",
                    margin: "0px 1rem",
                    textShadow: navBg ? "none" : "0.5px 1px 0px white",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                  }}
                >
                  Contact
                </a>
              </li>
              <li class="nav-item me-3 me-lg-0">
                <a
                  class="nav-link"
                  href="/board"
                  style={{
                    color: "#0d47a1",
                    margin: "0px 1rem",
                    textShadow: navBg ? "none" : "0.5px 1px 0px white",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                  }}
                >
                  Board
                </a>
              </li>
              <div className="liner"></div>
              {/* <li class="nav-item me-3 me-lg-0">
                <a
                  class="nav-link"
                  href="login"
                  style={{
                    color: "white",
                    margin: "0px 0.5rem",
                    background: "none",
                    border: "none",
                    width: "7rem",
                    height: "2.5rem",
                    borderRadius: "2rem",
                    textShadow: "1px 1px 1px black",
                  }}
                >
                  <i
                    class="fa-solid fa-circle-user"
                    style={{ marginRight: "0.7rem" }}
                  ></i>
                  Log in
                </a>
              </li> */}
              <li class="nav-item me-3 me-lg-0">
                <a
                  class="nav-link"
                  href="/signup"
                  className="sign_up"
                >
                  Sign up
                </a>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </nav>
      <section>
        <div id="intro" class="bg-image vh-100">
          <Carousel
            autoPlay={true}
            autoFocus={true}
            infiniteLoop={true}
            interval={5000}
            showArrows={false}
            transitionTime={1000}
          >
            <div className="slide1">
              {/* <div className="div">
                <div className="language">
                  <div>
                    <small>
                      We better protect ourselves from risk thanks to
                      international trade and the amount of diversification
                      we've achieved.
                    </small>
                    <a href="https://wa.me/447918134307">
                      <FontAwesomeIcon icon={faPhone} /> +447918134307
                    </a>
                    <a href="/contact">
                      <FontAwesomeIcon icon={faMessage} /> LIVE CHAT
                    </a>
                  </div>
                  <div className="google">
                    <GoogleTrans />
                  </div>
                </div>
              </div> */}
              <div className="content">
                <div className="con">
                  <h1>Welcome to AfriVacx</h1>
                  <p>Bridging the gap, saving lifes</p>
                </div>
                <div className="tent">
                  <button className="btn">
                    <FontAwesomeIcon
                      icon={faScroll}
                      style={{ marginRight: "0.5rem" }}
                    />
                    <a href="/signup">Join us now</a>
                  </button>
                </div>
              </div>
            </div>
            <div className="slide2">
              {/* <div className="div">
                <div className="language">
                  <div>
                    <small>
                      We better protect ourselves from risk thanks to
                      international trade and the amount of diversification
                      we've achieved.
                    </small>
                    <a href="https://wa.me/447918134307">
                      <FontAwesomeIcon icon={faPhone} /> +447918134307
                    </a>
                    <a href="/contact">
                      <FontAwesomeIcon icon={faMessage} /> LIVE CHAT
                    </a>
                  </div>
                  <div className="google">
                    <div id="google_translate_element"></div>
                  </div>
                </div>
              </div> */}
              <div className="content">
                <div className="con">
                  <h1>Empowering Communities Through Vaccination</h1>
                  <p>
                    At AfriVacx, we believe in empowering communities through
                    vaccination, education, and sustainable solutions that
                    address the root causes of vaccine inequity.
                  </p>
                </div>
                <div className="tent">
                  <button className="btn">
                    <FontAwesomeIcon
                      icon={faScroll}
                      style={{ marginRight: "0.5rem" }}
                    />
                    <a href="/signup">Join us now</a>
                  </button>
                </div>
              </div>
            </div>
            <div className="slide3">
              {/* <div className="div">
                <div className="language">
                  <div>
                    <small>
                      We better protect ourselves from risk thanks to
                      international trade and the amount of diversification
                      we've achieved.
                    </small>
                    <a href="https://wa.me/447918134307">
                      <FontAwesomeIcon icon={faPhone} /> +447918134307
                    </a>
                    <a href="/contact">
                      <FontAwesomeIcon icon={faMessage} /> LIVE CHAT
                    </a>
                  </div>
                  <div className="google">
                    <div id="google_translate_element"></div>
                  </div>
                </div>
              </div> */}
              <div className="content">
                <div className="con">
                  <h1>Partner With Us to Make a Difference</h1>
                  <p>
                    Join us in our mission to make a difference by partnering
                    with AfriVacx. Together, we can amplify our impact and
                    create positive change that will benefit generations to
                    come.
                  </p>
                </div>
                <div className="tent">
                  <button className="btn">
                    <FontAwesomeIcon
                      icon={faScroll}
                      style={{ marginRight: "0.5rem" }}
                    />
                    <a href="/signup">Join us now</a>
                  </button>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </section>
    </header>
  );
};

export default Slide;
