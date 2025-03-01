import React from 'react';
import TopNavbar from "../components/Nav/TopNavbar";
import BootCamp from "../components/Sections/BootCamp";
import Footer from "../components/Sections/Footer"


export default function Explore() {
    return (
      <>
        <TopNavbar showSubMenu={false} />
        <BootCamp />
        <Footer />
      </>
    );
  }
