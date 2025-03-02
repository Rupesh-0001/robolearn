import React from "react";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
// Assets
import CloseIcon from "../../assets/svg/CloseIcon";
import LightLogoImg from "../../assets/svg/LightLogo";
import { Link as RouterLink } from 'react-router-dom';

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <Wrapper className="animate darkBg" sidebarOpen={sidebarOpen}>
      <SidebarHeader className="flexSpaceCenter">
        <div className="flexNullCenter">
          <LightLogoImg />
          {/* <h1 className="whiteColor font20" style={{ marginLeft: "15px" }}>
            RoboLearn
          </h1> */}
        </div>
        <CloseBtn onClick={() => toggleSidebar(!sidebarOpen)} className="animate pointer">
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

      <UlStyle className="flexNullCenter flexColumn">
        <li className="semiBold font15 pointer">
          <ScrollLink
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="home"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Home
          </ScrollLink>
        </li>
        {/* <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="services"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Services
          </Link>
        </li> */}
        <li className="semiBold font15 pointer">
          <ScrollLink
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="whyus"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Why Us
          </ScrollLink>
        </li>
        <li className="semiBold font15 pointer">
          <ScrollLink
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="projects"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Projects
          </ScrollLink>
        </li>
        {/* <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="blog"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Blog
          </Link>
        </li> */}
        <li className="semiBold font15 pointer">
          <ScrollLink
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="contact"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Contact
          </ScrollLink>
        </li>
      </UlStyle>
      <UlStyle className="flexSpaceCenter" style={{ paddingTop: "0" }}>
        {/* <li className="semiBold font15 pointer">
          <a href="/" style={{ padding: "10px 30px 10px 0" }} className="whiteColor">
            Log in
          </a>
        </li> */}
        <li className="semiBold font15 pointer flexCenter" style={{ width: "100%" }}>
          <RouterLink to="/explore" className="radius8 lightBg" style={{ padding: "10px 15px" }}>
            Explore Free Classes
          </RouterLink>
        </li>
      </UlStyle>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${(props) => (props.sidebarOpen ? "0px" : "-400px")};
  z-index: 9999;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const SidebarHeader = styled.div`
  padding: 20px 0;
`;
const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`;
const UlStyle = styled.ul`
  padding: 40px;
  li {
    margin: 20px 0;
  }
`;
