import React, { useState } from "react";
import Header from "../Header/header";
import Tilt from "react-tilt";
import "./home.css";

import Data from "../../Data.json";

import Dialogs from "../Dialog/Dialogs";
import CardComponent from "../card/cardComponent";

function Home() {
  const [open, setOpen] = useState(false);
  const [list, setlist] = useState({});
  const [syl, setSyl] = useState([]);
  const [head, setHead] = useState([]);
  const handleClickOpen = () => {
    setOpen(!open);
  };

  const dialogOpen = (
    name,
    description,
    alt,
    image,
    syllabus,
    sigHead,
    HeadImage
  ) => {
    handleClickOpen();

    setlist({
      name: name,
      description: description,
      alt: alt,
      image: image,
      HeadImage: HeadImage,
    });
    setSyl(syllabus);
    setHead(sigHead);

    console.log(syl);
  };

  return (
    <div>
      <div className="csi-ka-logo">
        <Header />
      </div>
      <div className="home-tile">
        <div className="home-title-title">Hola Amigos</div>
        <div className="home-title-text">
          <p>
            CSI student chapter IPEC is a Society, that works towards Nurturing
            and supporting Coders by providing Community Support and learning
            resources. We also organise multiple Webinars, events, Coding
            Compititions inorder to encourage a learning Environment.
          </p>
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
              const {
                name,
                description,
                alt,
                image,
                syllabus,
                sigHead,
                HeadImage,
              } = itms;

              return (
                <div key={index}>
                  <div
                    key={index}
                    onClick={() =>
                      dialogOpen(
                        name,
                        description,
                        alt,
                        image,
                        syllabus,
                        sigHead,
                        HeadImage
                      )
                    }
                  >
                    <Tilt className="Tilt">
                      <div className="temp-itm">
                        <CardComponent
                          name={name}
                          desp={description}
                          alt={alt}
                          image={image}
                          syllabus={syllabus}
                        ></CardComponent>
                      </div>
                    </Tilt>
                  </div>
                </div>
              );
            })}
          </div>
          <Dialogs
            open={open}
            name={list.name}
            handleClickOpen={handleClickOpen}
            image={list.image}
            alt={list.alt}
            desp={list.description}
            syllabus={syl}
            Heads={head}
            HeadImage={list.HeadImage}
          />
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
              Sahibabad Industrial Area,
              <br /> Surya Nagar Flyover Road Sahibabad,
              <br />
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
      <div className="unknownblock"></div>
    </div>
  );
}

export default Home;
