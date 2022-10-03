import React from "react";

const Banner = () => {
  return (
    <>
      <section className="fifth_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12 d-flex align-items-center">
              <div className="sec_right mt-5 mb-5" style={{ color: "white" }}>
                <span className="">Introducing</span>
                <h4 className="my-4">The SafeMoon Exchange</h4>
                <p className="mb-5">
                  The SafeMoon exchange is a revolutionary new idea that will
                  bring tokenomics to all of crypto on its platform. We call
                  this Cryptonomics.
                </p>
                <a href="" className="coming_soon">
                  Coming Soon
                </a>
              </div>
            </div>
            <div className="col-md-6 phone_img ">
              <div className="" data-aos="fade-up" data-aos-duration="2000">
                <img className="image-fluid" src="assets/iphone.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 text-center sixth_section" >
        <div className="container px-5">
          <div className="d-flex align-items-center justify-content-center flex-column flex-lg-row">
            <div className="d-flex align-items-center w-100 text-center imag">
              <div className="flex-fill w-100 p-2">
                <a href="">
                  <img src="/assets/bscscan.png" alt="" />
                </a>
              </div>
              <div className="flex-fill w-100 p-2">
                <a href="">
                  <img src="/assets/certik.png" alt="" />
                </a>
              </div>
              <div className="flex-fill w-100 p-2">
                <a href="">
                  <img src="/assets/nomics.png" alt="" />
                </a>
              </div>
            </div>
            <div className="d-flex align-items-center w-100 text-center imag">
              <div className="flex-fill w-100 p-2">
                <a href="">
                <img src="/assets/bscscan.png" alt="" />
                </a>
              </div>
              <div className="flex-fill w-100 p-2">
                <a href="">
                  <img src="/assets/coingecko.png" alt="" />
                </a>
              </div>
              <div className="flex-fill w-100 p-2">
                <a href="">
                  <img src="/assets/watcher.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
