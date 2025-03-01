import React, { useState, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

// Assets
import ContactImg1 from "../../assets/img/svgs/study.svg";
import ContactImg2 from "../../assets/img/svgs/tutorial.svg";
import ContactImg3 from "../../assets/img/svgs/working.svg";

export default function Contact() {
  const [formData, setFormData] = useState({
    fname: '',
    email: '',
    subject: '',
    message: ''
  });
  const formRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbyNAc8UQfhJV5oYmLYmK_Xwg7gxolsbGqISL7fBAr_ZJQXT_qIVp0_Gc4p3Zjf7IMa-/exec';
  
    try {
      const response = await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors', // Bypasses CORS policy
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
  
      toast.success('Message sent successfully!');
  
      setFormData({ fname: '', email: '', subject: '', message: '' });
  
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again.');
    }
  };

  const handleButtonClick = () => {
    formRef.current.requestSubmit();
  };

  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Let's get in touch</h1>
            <p className="font13">
            Got questions, ideas, or just want to geek out about robots?<br />
            We'd love to hear from you! Whether you're a curious beginner, a tech enthusiast, or a future innovator, let's connect and build something awesome together.<br />
            Drop us a message - because every great invention starts with a conversation! 🚀
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form ref={formRef} onSubmit={handleSubmit}>
                <label className="font13">First name:</label>
                <input 
                  type="text" 
                  id="fname" 
                  name="fname" 
                  value={formData.fname}
                  onChange={handleInputChange}
                  className="font20 extraBold" 
                />
                <label className="font13">Your Email:</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className="font20 extraBold" 
                />
                <label className="font13">Subject:</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="font20 extraBold" 
                />
                <label className="font13">Message:</label>
                <textarea 
                  rows="4" 
                  cols="50" 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleInputChange}
                  className="font20 extraBold" 
                />
              </Form>
              <SumbitWrapper className="flex">
                <ButtonInput 
                  type="button" 
                  value="Send Message" 
                  onClick={handleButtonClick}
                  className="pointer animate radius8" 
                  style={{ maxWidth: "220px" }} 
                />
              </SumbitWrapper>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div style={{ width: "50%" }} className="flexNullCenter flexColumn">
                <ContactImgBox>
                  <img src={ContactImg1} width={180} height={204} alt="office" className="radius6" />
                </ContactImgBox>
                <ContactImgBox>
                  <img src={ContactImg2} width={180} height={295} alt="office" className="radius6" />

                </ContactImgBox>
              </div>
              <div style={{ width: "50%" }}>
                <div style={{ marginTop: "100px" }}>
                  <img src={ContactImg3} width={window.innerWidth <= 760 ? 200 : 278} height={330} alt="office" className="radius6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px; 
  align-self: flex-end; 
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;









