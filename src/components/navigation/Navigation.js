import React, { useState, useEffect } from "react";
import "./navigation.css";

import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
export default function Navigation() {
  const [menuVisible, setmenuVisible] = useState(false);
  useEffect(() => {
    var sidebarMenu = document.getElementById("sidebar-menu");
    if (menuVisible) {
      sidebarMenu.style.transform = "translateX(30vw)";
      sidebarMenu.style.transition = "transform 2s";
    } else {
      sidebarMenu.style.transform = "translateX(-30vw)";
      sidebarMenu.style.transition = "transform 2s";
    }
  }, [menuVisible]);
  return (
    <div className="navigation">
      <div className="menu_button">
        <IconButton onClick={() => setmenuVisible(!menuVisible)}>
          <MenuIcon fontSize="large" />
        </IconButton>
      </div>

      <div id="sidebar-menu" className="sidebar-menu">
        <ul>
          <li>HOME</li>
          <li>ABOUT </li>
          <li>PROJECTS</li>
        </ul>
      </div>
    </div>
  );
}
