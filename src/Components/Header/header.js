import React, { Component } from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="nav-disp">
      <div className="content">
        <div className="logo">
          <img
            src="/assets/csi-cropped.png"
            width="150rem"
            height="150rem"
          ></img>
        </div>
        <div className="title">
          <h1>CSI Student Chapter IPEC</h1>
          <hr className="rule"></hr>
        </div>
      </div>
    </div>
  );
}
