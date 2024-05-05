import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-success">
        <div className="container">
          <a className="navbar-brand" href="">Guvi</a>
          <div className="collapse navbar-collapse " id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link text-white" to='/'>All</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to='/Fullstack  '>Full Stack Developement</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to='/cybersecurity'>Cyber Security</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to='/datascience'>Data Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to='/carrers'>Carrers</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
