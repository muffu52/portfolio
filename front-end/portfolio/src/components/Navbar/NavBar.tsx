import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import {
  faBars,
  faHome,
  faGraduationCap,
  faBriefcase,
  faFolder,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store"; // Assuming you have defined a RootState type

interface NavItemProps {
  icon: IconDefinition;
  text: string;
  to: string;
}

function Navbar() {
  //   const data = useSelector((state: RootState) => state.data.data);
  //   const customFunc = () => {
  //     console.log(data);
  //   };
  return (
    <nav className="navbar navbar-expand-lg fixed-top py-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ color: "#FFDD8F" }}>
          M.E.H
        </a>
        <button
          className="navbar-toggler"
          type="button"
          id="toggleButton"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5
              className="offcanvas-title"
              id="offcanvasNavbarLabel"
              style={{ color: "#BDBDBD" }}
            >
              Portfolio
            </h5>
            <button
              type="button"
              id="closeButton"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <NavItem icon={faHome} text="Intro" to="infoSection" />
              <NavItem
                icon={faGraduationCap}
                text="Education"
                to="educationSection"
              />
              <NavItem
                icon={faBriefcase}
                text="Experience"
                to="experienceSection"
              />
              <NavItem icon={faFolder} text="Projects" to="projectsSection" />
              <NavItem icon={faChartBar} text="Skills" to="skillsSection" />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

const NavItem: React.FC<NavItemProps> = ({ icon, text, to }) => (
  <li className="navbar-item">
    <ScrollLink
      data-bs-dismiss="offcanvas"
      to={to} // The target element's ID
      spy={true}
      smooth={true}
      offset={-100} // Adjust this value to align the scroll position correctly
      duration={100}
      className="nav-link"
      href="#"
      style={{ color: "#BDBDBD" }}
    >
      <FontAwesomeIcon icon={icon} className="item-icon" />
      {text}
    </ScrollLink>
  </li>
);

export default Navbar;
