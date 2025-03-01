import React, { useState } from "react";
import styled from "styled-components";
import HeaderImage from "../../assets/gifs/zeroToOne.gif";
import ProjectBox from "../Elements/ProjectBox";
import ProjectImg1 from "../../assets/gifs/community.gif";
import ProjectImg2 from "../../assets/gifs/industryTraining.gif";
import ProjectImg3 from "../../assets/gifs/liveClass.gif";
import ProjectImg4 from "../../assets/gifs/LifetimeCommunity.gif";
import HelpImage from "../../assets/img/helpImage.jpg";

export default function Header() {
  const [activeTab, setActiveTab] = useState(0);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(true);
  const [name, setName] = useState('');

  const tabContent = [
    {
      title: "Overview",
      content: (
        <div style={{ color: "#000" }}>
          <h1>What You Will Learn in This Masterclass (Arranged Step-by-Step for Robotics Development)</h1>
          <p>
            <b>1️⃣ Understand the Fundamentals of Robotics</b> : Learn what robots are, their real-world applications, and the key components that make them function. <br />
            <b>2️⃣ Learn the Basics of Electronics, Sensors, and Actuators</b> : Explore how robots interact with the physical world using sensors (for perception) and actuators (for movement).<br />
            <b>3️⃣ Get an Introduction to Microcontrollers (Arduino) & Microprocessors (Raspberry Pi)</b> : Understand the differences, applications, and how these computing units control robotic systems.<br />
            <b>4️⃣ Understand Basic Kinematics and Dynamics for Robotic Motion</b> : Learn how robots calculate movement and forces to achieve precise control over their actions.<br />
            <b>5️⃣ Learn About Control Algorithms in Robotics</b> : Explore different types of control algorithms:<br />
            <b>&nbsp;&nbsp;&nbsp; • PID Control (Proportional-Integral-Derivative)</b> : Used in balancing robots and precise movement.<br />
            <b>&nbsp;&nbsp;&nbsp; • Model Predictive Control (MPC)</b> : Applied in self-driving cars and advanced motion planning.<br />
            <b>&nbsp;&nbsp;&nbsp; • State Machine Control</b> : Used in task automation for industrial robots.<br />
            <b>6️⃣ Learn About Robot Operating System (ROS) and Its Importance</b> : Discover why ROS is essential for modern robotics, enabling modular control and communication between different robotic components.<br />
            <b>7️⃣ Explore Different Robotics Algorithms and Their Usage</b> : Learn the core algorithms that make robots autonomous and intelligent:<br />
            <b>&nbsp;&nbsp;&nbsp; • Path Planning Algorithms (A, Dijkstra, RRT)*</b> : Used for navigation in dynamic environments.<br />
            <b>&nbsp;&nbsp;&nbsp; • SLAM (Simultaneous Localization and Mapping)</b> : Helps robots map unknown areas while navigating.<br />
            <b>8️⃣ Explore the Role of Artificial Intelligence in Robotics</b> : See how AI helps robots perceive, analyze, and automate tasks in real-world scenarios.<br />
            <b>9️⃣ Gain Hands-on Experience with a Mini-Project</b> : Apply what you've learned by building and simulating a virtual robot, integrating sensors, movement, control algorithms, and AI for automation.<br />
            🚀 Perfect for Beginners or Anyone Curious About Robotics & AI!
          </p>
          <h1 style={{ marginTop: "10px" }}>About the Masterclass:</h1>
          <p>
            About the Masterclass:
            This introductory Robotics & AI Masterclass is designed for complete beginners who want to explore the fascinating world of robotics. The session covers fundamental concepts, from electronics and programming to AI and simulation, providing a solid foundation to start your robotics journey. Participants will learn how robots perceive their environment using sensors, make decisions using AI, and execute tasks through actuators. The class also introduces key tools like ROS for robotic control and NVIDIA Omniverse for simulation, ensuring a hands-on learning experience. By the end, attendees will apply their knowledge in a practical project, bringing a virtual robot to life.
          </p>
          <h1 style={{ marginTop: "10px" }}>Who is This Masterclass For?</h1>
          <p>This masterclass is perfect for beginners, students, and tech enthusiasts who are curious about robotics and AI. Whether you're a hobbyist looking to build your first robot, a student exploring STEM fields, or someone interested in automation and AI, this session will provide valuable insights. No prior experience is required—just a passion for learning and curiosity about the future of technology!</p>

          <div className="row textCenter">
            <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
              <ProjectBox
                hoverEnabled={false}
                height="80px"
                img={ProjectImg3}
                text="Live Classes"
              />
            </div>
            <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
              <ProjectBox
                hoverEnabled={false}
                height="80px"
                img={ProjectImg2}
                text="Industry Ready Projects"
              />
            </div>
            <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
              <ProjectBox
                hoverEnabled={false}
                height="80px"
                img={ProjectImg4}
                text="Lifetime Community"
              />
            </div>
            <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
              <ProjectBox
                hoverEnabled={false}
                height="80px"
                img={ProjectImg1}
                text="Personalized Assistance"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Curriculum",
      content: (
        <div style={{ color: "#000" }}>
          <h1>Topics included in the bootcamp</h1>
          <p>
            • <b>Introduction to robotics:</b> we'll cover fundamentals of robotics, types of robots, building blocks of robot and applications of robotics as well as future of robotics.<br />
            • <b>Introduction to design and simulation:</b> Understand fundamental 3D modeling concepts, how to design robotic components with Fusion360 and SolidWorks, Robot theory (kinematic, dynamics, Path planning, motion planning, control algorithms), intro to simulation environment (NVIDIA Omniverse), testing robots in simulated environment.<br />
            • <b>Basics of electrical and electronics:</b> Understanding current/voltage/resistance, introduction to breadboard/Multimeter/circuit design, Practical application (Diode Rectifier Circuit) and hands-on activities.<br />
            • <b>Microcontroller and Processor:</b> Introduction to microcontroller/microprocessors (AVR, ARM, PIC, ESP) and basic Architecture, Introduction to Arduino (Programming with C/C++), some projects and basic integration with sensor and actuator.<br />
            • <b>Actuators and Sensors:</b> Introduction to actuators & sensors, different types of actuators & sensors, and their working principles, in-depth implementation strategy for sensors and actuators, integrating sensors and motors, using drivers and network communication devices, with Microcontroller.<br />
            • <b>Introduction to Programming for Robotics:</b> C++ for embedded systems and ROS, Logic Building using C++ for Control Algorithms.<br />
            • <b>Robot Operating System (ROS):</b> Introduction, Application and architecture of ROS, Working with ROS Commands, Creating Simple ROS Nodes in C++, ROS with Arduino.<br />
            • <b>GUI DEVELOPMENT:</b> Understanding GUI framework (Qt using C++) and building a GUI for robot.<br />
            • <b>PROJECT:</b> Building a Semi-Autonomous Industrial Robot Dog.<br />
          </p>
        </div>
      )
    },
    {
      title: "Help",
      content: (
        <div style={{ color: "#000" }}>
          <h1>For more details about the course</h1>
          <p style={{ fontSize: "16px" }}>If you have any question regarding the course and couldn't find the answer on this page, feel free to contact us</p>
          <div style={{
            display: "flex",
            gap: "15px",
            marginTop: "10px"
          }}>
            <div style={{ flex: "35%" }}>
              <img
                src={HelpImage}
                alt="Contact support"
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  objectFit: "cover"
                }}
              />
            </div>
            <div style={{ flex: "60%", marginLeft: "20px" }}>
              <h2 style={{ fontSize: "18px", lineHeight: "1.6" }}>
                Message us on Whatsapp
              </h2>
              <WhatsAppLink 
                href="https://wa.me/9878555767"
                target="_blank"
                rel="noopener noreferrer"
              >
                9878555767
              </WhatsAppLink>
            </div>
          </div>
        </div>
      )
    }
  ];

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!value) {
      setEmailError('Email is required');
    } else if (!validateEmail(value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    setPhone(value);

    if (!value) {
      setPhoneError('Phone number is required');
    } else if (!validatePhone(value)) {
      setPhoneError('Please enter 10 digits phone number');
    } else {
      setPhoneError('');
    }
  };

  const isFormValid = () => {
    return (
      name.trim() !== '' &&
      email.trim() !== '' &&
      !emailError &&
      phone.trim() !== '' &&
      !phoneError &&
      isAuthorized
    );
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const scrollToRegistration = () => {
    const registrationForm = document.querySelector('#registrationForm');
    registrationForm?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Wrapper id="home" className="container flexSpaceCenter" style={{ marginTop: "0px" }}>
        <LeftSide className="flexCenter">
          <div>
            <h1 className="extraBold text-3xl md:text-4xl font-semibold" style={{ color: "#000" }}>1-Hour Masterclass: Introduction to Robotics & AI (0-1 Series for Complete Beginners)
            </h1>
            <HeaderP className="font13" style={{ width: "100%" }}>
              Discover the exciting world of robotics and AI in this beginner-friendly masterclass! Learn how robots work, from basic electronics and sensors to programming and artificial intelligence. Explore how robots perceive their surroundings, make decisions, and perform tasks using cutting-edge technologies like ROS and simulation tools. Through hands-on demos and a mini-project, you'll see how to design, program, and simulate a virtual robot. Whether you're curious about robotics or want to start building your own, this session will give you the perfect foundation to begin your journey!
            </HeaderP>
            <TabsWrapper>
              {tabContent.map((tab, index) => (
                <TabButton
                  key={index}
                  className={activeTab === index ? "active" : ""}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.title}
                </TabButton>
              ))}
            </TabsWrapper>
            <ContentContainer style={{ marginBottom: "20px" }}>
              {tabContent[activeTab].content}
            </ContentContainer>
            <div>
            </div>
          </div>
        </LeftSide>
        <RightSide style={{ border: "1px solid #E5E7EB", borderRadius: "8px" }}>
          <ImageWrapper>
            <Img
              src={HeaderImage}
              alt="office"
              style={{ zIndex: 9, width: "100%", borderTopLeftRadius: "8px", borderTopRightRadius: "8px", padding: "10px" }}
            />
          </ImageWrapper>
          <RegisterationForm id="registrationForm">
            <div>
              <FormLabel>Name <RequiredStar>*</RequiredStar></FormLabel>
              <FormInput
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={handleNameChange}
                required
              />

              <FormLabel>Email <RequiredStar>*</RequiredStar></FormLabel>
              <FormInput
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                required
              />
              {emailError && <ErrorMessage>{emailError}</ErrorMessage>}

              <FormLabel>Phone Number (Enter WhatsApp Number) <RequiredStar>*</RequiredStar></FormLabel>
              <FormInput
                type="tel"
                placeholder="Enter 10 digit phone number"
                value={phone}
                onChange={handlePhoneChange}
                maxLength="10"
                required
              />
              {phoneError && <ErrorMessage>{phoneError}</ErrorMessage>}

              <CheckboxContainer>
                <CheckboxInput
                  type="checkbox"
                  id="authorization"
                  checked={isAuthorized}
                  onChange={(e) => setIsAuthorized(e.target.checked)}
                  required
                />
                <CheckboxLabel htmlFor="authorization">
                  I authorize RoboLearn to reach out to me with updates and notifications via Email, SMS, WhatsApp and RCS.
                </CheckboxLabel>
              </CheckboxContainer>

              <RegisterButton
                type="submit"
                disabled={!isFormValid()}
              >
                Register for masterclass for free
              </RegisterButton>
            </div>
          </RegisterationForm>
        </RightSide>
      </Wrapper>
      <FloatingDiv onClick={scrollToRegistration}>
        <div>
          <div className="font-bold text-lg" style={{ marginBottom: "3px" }}>Free</div>
          <div style={{ fontSize: "12px" }}>Limited Seats Available</div>
        </div>
        <div className="flex items-center">
          Register Now <span style={{ marginLeft: "5px" }}>&gt;</span>
        </div>
      </FloatingDiv>
    </>
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
    order: 1;
    margin: 25px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 35%;
  height: 100%;
  margin-left: 30px;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  padding: 15px 0 15px 0;
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
  font-size: 16px;
  width: 33%;
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

  &:hover:not(.active) {
    color: #000;
    background-color: #e3e3e3;
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
  border-radius: 8px;
  min-height: 120px;
  line-height: 1.6;
`;
const RegisterationForm = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  padding-top: 15px;
  border-top: 1px solid #E5E7EB;
`;

const FormInput = styled.input`
  width: 90%;
  padding: 8px 12px;
  margin: 8px 0 16px 0;
  border: 1px solid #E5E7EB;
  border-radius: 4px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: #2563EB;
  }
`;

const FormLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #374151;
`;

const RequiredStar = styled.span`
  color: #ff0000;
`;

const ErrorMessage = styled.div`
  color: #dc2626;
  font-size: 12px;
  margin-top: -12px;
  margin-bottom: 12px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

const CheckboxInput = styled.input`
  margin-top: 4px;
  cursor: pointer;

`;

const CheckboxLabel = styled.label`
  font-size: 12px;
  color: #6B7280;
  line-height: 1.4;
  cursor: pointer;

`;

const RegisterButton = styled.button`
  width: 100%;
  padding: 8px;
  background-color: #2563EB;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 20px;

  &:hover:not(:disabled) {
    background-color: #1d4ed8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const WhatsAppLink = styled.a`
  font-size: 16px;
  line-height: 1.6;
  color: rgb(37 99 235);
  cursor: pointer;
  text-decoration: none;
  transition: text-decoration 0.2s ease;

  &:hover {
    text-decoration: underline;
  }
`;

const FloatingDiv = styled.div`
  display: none;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #2563EB;
  color: #fff;
  padding: 12px 24px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  z-index: 1000;
  width: 90%;
  max-width: 400px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #E5E7EB;

  @media (max-width: 960px) {
    display: flex;
  }
`;