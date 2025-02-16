import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  return (
    <Wrapper id="pricing">
      <div className="lightBg" style={{ padding: "30px 0" }}>
        <div className="container">
          <HeaderInfo>
          <h1 className="font40 extraBold">Check Our Pricing</h1>
<p className="font13">
  Whether you're just starting out or ready to scale, we have the perfect plan for you.  
  <br />
  Go from zero to one, one to hundred, or take the full journey—it's your choice.
</p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                icon="monitor"
                price="₹4,999/mo"
                title="Zero to One"
                text="0-1 is a hands-on course for absolute beginners, covering robot types, electronics, microcontrollers (Arduino, ESP), and key components like sensors, actuators, and motor drivers. You'll design and test in NVIDIA Omniverse, learn C++ programming with PID control, and explore ROS2 for robot control. By the end, you'll build a semi-autonomous robot dog, mastering robotics from the ground up!"
                offers={[
                  { name: "Certified Course", cheked: true },
                  { name: "9 modules", cheked: true },
                  { name: "30 Live Sessions", cheked: true },
                  { name: "Weekly 3 Classes", cheked: true },
                  { name: "1 Doubt Session/Week", cheked: true },
                  { name: "Industrial Based Project", cheked: true },
                ]}
                action={() => alert("RazorPay will be here")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="browser"
                price="₹5,999/mo"
                title="One to Hundred"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."

                offers={[
                  { name: "Product Offer", cheked: true },
                  { name: "Offer", cheked: true },
                  { name: "Product Offer #2", cheked: true },
                  { name: "Product", cheked: true },
                  { name: "Product Offer", cheked: true },
                ]}
                action={() => alert("RazorPay will be here")}
              />
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;




