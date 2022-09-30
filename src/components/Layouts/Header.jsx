import React from 'react'
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg header" id='top'>
    <div className="container main" >
      <div className="left">
      <Link className="navbar-brand" to="/"><img src="assets/logo.svg" style={{width: '50px'}} alt="logo" /></Link>
      </div>
      <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon text-white" />
      </button>
      <div className="collapse navbar-collapse right" id="navbarScroll">
        <ul className="navbar-nav my-lg-0 navbar-nav-scroll text-center" >
          <li className="nav-item">
            <Link className="nav-link  after_btn" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Our Team</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">swap</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">merch</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">partners</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">markets</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">how to buy</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Header