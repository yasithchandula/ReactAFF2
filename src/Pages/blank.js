import React from "react";
import SideNav from "../components/SideNav/SideNav";
import "./blank.css";

export default function Blank() {
  return (
    <div className="Index">
      <div className="LeftBar">
        <SideNav />
      </div>
      <div className="Content">
        <div className="TabBar">
          <div className="TabCard">
            <div className="LeftCard">
              <div className="LableCard">
                <b>New Sales</b>
              </div>
              <div className="Count">
                <h4>123</h4>
              </div>
            </div>
            <div className="RightCard">Image</div>
          </div>
          <div className="TabCard"></div>
          <div className="TabCard"></div>
          <div className="TabCard"></div>
        </div>
        <div className="ContentSec"></div>
      </div>
    </div>
  );
}
