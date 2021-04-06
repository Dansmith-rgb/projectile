import React from "react";
import { Icon, InlineIcon } from "@iconify/react";
import plusIcon from "@iconify/icons-akar-icons/plus";
import bxsDownArrow from "@iconify/icons-bx/bxs-down-arrow";
import "../../static/css/Header.css";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";

const Header = ({ name, email, page }) => {
  return (
    <div className="container-header">
      <nav className="dashboard-nav">
        <div className="logo-dashboard">
          <Link to="/dashboard">
            <h4>P</h4>
          </Link>
        </div>
        <Icon
          className="plus-icon"
          icon={plusIcon}
          style={{ color: "#006BA1", fontSize: "24px" }}
        />
        <div className="account-img-header">
          <Avatar alt="Michal Rome" src="../../static/images/person.jpg" />
        </div>
        <div className="account-header">
          <h5 className="name-header">Michal Rome</h5>
          <p className="email-header">mrome@gmail.com</p>
        </div>
        <div className="down-arrow-header">
          <Icon
            icon={bxsDownArrow}
            style={{ color: "#b9b8b8", fontSize: "12px" }}
          />
        </div>
      </nav>
    </div>
  );
};

export default Header;
