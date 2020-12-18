import React from "react";
import Header from "../Header/header";
import Tilt from "react-tilt";
import "./home.css";
import Data from "../../Data";
import CardComponent from "../card/cardComponent";

function Home() {
  return (
    <div>
      <div className="csi-ka-logo">
        <Header />
      </div>
      <div className="home-tile">
        <div className="home-title-title">Hola Amigos</div>
        <div className="home-title-text">
          CSI student chapter IPEC is a Society that works towards Nurturing and
          supporting Talented Coders by providing them Community Support, We
          also organise Webinars, events, Coding Compititions so as to encourage
          a learning Environment.
        </div>
      </div>
      <div className="Sig-main">
        <div className="golden">
          <Tilt className="Tilt">
            <div className="our-sig">OUR SIGs</div>
          </Tilt>
        </div>
        <div className="sigs">
          <div className="temp">
            {Data.map((itms, index) => {
              return (
                <React.StrictMode key={index}>
                  <Tilt className="Tilt">
                    <div className="temp-itm">
                      <CardComponent
                        name={itms.name}
                        desp={itms.description}
                        alt={itms.alt}
                        image={itms.image}
                      />
                    </div>
                  </Tilt>
                </React.StrictMode>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
