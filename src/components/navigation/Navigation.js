import React, { useState, useEffect } from "react";
import "./navigation.css";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
export default function Navigation() {
  const [menuVisible, setmenuVisible] = useState(false);
  useEffect(() => {
    var sidebarMenu = document.getElementById("sidebar-menu");
    if (menuVisible) {
      sidebarMenu.style.transform = "translateX(0%)";
      sidebarMenu.style.transition = "transform 2s";
    } else {
      sidebarMenu.style.transform = "translateX(-100%)";
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
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">PROJECTS</Link>
          </li>
          <li>
            <Link to="/">About</Link>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
