import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";

import QuickLinks from "../components/QuickLinks";
import Footer from "../components/Footer";

import Emailjs from "../components/Emailjs";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Contact = () => {
  return (
    <>
      <Header title="CONTACT US" a="/contact" />

      <section className="contact">
        <h1>Contact Us</h1>
        <p style={{ fontSize: "1.3rem", color: "grey" }}>
          Do not hesitate to reach out. Just fill in the contact form here and
          we’ll be sure to reply as fast as possible.
        </p>

        <div className="con-con">
          <div className="visit">
            <div style={{ marginBottom: "3rem" }}>
              <h4>Visit our office</h4>
              <p>
                Longbow House, 20 Chiswell Street, London, EC1Y 4TW, United
                Kingdom.
              </p>
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <h4>Message us</h4>
              <a href="https://wa.me/447918134307" style={{ color: "#0d47a1" }}>
                {" "}
                +44 791 8134 307
              </a>{" "}
              <br />
              <a
                href="mailto:Support@britishfx.net"
                style={{ color: "#0d47a1" }}
              >
                Support@britishfx.net
              </a>
            </div>
            <div className="socials">
              <a href="#">
                <XIcon />
              </a>
              <a href="#">
                <LinkedInIcon />
              </a>
              <a href="#">
                <InstagramIcon />
              </a>
              <a href="#">
                <FacebookIcon />
              </a>
              <a href="#">
                <YouTubeIcon />
              </a>
            </div>
          </div>
          <Emailjs />
        </div>
      </section>
      <QuickLinks />
      <Footer />
    </>
  );
};

export default Contact;
