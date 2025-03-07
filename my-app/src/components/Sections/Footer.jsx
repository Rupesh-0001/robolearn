import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import LightLogoImg from "../../assets/svg/LightLogo";

export default function Contact() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "0" }}>
            <Link className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
              <LightLogoImg />
              {/* <h1 className="font15 extraBold whiteColor" style={{ marginLeft: "15px" }}>
                RoboLearn
              </h1> */}
            </Link>
            <StyleP className="whiteColor font13">
              © {getCurrentYear()} - <span className="purpleColor font13">RoboLearn</span> All Right Reserved
            </StyleP>

            <Link className="whiteColor animate pointer font13" to="home" smooth={true} offset={-80}>
              Back to top
            </Link>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;