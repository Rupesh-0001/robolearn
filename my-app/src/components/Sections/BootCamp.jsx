import React, { useState } from "react";
import styled from "styled-components";
import HeaderImage from "../../assets/gifs/VR.gif";
import QuotesIcon from "../../assets/svg/Quotes";

export default function Header() {
  const [activeTab, setActiveTab] = useState(0);

  const tabContent = [
    {
      title: "Beginner Track",
      age: "Ages 8-10",
      content: "Our Beginner Track introduces young minds to the basics of robotics and coding through fun, interactive projects. Students learn block-based programming and simple robot construction."
    },
    {
      title: "Intermediate Track",
      age: "Ages 11-13",
      content: "The Intermediate Track advances to text-based programming, more complex robotics projects, and introduces concepts like sensors and basic AI."
    },
    {
      title: "Advanced Track",
      age: "Ages 14-16",
      content: "Our Advanced Track covers sophisticated programming concepts, advanced robotics engineering, and real-world project implementation."
    }
  ];

  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font60">Explore Our Programs</h1>
          <HeaderP className="font13 semiBold">
            Discover our comprehensive learning paths designed to nurture young minds in robotics, coding, and technology. Choose the program that best fits your learning goals.
          </HeaderP>
          <TabsWrapper>
            {tabContent.map((tab, index) => (
              <TabButton 
                key={index}
                className={activeTab === index ? "active" : ""}
                onClick={() => setActiveTab(index)}
              >
                {tab.title}
                <p className="font13">{tab.age}</p>
              </TabButton>
            ))}
          </TabsWrapper>
          <ContentContainer>
            {tabContent[activeTab].content}
          </ContentContainer>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Img
            className="radius8"
            src={HeaderImage}
            alt="office"
            style={{ zIndex: 9 }}
            width={500}
            height={500}
          />
          <QuoteWrapper className="flexCenter darkBg radius8">
            <QuotesWrapper>
              <QuotesIcon />
            </QuotesWrapper>
            <div>
              <p className="font15 whiteColor">
                <em>
                  Building Future and Empowering the next generation of Creators
                  and Innovators.
                </em>
              </p>
              <p
                className="font13 orangeColor textRight"
                style={{ marginTop: "10px" }}
              >
                RoboLearn
              </p>
            </div>
          </QuoteWrapper>
        </ImageWrapper>
      </RightSide>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 400px;
  display: flex;
  align-items: flex-start;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 65%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 35%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;

const TabsWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #E5E7EB;
  margin-bottom: 24px;
`;

const TabButton = styled.button`
  background: transparent;
  padding: 12px 16px;
  border: none;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  color: #6B7280;

  &.active {
    color: #2563EB;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #2563EB;
    }
  }

  &:hover {
    color: #2563EB;
  }

  p {
    margin: 4px 0 0 0;
  }
`;

const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;
const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;

const ContentContainer = styled.div`
  margin-top: 30px;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  min-height: 120px;
  line-height: 1.6;
`;
