import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../static/css/Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@material-ui/icons/Settings";
import PeopleIcon from "@material-ui/icons/People";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HistoryIcon from "@material-ui/icons/History";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Avatar } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { SidebarData } from "./SidebarData";

const Sidebar = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <ul className="SidebarList">
          {SidebarData.map((val, key) => {
            return (
              <li className="row" key={key}>
                <Link to={val.link}>
                  <div id="icon">{val.icon}</div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      {/*
      <ul className="side-nav-links">
        <li>
          <div
            style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
          >
            <HomeIcon style={{ paddingRight: "10px", color: "grey" }} />
            <Link className="link" to="/">
              Home
            </Link>
          </div>
        </li>
        <li>
          <div
            style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
          >
            <PeopleIcon style={{ paddingRight: "10px", color: "grey" }} />
            <Link className="link">People</Link>
          </div>
        </li>
        <li>
          <div
            style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
          >
            <AccountTreeIcon style={{ paddingRight: "10px", color: "grey" }} />
            <Link className="link">Projects</Link>
          </div>
        </li>
        <li>
          <div
            style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
          >
            <HistoryIcon style={{ paddingRight: "10px", color: "grey" }} />
            <Link className="link">Past Projects</Link>
          </div>
        </li>

        <li className="bottom-links">
          <div
            style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
          >
            <SettingsIcon style={{ paddingRight: "10px", color: "grey" }} />
            <Link className="link">Settings</Link>
          </div>
        </li>
        <li>
          <div
            style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
          >
            <ExitToAppIcon style={{ paddingRight: "10px", color: "grey" }} />
            <Link className="link">Logout</Link>
          </div>
        </li>
      </ul>
      */}
    </div>
  );
};

export default Sidebar;
