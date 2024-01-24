import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoltLightning, faGlobeAfrica } from "@fortawesome/free-solid-svg-icons";

function Intro() {
  const introData = [
    {
      title: "Trustworthy",
      font: faBoltLightning,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus illum magni ad eligendi deleniti quasi delectus sed corporis incidunt eos.",
    },
    {
      title: "Trustworthy",
      font: faBoltLightning,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus illum magni ad eligendi deleniti quasi delectus sed corporis incidunt eos.",
    },
    {
      title: "Trustworthy",
      font: faGlobeAfrica,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus illum magni ad eligendi deleniti quasi delectus sed corporis incidunt eos.",
    },
    {
      title: "Trustworthy",
      font: faBoltLightning,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus illum magni ad eligendi deleniti quasi delectus sed corporis incidunt eos.",
    },
  ];
  return (
    <div className="afrivacx_intros">
      {introData.map((intro, i) => (
        <div className="afrivacx_intro">
          <h4>{intro.title}</h4>
          <div className="font">
            <FontAwesomeIcon icon={intro.font} />
          </div>
          <p>{intro.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Intro;
