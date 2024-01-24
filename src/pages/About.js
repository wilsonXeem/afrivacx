import React, { useState } from "react";
import Header from "../components/Header";

import QuickLinks from "../components/QuickLinks";
import Footer from "../components/Footer";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLeaf, faHourglass, faFlag } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const [detail1, setDetail1] = useState(true);
  const [detail2, setDetail2] = useState(false);
  const [detail3, setDetail3] = useState(false);
  const [detail4, setDetail4] = useState(false);
  const [detail5, setDetail5] = useState(false);
  const [detail6, setDetail6] = useState(false);
  return (
    <>
      <Header title="ABOUT US" a="/about" />
      <div className="about_container">
        <div className="about">
          <div className="about_tabs">
            <div
              className={detail1 ? "selected_tab" : "ta"}
              onClick={() => {
                setDetail1(true);
                setDetail2(false);
                setDetail3(false);
                setDetail4(false);
                setDetail5(false);
                setDetail6(false);
              }}
            >
              <p>Background</p>
            </div>
            <div
              className={detail2 ? "selected_tab" : "ta"}
              onClick={() => {
                setDetail1(false);
                setDetail2(true);
                setDetail3(false);
                setDetail4(false);
                setDetail5(false);
                setDetail6(false);
              }}
            >
              <p>About us</p>
            </div>
            <div
              className={detail3 ? "selected_tab" : "ta"}
              onClick={() => {
                setDetail1(false);
                setDetail2(false);
                setDetail3(true);
                setDetail4(false);
                setDetail5(false);
                setDetail6(false);
              }}
            >
              <p>Vision</p>
            </div>
            <div
              className={detail4 ? "selected_tab" : "ta"}
              onClick={() => {
                setDetail1(false);
                setDetail2(false);
                setDetail3(false);
                setDetail4(true);
              }}
            >
              <p>Mission</p>
            </div>
            <div
              className={detail5 ? "selected_tab" : "ta"}
              onClick={() => {
                setDetail1(false);
                setDetail2(false);
                setDetail3(false);
                setDetail4(false);
                setDetail5(true);
                setDetail6(false);
              }}
            >
              <p>Who we are</p>
            </div>
            <div
              className={detail6 ? "selected_tab" : "ta"}
              onClick={() => {
                setDetail1(false);
                setDetail2(false);
                setDetail3(false);
                setDetail4(false);
                setDetail5(false);
                setDetail6(true);
              }}
            >
              <p>What we do</p>
            </div>
          </div>
        </div>
        {detail1 && (
          <div className="about_body">
            <h3>Background</h3>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                dolorum, quas vel commodi accusantium accusamus aspernatur
                distinctio tempore, rerum eius laboriosam eligendi quam
                excepturi maxime facilis ab ullam, dolorem est ipsam.
                Reprehenderit, aliquid sit dolores laboriosam accusantium
                praesentium enim accusamus, vero culpa nulla mollitia, natus
                dignissimos architecto doloremque exercitationem. Praesentium
                nisi odit voluptatum nesciunt eos reprehenderit, soluta quam
                nulla. Odio voluptatibus reiciendis omnis natus rerum assumenda
                quam beatae deleniti non, aut, modi incidunt cum nihil similique
                nulla. Hic similique corrupti magni quos veritatis ut aut
                voluptatibus reprehenderit dolorum ipsa sapiente, esse
                accusantium! Alias cum libero dolore quas repudiandae fugit
                eaque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Magnam molestias praesentium molestiae similique harum
                laboriosam doloribus expedita sunt distinctio quidem provident
                debitis asperiores sapiente commodi maxime facilis ea magni
                delectus non dicta vel, necessitatibus fugit! Deserunt ut
                delectus quidem earum modi molestiae fuga incidunt, asperiores,
                maxime, laboriosam vitae culpa placeat.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum quidem vel aspernatur voluptate blanditiis ad dolor
                debitis similique nihil ab, nulla adipisci ratione, nesciunt
                pariatur ullam neque molestias eveniet eum sapiente, officiis
                eligendi. Quidem nesciunt tenetur nisi tempora sit recusandae
                laudantium voluptas, veniam quos. Cumque, odio! Modi aliquam
                doloribus reiciendis excepturi rerum unde consectetur dolor
                deleniti obcaecati. Quo natus illo tempore rem sit distinctio,
                esse dolorem voluptatem est obcaecati voluptatibus repudiandae,
                maxime pariatur corrupti, cum minus eligendi corporis doloremque
                cupiditate incidunt. Hic iure tempora repellendus dolorem
                laborum deserunt delectus beatae quibusdam minima, minus
                pariatur nobis laboriosam dignissimos a quis accusamus!
              </p>
            </div>
          </div>
        )}
        {detail2 && (
          <div className="about_body">
            <h3>About us</h3>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                dolorum, quas vel commodi accusantium accusamus aspernatur
                distinctio tempore, rerum eius laboriosam eligendi quam
                excepturi maxime facilis ab ullam, dolorem est ipsam.
                Reprehenderit, aliquid sit dolores laboriosam accusantium
                praesentium enim accusamus, vero culpa nulla mollitia, natus
                dignissimos architecto doloremque exercitationem. Praesentium
                nisi odit voluptatum nesciunt eos reprehenderit, soluta quam
                nulla. Odio voluptatibus reiciendis omnis natus rerum assumenda
                quam beatae deleniti non, aut, modi incidunt cum nihil similique
                nulla. Hic similique corrupti magni quos veritatis ut aut
                voluptatibus reprehenderit dolorum ipsa sapiente, esse
                accusantium! Alias cum libero dolore quas repudiandae fugit
                eaque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Magnam molestias praesentium molestiae similique harum
                laboriosam doloribus expedita sunt distinctio quidem provident
                debitis asperiores sapiente commodi maxime facilis ea magni
                delectus non dicta vel, necessitatibus fugit! Deserunt ut
                delectus quidem earum modi molestiae fuga incidunt, asperiores,
                maxime, laboriosam vitae culpa placeat.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum quidem vel aspernatur voluptate blanditiis ad dolor
                debitis similique nihil ab, nulla adipisci ratione, nesciunt
                pariatur ullam neque molestias eveniet eum sapiente, officiis
                eligendi. Quidem nesciunt tenetur nisi tempora sit recusandae
                laudantium voluptas, veniam quos. Cumque, odio! Modi aliquam
                doloribus reiciendis excepturi rerum unde consectetur dolor
                deleniti obcaecati. Quo natus illo tempore rem sit distinctio,
                esse dolorem voluptatem est obcaecati voluptatibus repudiandae,
                maxime pariatur corrupti, cum minus eligendi corporis doloremque
                cupiditate incidunt. Hic iure tempora repellendus dolorem
                laborum deserunt delectus beatae quibusdam minima, minus
                pariatur nobis laboriosam dignissimos a quis accusamus!
              </p>
            </div>
          </div>
        )}
        {detail3 && (
          <div className="about_body">
            <h3>Vision</h3>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                dolorum, quas vel commodi accusantium accusamus aspernatur
                distinctio tempore, rerum eius laboriosam eligendi quam
                excepturi maxime facilis ab ullam, dolorem est ipsam.
                Reprehenderit, aliquid sit dolores laboriosam accusantium
                praesentium enim accusamus, vero culpa nulla mollitia, natus
                dignissimos architecto doloremque exercitationem. Praesentium
                nisi odit voluptatum nesciunt eos reprehenderit, soluta quam
                nulla. Odio voluptatibus reiciendis omnis natus rerum assumenda
                quam beatae deleniti non, aut, modi incidunt cum nihil similique
                nulla. Hic similique corrupti magni quos veritatis ut aut
                voluptatibus reprehenderit dolorum ipsa sapiente, esse
                accusantium! Alias cum libero dolore quas repudiandae fugit
                eaque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Magnam molestias praesentium molestiae similique harum
                laboriosam doloribus expedita sunt distinctio quidem provident
                debitis asperiores sapiente commodi maxime facilis ea magni
                delectus non dicta vel, necessitatibus fugit! Deserunt ut
                delectus quidem earum modi molestiae fuga incidunt, asperiores,
                maxime, laboriosam vitae culpa placeat.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum quidem vel aspernatur voluptate blanditiis ad dolor
                debitis similique nihil ab, nulla adipisci ratione, nesciunt
                pariatur ullam neque molestias eveniet eum sapiente, officiis
                eligendi. Quidem nesciunt tenetur nisi tempora sit recusandae
                laudantium voluptas, veniam quos. Cumque, odio! Modi aliquam
                doloribus reiciendis excepturi rerum unde consectetur dolor
                deleniti obcaecati. Quo natus illo tempore rem sit distinctio,
                esse dolorem voluptatem est obcaecati voluptatibus repudiandae,
                maxime pariatur corrupti, cum minus eligendi corporis doloremque
                cupiditate incidunt. Hic iure tempora repellendus dolorem
                laborum deserunt delectus beatae quibusdam minima, minus
                pariatur nobis laboriosam dignissimos a quis accusamus!
              </p>
            </div>
          </div>
        )}
        {detail4 && (
          <div className="about_body">
            <h3>Mission</h3>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                dolorum, quas vel commodi accusantium accusamus aspernatur
                distinctio tempore, rerum eius laboriosam eligendi quam
                excepturi maxime facilis ab ullam, dolorem est ipsam.
                Reprehenderit, aliquid sit dolores laboriosam accusantium
                praesentium enim accusamus, vero culpa nulla mollitia, natus
                dignissimos architecto doloremque exercitationem. Praesentium
                nisi odit voluptatum nesciunt eos reprehenderit, soluta quam
                nulla. Odio voluptatibus reiciendis omnis natus rerum assumenda
                quam beatae deleniti non, aut, modi incidunt cum nihil similique
                nulla. Hic similique corrupti magni quos veritatis ut aut
                voluptatibus reprehenderit dolorum ipsa sapiente, esse
                accusantium! Alias cum libero dolore quas repudiandae fugit
                eaque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Magnam molestias praesentium molestiae similique harum
                laboriosam doloribus expedita sunt distinctio quidem provident
                debitis asperiores sapiente commodi maxime facilis ea magni
                delectus non dicta vel, necessitatibus fugit! Deserunt ut
                delectus quidem earum modi molestiae fuga incidunt, asperiores,
                maxime, laboriosam vitae culpa placeat.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum quidem vel aspernatur voluptate blanditiis ad dolor
                debitis similique nihil ab, nulla adipisci ratione, nesciunt
                pariatur ullam neque molestias eveniet eum sapiente, officiis
                eligendi. Quidem nesciunt tenetur nisi tempora sit recusandae
                laudantium voluptas, veniam quos. Cumque, odio! Modi aliquam
                doloribus reiciendis excepturi rerum unde consectetur dolor
                deleniti obcaecati. Quo natus illo tempore rem sit distinctio,
                esse dolorem voluptatem est obcaecati voluptatibus repudiandae,
                maxime pariatur corrupti, cum minus eligendi corporis doloremque
                cupiditate incidunt. Hic iure tempora repellendus dolorem
                laborum deserunt delectus beatae quibusdam minima, minus
                pariatur nobis laboriosam dignissimos a quis accusamus!
              </p>
            </div>
          </div>
        )}
        {detail5 && (
          <div className="about_body">
            <h3>Who we are</h3>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                dolorum, quas vel commodi accusantium accusamus aspernatur
                distinctio tempore, rerum eius laboriosam eligendi quam
                excepturi maxime facilis ab ullam, dolorem est ipsam.
                Reprehenderit, aliquid sit dolores laboriosam accusantium
                praesentium enim accusamus, vero culpa nulla mollitia, natus
                dignissimos architecto doloremque exercitationem. Praesentium
                nisi odit voluptatum nesciunt eos reprehenderit, soluta quam
                nulla. Odio voluptatibus reiciendis omnis natus rerum assumenda
                quam beatae deleniti non, aut, modi incidunt cum nihil similique
                nulla. Hic similique corrupti magni quos veritatis ut aut
                voluptatibus reprehenderit dolorum ipsa sapiente, esse
                accusantium! Alias cum libero dolore quas repudiandae fugit
                eaque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Magnam molestias praesentium molestiae similique harum
                laboriosam doloribus expedita sunt distinctio quidem provident
                debitis asperiores sapiente commodi maxime facilis ea magni
                delectus non dicta vel, necessitatibus fugit! Deserunt ut
                delectus quidem earum modi molestiae fuga incidunt, asperiores,
                maxime, laboriosam vitae culpa placeat.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum quidem vel aspernatur voluptate blanditiis ad dolor
                debitis similique nihil ab, nulla adipisci ratione, nesciunt
                pariatur ullam neque molestias eveniet eum sapiente, officiis
                eligendi. Quidem nesciunt tenetur nisi tempora sit recusandae
                laudantium voluptas, veniam quos. Cumque, odio! Modi aliquam
                doloribus reiciendis excepturi rerum unde consectetur dolor
                deleniti obcaecati. Quo natus illo tempore rem sit distinctio,
                esse dolorem voluptatem est obcaecati voluptatibus repudiandae,
                maxime pariatur corrupti, cum minus eligendi corporis doloremque
                cupiditate incidunt. Hic iure tempora repellendus dolorem
                laborum deserunt delectus beatae quibusdam minima, minus
                pariatur nobis laboriosam dignissimos a quis accusamus!
              </p>
            </div>
          </div>
        )}
        {detail6 && (
          <div className="about_body">
            <h3>What we do</h3>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                dolorum, quas vel commodi accusantium accusamus aspernatur
                distinctio tempore, rerum eius laboriosam eligendi quam
                excepturi maxime facilis ab ullam, dolorem est ipsam.
                Reprehenderit, aliquid sit dolores laboriosam accusantium
                praesentium enim accusamus, vero culpa nulla mollitia, natus
                dignissimos architecto doloremque exercitationem. Praesentium
                nisi odit voluptatum nesciunt eos reprehenderit, soluta quam
                nulla. Odio voluptatibus reiciendis omnis natus rerum assumenda
                quam beatae deleniti non, aut, modi incidunt cum nihil similique
                nulla. Hic similique corrupti magni quos veritatis ut aut
                voluptatibus reprehenderit dolorum ipsa sapiente, esse
                accusantium! Alias cum libero dolore quas repudiandae fugit
                eaque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Magnam molestias praesentium molestiae similique harum
                laboriosam doloribus expedita sunt distinctio quidem provident
                debitis asperiores sapiente commodi maxime facilis ea magni
                delectus non dicta vel, necessitatibus fugit! Deserunt ut
                delectus quidem earum modi molestiae fuga incidunt, asperiores,
                maxime, laboriosam vitae culpa placeat.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum quidem vel aspernatur voluptate blanditiis ad dolor
                debitis similique nihil ab, nulla adipisci ratione, nesciunt
                pariatur ullam neque molestias eveniet eum sapiente, officiis
                eligendi. Quidem nesciunt tenetur nisi tempora sit recusandae
                laudantium voluptas, veniam quos. Cumque, odio! Modi aliquam
                doloribus reiciendis excepturi rerum unde consectetur dolor
                deleniti obcaecati. Quo natus illo tempore rem sit distinctio,
                esse dolorem voluptatem est obcaecati voluptatibus repudiandae,
                maxime pariatur corrupti, cum minus eligendi corporis doloremque
                cupiditate incidunt. Hic iure tempora repellendus dolorem
                laborum deserunt delectus beatae quibusdam minima, minus
                pariatur nobis laboriosam dignissimos a quis accusamus!
              </p>
            </div>
          </div>
        )}
      </div>
      <QuickLinks />
      <Footer />
    </>
  );
};

export default About;
