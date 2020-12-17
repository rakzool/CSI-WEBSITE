import React from "react";
import Header from "../Header/header";
import "./home.css";

function Home() {
  return (
    <div>
      <div className="csi-ka-logo">
        <Header />
      </div>
      <div className="home-tile">
        <div className="home-title-title">Hola Amigoes</div>
        <div className="home-title-text">
          CSI student chapter IPEC is a Society that works towards Nurturing and
          supporting Talented Coders by providing them Community Support, We
          also organise Webinars, events, Coding Compititions so as to encourage
          a learning Environment.
        </div>
      </div>
      <div className="sigs">
        <div className="temp">Information of sigs go here</div>
      </div>
    </div>
  );
}

export default Home;
