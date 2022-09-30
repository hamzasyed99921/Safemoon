import React from "react";

const Aboutus = () => {
  return (
    <>
      <div className="sec_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="sec_right" style={{ color: "white" }}>
                <span className="">About us</span>
                <h4 className="my-4">
                  A human-focused technology and innovation business expanding
                  blockchain technologies for a brighter tomorrow.
                </h4>
                <p>
                  Deeply connected to and driven by our award winning community
                  (The SafeMoon Army), we are innovating for good. Building
                  blockchain, commerce, metaverse and NFT products to derive new
                  kinds of value from crypto technology and to apply it to
                  increasingly better use.
                  <br />
                  <br /> We are now addressing the second part of our mission –
                  the expansion and channeling of our technology to propel new
                  innovations for good, and a Venture Philanthropy model to
                  advance those innovations to every part of the world.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="right_image text-center">
                <img src="assets/V6.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
