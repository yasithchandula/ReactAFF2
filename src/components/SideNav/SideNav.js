import React from "react";
import "./SideNav.css";
import { FaBeer } from "react-icons/fa";

const SideNav = () => {
  return (
    <div className="SideNav">
      <div className="Logo">
        <h3>Logo.Com</h3>
      </div>
      <div className="TabSec">
        <div className="NavTab">
          <div className="TabIcon">
            <FaBeer />
          </div>
          <div className="TabLable">Tab 1</div>
        </div>
        <div className="NavTab">
          <div className="TabIcon">
            <FaBeer />
          </div>
          <div className="TabLable">Tab 2</div>
        </div>
        <div className="NavTab">
          <div className="TabIcon">
            <FaBeer />
          </div>
          <div className="TabLable">Tab 3</div>
        </div>
        <div className="NavTab">
          <div className="TabIcon">
            <FaBeer />
          </div>
          <div className="TabLable">Tab 4</div>
        </div>

        {/* <ul class="nav flex-column">
          <li className="nav-item NavTab">
            <div className="TabIcon">
              <FaBeer />
            </div>
            <a class="nav-link" href="#">
              Link
            </a>
          </li>
          <li class="nav-item NavTab">
            <a class="nav-link" href="#">
              Link
            </a>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default SideNav;
