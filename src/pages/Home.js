import React from "react";
import Slide from "../components/Slide";
import QuickLinks from "../components/QuickLinks";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Video from "../components/Video";
import Info from "../components/Info";
import Board from "../components/Board";

import boardData from "../data/boardData";
import OurEvents from "../components/OurEvents";

const Home = () => {
  return (
    <>
      <Slide />
      <div className="home_body">
        <Intro />
        <Video />
        <Info />
        <Board members={boardData} title="Meet the Afrivacx Board" />
        <OurEvents />
      </div>
      <QuickLinks />
      <Footer />
    </>
  );
};

export default Home;
