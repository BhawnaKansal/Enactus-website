import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import img from "../../Assets/g12.png"
import { VscMenu } from "react-icons/vsc";
import { ImCross } from "react-icons/im";
import logo2 from "../../Assets/logo2.png"
import logo1 from "../../Assets/enactus.svg"

function Navbarnew() {

  // const [isOpen, setOpen] = useState(false)


  const [activeMenu, setActiveMenu] = useState("");
  const [burgerstate, setBurgerState] = useState(true);
  const [ham, setHam] = useState(false);
  const showham = () => {
    setHam(!ham);
    setBurgerState(!burgerstate);
  };
  return (
    <>
      <div className="navbarWrapper">
        <div className="logos">
          <div className="logo1">
            <img src={logo1} id="img1" />
          </div>
        </div>
        <div className="nav-links">
          <ul className="pageNames">
            <li>
              <Link
                to="/"
                className={activeMenu === "Home" ? "active-links" : "links"}
                onClick={() => {
                  setActiveMenu("Home");
                }}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={activeMenu === "projects" ? "active-links" : "links"}
                onClick={() => {
                  setActiveMenu("projects");
                }}
              >
                OUR PROJECTS
              </Link>
            </li>
            <li>
              <Link
                to="/aboutus"
                className={activeMenu === "aboutus" ? "active-links" : "links"}
                onClick={() => {
                  setActiveMenu("aboutus");
                }}
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                to="/team"
                className={activeMenu === "team" ? "active-links" : "links"}
                onClick={() => {
                  setActiveMenu("team");
                }}
              >
                OUR TEAM 
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={activeMenu === "contact" ? "active-links" : "links"}
                onClick={() => {
                  setActiveMenu("conatct");
                }}
              >
                CONTACT US
              </Link>
            </li>
            
          </ul>
          <div className="mobile">
            {ham ? (
              <ImCross className="mob-icon" onClick={showham} />
            ) : (
              <VscMenu className="mob-icon" onClick={showham} />
            )}

{/* <Hamburger toggled={isOpen} toggle={setOpen} /> */}

          </div>
        </div>
      </div>

      {ham ? (
        <>
          <div className="ham">
            <ul className="nav-i">
              <li>
                <Link
                  to="/"
                  className={activeMenu === "Home" ? "active-links" : "links"}
                  onClick={() => {
                    setActiveMenu("Home");
                    setHam(false);
                  }}
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className={activeMenu === "projects" ? "active-links" : "links"}
                  onClick={() => {
                    setActiveMenu("projects");
                    setHam(false);
                  }}
                >
                  OUR PROJECTS
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutus"
                  className={
                    activeMenu === "aboutus" ? "active-links" : "links"
                  }
                  onClick={() => {
                    setActiveMenu("aboutus");
                    setHam(false);
                  }}
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className={
                    activeMenu === "team" ? "active-links" : "links"
                  }
                  onClick={() => {
                    setActiveMenu("team");
                    setHam(false);
                  }}
                >
                  OUR TEAM 
                </Link>
              </li>
              <li>
              <Link
                  to="/contact"
                  className={
                    activeMenu === "contact" ? "active-links" : "links"
                  }
                  onClick={() => {
                    setActiveMenu("contact");
                    setHam(false);
                  }}
                >
                  CONTACT US
              </Link>
              </li>
            </ul>
          </div>
        </>
       ) : (
        " "
       )
       
       }
    </>
  );
}

export default Navbarnew;
