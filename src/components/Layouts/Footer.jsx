import React from "react";
import {FaSun} from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <footer
          className="text-center text-lg-start text-white"
          style={{ backgroundColor: "#24282f" }}
        >
          <div className="container p-4 pb-0">
            <section className>
              <div className="row footer_sec">
                <div className="col-md-7 col-12">
                  <div className="d-flex mb-5 mb-lg-0 align-items-center justify-content-end">
                    <div className="flex-fill">
                      <span className="footer_logo">
                        <img src="assets/logo.svg" alt="" />
                      </span>
                    </div>
                    <div className="flex-fill w-100 ">
                      <h4>SafeMoon - Innovating for Good</h4>
                      <p>
                        Building blockchain, commerce, metaverse and NFT
                        products to derive new kinds of value from crypto
                        technology and to apply it to increasingly better use.
                        Advancing our innovations to every part of the world.
                      </p>
                      <p></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-12">
                  <div class="row">
                    <div class="text-lg-end text-center col">
                      <ul class="list-unstyled ">
                        <li class="pb-2">
                          <a href="/#">Wallet Tracker</a>
                        </li>
                        <li class="pb-2">
                          <a href="/#">Branding</a>
                        </li>
                        <li class="pb-2">
                          <a href="#" target="_blank">
                            White Paper
                          </a>
                        </li>
                        <li class="pb-2">
                          <a href="#">Contract</a>
                        </li>
                        <li class="pb-2">
                          <a href="#">Status</a>
                        </li>
                        <li class="pb-2">
                          <a href="#">SafeMoon Card</a>
                        </li>
                      </ul>
                    </div>
                    <div class="text-lg-end text-center col">
                      <ul class="list-unstyled">
                        <li class="pb-2">
                          <a href="#">Support</a>
                        </li>
                        <li class="pb-2">
                          <a href="#">List a Token</a>
                        </li>
                        <li class="pb-2">
                          <a href="#">Careers</a>
                        </li>
                        <li class="pb-2">
                          <a target="_blank" rel="nofollow noopener" href="/#">
                            Education
                          </a>
                        </li>
                        <li class="pb-2">
                          <a href="#">Wallpaper</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="bg-alt py-3">
            <div className="container">
              <div className="align-items-center text-center row">
                <div className="lst">
                  <p>
                    <a href="#">Terms of Use</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Cookies Policy</a>
                    <a href="#">Wallet EULA</a>
                    <a href="#">Wallet Privacy</a>
                    <a href="#">Disclaimer</a>
                    <a href="#">FAQ</a>
                    <a href="#">Our Partners#</a>
                  </p>
                  <p className="mb-0">
                    Copyright © 2022 SafeMoon US LLC | All Rights Reserved.
                    <a
                      href="#"
                      id="themeToggle"
                      className="text-info ms-2"
                      aria-label="Change website theme"
                    >
                      <FaSun />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
