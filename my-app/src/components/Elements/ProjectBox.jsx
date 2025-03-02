import React from "react";
import styled from "styled-components";

export default function ProjectBox({ img, title, text, action, hoverEnabled = true, height = "180px" }) {
  return (
    <Wrapper>
      <ImgBtn 
        className="aniamte" 
        onClick={action ? () => action() : null}
        $hoverEnabled={hoverEnabled}
        $height={height}
      >
        <img className="radius8" src={img} alt="project"></img>
      </ImgBtn>
      <h3 className="font20 extraBold">{title}</h3>
      <p className="font13">{text}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  @media (max-width: 768px) {
    text-align: center;
  }
  img {
    width: 100%;
    height: auto;
    margin: 20px 0;
  }
  h3 {
    padding-bottom: 10px;
  }
`;
const ImgBtn = styled.button`
  background-color: transparent;
  border: 0px;
  outline: none;
  padding: 0px;
  margin: 0px;
  img {
    @media (max-width: 768px) {
      width: 180px;
      height: auto;
    }
    @media (min-width: 769px) {
      height: ${props => props.$height || "180px"};
      width: auto;
    }
  }
  ${props => props.$hoverEnabled && `
    :hover > img {
      opacity: 0.5;
    }
    cursor: pointer;
  `}
`;