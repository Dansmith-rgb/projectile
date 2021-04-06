import React from "react";
import "../../static/css/card.css";
import folderOpen from "@iconify/icons-bytesize/folder-open";
import { Icon, InlineIcon } from "@iconify/react";

const Card = ({ text, number, img }) => {
  return (
    <div className="card">
      <div className="card-image">
        <Icon
          icon={folderOpen}
          style={{ color: "#ffffff", fontSize: "27px" }}
        />
      </div>
      <h4 className="card-title">{text}</h4>

      <h2 className="card-body">{number}</h2>
    </div>
  );
};

export default Card;
