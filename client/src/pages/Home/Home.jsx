import React from "react";
import { Featured, ListMovie, ListSeries } from "../../components";
import "./Home.scss";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <div id="home" className="home">
      <Navbar/>
      <Featured />
      <ListSeries />
      <ListMovie />
    </div>
  );
};

export default Home;
