import React from "react";
import { TiWarningOutline } from "react-icons/ti";
import Typed from 'react-typed';

const Hero = () => {
  return (
    <>
      <section className="hero_section">
        <div className="container">
          <div className="hero_left_para">
            <p>
              <TiWarningOutline
                size={20}
                style={{ marginRight: "10px", alignItems: "center" }}
              />
              <b>We've Evolved:</b>Support for V1 SafeMoon has been officially
              closed.
              <a href="#" style={{ color: "green" }}>
                Read more.
              </a>
            </p>
          </div>
        </div>

        <div className="hero_section_two">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="hero_left">
                  <p className="" style={{ textTransform: "uppercase" }}>
                    welcome to
                  </p>
                  <span className="hero_h2 "><Typed
                    
                    strings={['safemoon']}
                    typeSpeed={40}
                /></span>
                  <p
                    className=""
                    style={{
                      textTransform: "capitalize",
                      margin: "0 0 48px 0",
                    }}
                  >
                    Community-driven Innovation for Good
                  </p>
                  <div className="btn_info">
                    <button href="" className="bt col-md-8 col-sm-8 col-12">
                      Consolidate to v2 safemoon!
                    </button>
                    <a href="" className="link_first">
                      Buy v2
                    </a>
                    <a href="" className="link_sec">
                      Swap
                    </a>
                    <a
                      href=""
                      className="link_sec"
                      style={{ marginTop: "15px" }}
                    >
                      Live Chart
                    </a>
                  </div>
                  <p className="bottom_para">SafeMoon (SFM) V2 Contract:</p>
                  <div className="address_wrapper mb-5">
                    <span>0x42981d0bfbAf196529376E</span>
                    <img src="assets/copy.svg" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12 text-center">
                <div className="right_grid">
                  <p className="my-0" style={{ fontSize: "16px" }}>
                    Out Now:
                  </p>
                  <h4 style={{ fontSize: "24px" }}>SafeMoon Wallet</h4>
                  <p className="my-0" style={{ fontSize: "16px" }}>
                    Get it on:
                  </p>
                </div>
                <div className="right_img mt-3">
                  <a href="">
                    <img src="assets/google_play.png" alt="" />
                  </a>
                  <a href="">
                    <img src="assets/app_store.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* First section end */}
    </>
  );
};

export default Hero;
