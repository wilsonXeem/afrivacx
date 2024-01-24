import React, { useState } from "react";

import Pic1 from "../data/login.jpg";
import Pic2 from "../data/sign.jpeg";

function Info() {
  const [detail1, setDetail1] = useState(true);
  const [detail2, setDetail2] = useState(false);
  const [detail3, setDetail3] = useState(false);
  const [detail4, setDetail4] = useState(false);
  return (
    <div className="afrivacx_info">
      <div className="info_tab">
        <div
          className={detail1 ? "selected_ta" : "tab"}
          onClick={() => {
            setDetail1(true);
            setDetail2(false);
            setDetail3(false);
            setDetail4(false);
          }}
        >
          <p>Who we are</p>
        </div>
        <div
          className={detail2 ? "selected_ta" : "tab"}
          onClick={() => {
            setDetail1(false);
            setDetail2(true);
            setDetail3(false);
            setDetail4(false);
          }}
        >
          <p>About us</p>
        </div>
        <div
          className={detail3 ? "selected_ta" : "tab"}
          onClick={() => {
            setDetail1(false);
            setDetail2(false);
            setDetail3(true);
            setDetail4(false);
          }}
        >
          <p>Vision</p>
        </div>
        <div
          className={detail4 ? "selected_ta" : "tab"}
          onClick={() => {
            setDetail1(false);
            setDetail2(false);
            setDetail3(false);
            setDetail4(true);
          }}
        >
          <p>Mission</p>
        </div>
      </div>
      {detail1 && (
        <div className="info_detail">
          <div className="detail_img">
            <img src={Pic1} alt="Pic" width="100%" height="100%" />
          </div>
          <div className="info_det">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Laboriosam, illo temporibus repellendus laudantium consequatur
            cumque quas rem quos beatae voluptatum! Adipisci accusantium velit
            facilis beatae, ratione sed, nobis laboriosam officiis a at maiores
            minus nisi animi consectetur in. Quisquam nihil molestias optio!
            Asperiores, impedit aspernatur distinctio doloremque commodi
            voluptate quis?
          </div>
        </div>
      )}
      {detail2 && (
        <div className="info_detail">
          <div className="detail_img">
            <img src={Pic2} alt="Pic" width="100%" height="100%" />
          </div>
          <div className="info_det">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Laboriosam, illo temporibus repellendus laudantium consequatur
            cumque quas rem quos beatae voluptatum! Adipisci accusantium velit
            facilis beatae, ratione sed, nobis laboriosam officiis a at maiores
            minus nisi animi consectetur in. Quisquam nihil molestias optio!
            Asperiores, impedit aspernatur distinctio doloremque commodi
            voluptate quis?
          </div>
        </div>
      )}
      {detail3 && (
        <div className="info_detail">
          <div className="detail_img">
            <img src={Pic1} alt="Pic" width="100%" height="100%" />
          </div>
          <div className="info_det">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Laboriosam, illo temporibus repellendus laudantium consequatur
            cumque quas rem quos beatae voluptatum! Adipisci accusantium velit
            facilis beatae, ratione sed, nobis laboriosam officiis a at maiores
            minus nisi animi consectetur in. Quisquam nihil molestias optio!
            Asperiores, impedit aspernatur distinctio doloremque commodi
            voluptate quis?
          </div>
        </div>
      )}
      {detail4 && (
        <div className="info_detail">
          <div className="detail_img">
            <img src={Pic2} alt="Pic" width="100%" height="100%" />
          </div>
          <div className="info_det">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Laboriosam, illo temporibus repellendus laudantium consequatur
            cumque quas rem quos beatae voluptatum! Adipisci accusantium velit
            facilis beatae, ratione sed, nobis laboriosam officiis a at maiores
            minus nisi animi consectetur in. Quisquam nihil molestias optio!
            Asperiores, impedit aspernatur distinctio doloremque commodi
            voluptate quis?
          </div>
        </div>
      )}
    </div>
  );
}

export default Info;
