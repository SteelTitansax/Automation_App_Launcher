import React from 'react'
import './Navbar.css'


const Navbar = ()  => ( 
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <img src="https://en.pimg.jp/070/538/017/1/70538017.jpg" className="logo-image mr-2" alt="logo"/>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link text-white" href="/">RPA Launcher</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link text-white" href="/about">About</a>
      </li>
    </ul>
  </div>
</nav>
   )

export default Navbar;