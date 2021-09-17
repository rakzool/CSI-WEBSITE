import React from "react";

import classes from "./team.module.css";
import Images from "../../picture.json";

export default function Team() {
  return (
    <div>
      <h1 className={classes.header}>Meet Our team</h1>
      <div className={classes.teamcontainer}>
        <div className={classes.flexContainer}>
          <div>
            <img src={Images.president} alt="President" />
            <h1>Aasish Kumar Jha</h1>
            <h2>President</h2>
          </div>
          <div>
            <img src={Images.secratary} alt="President" />
            <h1>Jaya Gaur</h1>
            <h2>Secretary</h2>
          </div>
          <div>
            <img src={Images.jointSecratary} alt="President" />
            <h1>Nishit Singhal</h1>
            <h2>Joint Secratray</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
