import React from "react";
import styled from "styled-components";
import ProjectBox from "../Elements/ProjectBox";
import ProjectImg1 from "../../assets/img/svgs/zerotoone.png";
import ProjectImg2 from "../../assets/img/svgs/onetohundred.png";

export default function Projects() {
  return (
    <Wrapper id="projects">
      <div className="whiteBg" style={{ padding: "30px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Way Of Shaping Future</h1>
            <p className="font13">
              The future belongs to innovators. Whether you're taking your first step into robotics or pushing the limits of automation,
              <br />
              our courses are designed to equip you with the skills to create, build, and lead in the world of technology.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <ProjectBox
                img={ProjectImg1}
                title="ZERO - ONE"
                hoverEnabled={true}
                text="Unlock your potential with our beginner-friendly robotics course! Build, code, and bring your ideas to life - no experience needed. Explore how robotics shapes the future with just curiosity and passion!"
              />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <ProjectBox
                img={ProjectImg2}
                title="ONE - HUNDRED"
                hoverEnabled={true}
                text="Master robotics with our professional-level course! Designed for experts ready to lead innovation, push boundaries, and shape the future of automation"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img className="radius8" src={AddImage2} alt="add" />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h4 className="font15 semiBold">A few words about company</h4>
              <h2 className="font40 extraBold">A Study of Creativity</h2>
              <p className="font12">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              </p>
              <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
                <div style={{ width: "190px" }}>
                  <FullButton title="Get Started" action={() => alert("clicked")} />
                </div>
                <div style={{ width: "190px", marginLeft: "15px" }}>
                  <FullButton title="Contact Us" action={() => alert("clicked")} border />
                </div>
              </ButtonsRow>
            </AddRight>
          </Advertising>
        </div>
      </div> */}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;