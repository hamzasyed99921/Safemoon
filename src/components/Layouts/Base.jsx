import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {Link} from 'react-scroll' 
import ScrollToTop from "react-scroll-to-top";
import {BsFillArrowUpSquareFill} from 'react-icons/bs'

const base = (props) => {
  return (
    <>
  
      <ScrollToTop className="scroll_btn"  smooth component={<img src="assets/top.svg" alt="" style={{}}/>} />
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default base;
