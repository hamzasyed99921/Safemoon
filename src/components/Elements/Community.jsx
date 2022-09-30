import React from 'react'
import { FaCat } from "react-icons/fa";
import { TbUsers } from "react-icons/tb";
import { BsArrowRight } from "react-icons/bs";
import { ImDownload3 } from "react-icons/im";
import { AiOutlineDollar } from "react-icons/ai";

const Community = () => {
  return (
    <>
        <section className="third_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="sec_right" style={{ color: "white" }}>
                <span className="">The Token</span>
                <h4 className="my-4">
                  The SafeMoon Protocol V2 is a community focused DeFi token
                  that forms part of the expanding SafeMoon ecosystem.
                </h4>
                <p>Four simple functions occur during each trade</p>
                <div data-aos="fade-up" data-aos-duration="3000">
                  <div className="d-flex  mt-5">
                    <div className="d-flex align-items-center">
                      <FaCat size={35} color={"#21bbb3"} />
                    </div>
                    <div className="mx-2 ">
                      <h2 style={{ marginBottom: "0px", fontSize: "25px" }}>
                        Reflections
                      </h2>
                      <p
                        className=""
                        style={{ color: "#6c757d", fontWeight: "800" }}
                      >
                        4% is Redistributed to all existing holders
                      </p>
                    </div>
                  </div>
                  <div className="d-flex ">
                    <div className="d-flex align-items-center">
                      <FaCat size={35} color={"#21bbb3"} />
                    </div>
                    <div className="mx-2">
                      <h2 style={{ marginBottom: "0px", fontSize: "25px" }}>
                        LP Acquisition
                      </h2>
                      <p
                        className=""
                        style={{ color: "#6c757d", fontWeight: "800" }}
                      >
                        3% is added to liquidity
                      </p>
                    </div>
                  </div>
                  <div className="d-flex ">
                    <div className="d-flex align-items-center">
                      <FaCat size={35} color={"#21bbb3"} />
                    </div>
                    <div className="mx-2">
                      <h2 style={{ marginBottom: "0px", fontSize: "25px" }}>
                        Token Burn
                      </h2>
                      <p
                        className=""
                        style={{ color: "#6c757d", fontWeight: "800" }}
                      >
                        2% of tokens are burned
                      </p>
                    </div>
                  </div>
                  <div className="d-flex ">
                    <div className="d-flex align-items-center">
                      <FaCat size={35} color={"#21bbb3"} />
                    </div>
                    <div className="mx-2">
                      <h2 style={{ marginBottom: "0px", fontSize: "25px" }}>
                        Growth Fund
                      </h2>
                      <p
                        className=""
                        style={{ color: "#6c757d", fontWeight: "800" }}
                      >
                        1% is added to the SafeMoon Ecosystem Growth Fund
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="right_image text-center">
                <img src="assets/spaceman-stars.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="forth_section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12 my-4">
              <div className="d-flex align-items-center">
                <div className="me-5">
                  <div className="about-icon shadow-sm">
                    <TbUsers color={"white"} size={35} />
                  </div>
                </div>
                <div className="right_flex">
                  <h4>Community Focused</h4>
                  <p>
                    Community Focused and fair launch. The dev team burned all
                    of their tokens and participated with everyone else.
                  </p>
                  <a href="#" className="join_us">
                    Join Us <BsArrowRight color={"#21bbb3"} style={{}} />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 my-4">
              <div className="d-flex align-items-center">
                <div className="me-5">
                  <div className="about-icon shadow-sm">
                    <ImDownload3 color={"white"} size={35} />
                  </div>
                </div>
                <div className="right_flex">
                  <h4>Automatic LP</h4>
                  <p>
                    Every trade contributes towards auto-generating liquidity
                    that goes into multiple pools used by exchanges
                  </p>
                  <a href="#" className="join_us">
                    View BscScan <BsArrowRight color={"#21bbb3"} style={{}} />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 my-4">
              <div className="d-flex align-items-center">
                <div className="me-5">
                  <div className="about-icon shadow-sm">
                    <TbUsers color={"white"} size={35} />
                  </div>
                </div>
                <div className="right_flex">
                  <h4>RFI Static Rewards</h4>
                  <p>
                    Holders earn passive rewards through static reflection as
                    they watch their balance of SafeMoon grow indefinitely.
                  </p>
                  <a href="#" className="join_us">
                    Check Your Wallet{" "}
                    <AiOutlineDollar color={"#21bbb3"} style={{}} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Community