import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { IconContext } from "react-icons";
import {
  Nav,
  NavContainer,
  NavLogo,
  NavIcon,
  NavMenu,
  NavLinks,
  NavItem,
  MobileIcon,
} from "./NavStyles";
import { useLocation } from "react-router-dom";
import { data } from "../../data/NavData";
import { useNavigate } from "react-router";

const Navbar = () => {
  const [show, setShow] = useState(false);

  let history = useNavigate();
  let location = useLocation();

  const handleClick = () => {
    setShow(!show);
  };

  const scrollTo = (id) => {
    const elm = document.getElementById(id);

    elm.scrollIntoView({
      behavior: "smooth",
    });
  };

  const closeMobileMenu = (to, id) => {
    if (id && location.pathname === "/") {
      scrollTo(id);
    }

    history(to);
    setShow(false);
  };

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav>
        <NavContainer>
          <NavLogo to="/">
            <NavIcon
              src="https://github.com/itSatoriCode/react-data-website/blob/starter/public/assets/logo.png?raw=true"
              alt="Logo"
            >
            </NavIcon>
            Beta
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {show ? <FaTimes /> : <CgMenuRight />}
          </MobileIcon>
          <NavMenu show={show}>
            {data.map((el, index) => (
              <NavItem key={index}>
                <NavLinks onClick={() => closeMobileMenu(el.to, el.id)}>
                  {el.text}
                </NavLinks>
              </NavItem>
            ))}
          </NavMenu>
        </NavContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
