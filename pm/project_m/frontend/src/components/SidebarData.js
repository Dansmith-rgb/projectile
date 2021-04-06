import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@material-ui/icons/Settings";
import PeopleIcon from "@material-ui/icons/People";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HistoryIcon from "@material-ui/icons/History";
import { Link } from "@material-ui/core";

export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/dashboard",
  },
  {
    title: "Collegues",
    icon: <PeopleIcon />,
    link: "/",
  },
  {
    title: "Projects",
    icon: <AccountTreeIcon />,
    link: "/",
  },
  {
    title: "Past Projects",
    icon: <HistoryIcon />,
    link: "/",
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
    link: "/",
  },
  {
    title: "Logout",
    icon: <ExitToAppIcon />,
    link: "/",
  },
];
