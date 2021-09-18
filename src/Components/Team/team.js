import React from "react";

import classes from "./team.module.css";
import Images from "../../picture.json";

export default function Team() {
  return (
    <div>
      <h1 className={classes.header}>Meet Our team</h1>
      <div className={classes.teamcontainer}>
        <h1 className={classes.category}>&nbsp;Prime-Core Members&nbsp;</h1>
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
        <div className={classes.flexContainer}>
          <div>
            <img src={Images.technicalHead} alt="President" />
            <h1>Bhavya Sharma</h1>
            <h2>Technical Head</h2>
          </div>
          <div>
            <img src={Images.documentationHead} alt="President" />
            <h1>Deepanshi Aggarwal</h1>
            <h2>Documentation Head</h2>
          </div>
          <div>
            <img src={Images.socialHead} alt="President" />
            <h1>Esha Singh</h1>
            <h2>Social Head</h2>
          </div>
        </div>
        <div className={classes.flexContainer}>
          <div>
            <img src={Images.promotionHead[0]} alt="President" />
            <h1>Rajat valecha</h1>
            <h2>Promotion Head</h2>
          </div>
          <div>
            <img src={Images.promotionHead[1]} alt="President" />
            <h1>Gautam Jain</h1>
            <h2>Promotion Head</h2>
          </div>
        </div>
        <br />
        <br />
        <h1 className={classes.category}>&nbsp;Core-Team&nbsp;</h1>
        <div className={classes.gridContainer}>
          <div className={classes.gridItem}>
            <img src={Images.promotionTeam[0]} alt="promotion-team" />
            <h1>Muskan Singh</h1>
            <h2>Promotion Sub-Head</h2>
          </div>
          <div className={classes.gridItem}>
            <img src={Images.promotionTeam[1]} alt="promotion-team" />
            <h1>Nandini Singh</h1>
            <h2>Promotion sub-Head</h2>
          </div>
          <div className={classes.gridItem}>
            <img src={Images.promotionTeam[2]} alt="promotion-team" />
            <h1>Akansha Tyagi</h1>
            <h2>Promotion Sub-Head</h2>
          </div>
          <div className={classes.gridItem}>
            <img src={Images.socialTeam[0]} alt="social-team" />
            <h1>Naman Mehra</h1>
            <h2>Social Sub-Head</h2>
          </div>
          <div className={classes.gridItem}>
            <img src={Images.socialTeam[1]} alt="social-team" />
            <h1>Abha Agarwal</h1>
            <h2>Social Sub-Head</h2>
          </div>
          <div className={classes.gridItem}>
            <img src={Images.documentationTeam[0]} alt="Doc-Team" />
            <h1>Shreya Goswami</h1>
            <h2>Documentation Sub-Head</h2>
          </div>
          <div className={classes.gridItem}>
            <img src={Images.documentationTeam[1]} alt="Doc-Team" />
            <h1>Ujjwal Katyal</h1>
            <h2>Documentation Sub-Head</h2>
          </div>
          <div className={classes.gridItem}>
            <img src={Images.sigCDS[0]} alt="sigCDS" />
            <h1>Raghav Maheshwari</h1>
            <h2>SIG C&DS Head</h2>
          </div>
          <div className={classes.gridItem}>
            <img src={Images.sigCDS[1]} alt="sigCDS" />
            <h1>Tushar</h1>
            <h2>SIG C&DS Head</h2>
          </div>
          <div className={classes.gridItem}>
            <img src={Images.sigCP[0]} alt="sigCP" />
            <h1>Sparsh Malhotra</h1>
            <h2>SIG CP Head</h2>
          </div>
          <div className={classes.gridItem}>
            <img src={Images.sigCP[1]} alt="sigCP" />
            <h1>siddarth Singh</h1>
            <h2>SIG CP Head</h2>
          </div>
          <div className={classes.gridItem}>
            <img src={Images.sigJava[0]} alt="sigjava" />
            <h1>Akshat Bhatnagar</h1>
            <h2>SIG Java Head</h2>
          </div>
          <div className={classes.gridItem}>
            <img src={Images.sigJava[1]} alt="sigjava" />
            <h1>Aman Mihra</h1>
            <h2>SIG Java Head</h2>
          </div>
          <div className={classes.gridItem}>
            <img src={Images.sigPython[0]} alt="sigPython" />
            <h1>Muskan Maheshwari</h1>
            <h2>SIG Python Head</h2>
          </div>
          <div className={classes.gridItem}>
            <img src={Images.sigPython[1]} alt="sigPython" />
            <h1>Nishant Singh</h1>
            <h2>SIG Python Head</h2>
          </div>
          <div className={classes.gridItem}>
            <img src={Images.sigWeb[0]} alt="sigweb" />
            <h1>Rahul Kumar</h1>
            <h2>SIG Python Head</h2>
          </div>
          <div className={classes.gridItem}>
            <img src={Images.sigWeb[1]} alt="sigweb" />
            <h1>Agrima Sawhney</h1>
            <h2>SIG Web Head</h2>
          </div>
          <div className={classes.gridItem}>
            <img src={Images.sigFlutter[0]} alt="sigFlutter" />
            <h1>Karan Vaswani</h1>
            <h2>SIG Flutter Head</h2>
          </div>
          <div className={classes.gridItem}>
            <img src={Images.sigFlutter[1]} alt="sigFlutter" />
            <h1>Druvh Varshney</h1>
            <h2>SIG Flutter Head</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
