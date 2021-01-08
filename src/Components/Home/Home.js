import React from "react";
import Header from "../Header/header";
import Tilt from "react-tilt";
import "./home.css";
import Data from "../../Data.json";
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
              const { name, description, alt, image } = itms;
              return (
                <React.StrictMode key={index}>
                  <Tilt className="Tilt">
                    <div className="temp-itm">
                      <CardComponent
                        name={name}
                        desp={description}
                        alt={alt}
                        image={image}
                      />
                    </div>
                  </Tilt>
                </React.StrictMode>
              );
            })}
          </div>
        </div>
      </div>
      <div className="hello">
        <div className="back-image">
          <img
            src="/assets/footerimage.jpeg"
            alt="csiipec"
            height="100%"
            width="100%"
          />
        </div>
        <div className="fill">
          <div className="fill-text">
            <p>Come Join Us for exciting learning opportunity .</p>

            <p className="fill-address">
              CSI STUDENT CHAPTER IPEC
              <br />
              Inderprastha Engineering College
              <br />
              63 Site IV,
              <br />
              Sahibabad Industrial Area, Surya Nagar Flyover Road Sahibabad,
              Ghaziabad-U.P
              <br />
              PIN Code-201010
            </p>

            <div className="fill-handle">
              <ul>
                <li className="ig">
                  <a href="https://www.instagram.com/csiipec/">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li className="fb">
                  <a href="https://www.facebook.com/csiipec">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="mail">
                  <a href="mailto:csiipec17@gmail.com">
                    <i className="fa fa-envelope"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
