import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { HiSearch } from 'react-icons/hi'

import logo from '../../assets/img/car-wheel.png'
import profilePict from '../../assets/img/profile-picture/samantha-doe.png'
import msgIcon from '../../assets/img/msg-icon.svg'
import './style.css';

export const Navbar = () => {
  const navigate = useNavigate()
  const [isLogged, setIsLogged] = useState(true)

  const onSearchHandler = (e) => {
    e.preventDefault()
    const keyword = e.target.querySelector('input').value;
    console.log(keyword);
    navigate(`/search?name=${keyword}`)
  }

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-white position-fixed top-0 w-100 py-lg-4"
    >
      <div className="container d-flex align-items-center">
        <Link to='/' className="navbar-brand">
          <img
            className="logo"
            src={logo}
            alt="vehicle-rent-logo"
          />
        </Link>
        <div className="d-flex">
          {
            isLogged && (
              <div
                className="profile d-flex d-lg-none justify-content-between align-items-center"
              >
                {/* <Link to='/profile' className="profile-img">
                  <img
                    src={profilePict}
                    alt="profile-img"
                    className="profile-pict rounded-circle"
                  />
                </Link> */}
                <div className="dropdown">
                  <div className="profile-dropdown dropdown-toggle" aria-labelledby="dropdownMenuButton1" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img
                      src={profilePict}
                      alt="profile-img"
                      className="profile-pict rounded-circle"
                    />
                  </div>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><Link to='/profile' className="dropdown-item">Edit Profile</Link></li>
                    <li><a className="dropdown-item" href="#">Help</a></li>
                    <li><a className="dropdown-item" href="#">Log Out</a></li>
                  </ul>
                </div>
                <div className="message-notif position-relative ms-4 me-2">
                  <img
                    src={msgIcon}
                    alt="message"
                    className="message"
                  />
                  <div
                    className="count position-absolute rounded-circle d-flex justify-content-center align-items-center"
                  >
                    1
                  </div>
                </div>
              </div>
            )
          }
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse justify-content-lg-end" id="navbarNavAltMarkup">
          <div className="navbar-nav d-flex me-lg-5 justify-content-end flex-fill">
            <Link to='/' className="nav-link" aria-current="page" >Home</Link>
            <Link to='/vehicles' className="nav-link" >Vehicle Type</Link>
            <Link to='/histories' className="nav-link active" >History</Link>
            <Link to='/' className="nav-link" >About</Link>
            {
              isLogged &&
              <form onSubmit={onSearchHandler} className="input-group my-3 my-lg-0 ms-lg-5 me-lg-3">
                <input type="text" className="form-control border-end-0" placeholder="Search vehicle" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button type="submit" className="search-btn btn btn-outline-secondary" id="button-addon2">
                  <HiSearch className='search-icon text-secondary' />
                </button>
              </form>
            }
          </div>
          {
            isLogged && (
              <div
                className="profile d-none d-lg-flex justify-content-between align-items-center"
              >
                <div className="message-notif position-relative">
                  <img
                    src={msgIcon}
                    alt="message"
                    className="message"
                  />
                  <div
                    className="count position-absolute rounded-circle d-flex justify-content-center align-items-center"
                  >
                    1
                  </div>
                </div>
                {/* <Link to='/profile' className="profile-img">
                  <img
                    src={profilePict}
                    alt="profile-img"
                    className="profile-pict rounded-circle"
                  />
                </Link> */}
                <div className="dropdown">
                  {/* <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                  </button> */}
                  <div className="profile-dropdown dropdown-toggle" aria-labelledby="dropdownMenuButton1" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img
                      src={profilePict}
                      alt="profile-img"
                      className="profile-pict rounded-circle"
                    />
                  </div>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><Link to='/profile' className="dropdown-item">Edit Profile</Link></li>
                    <li><a className="dropdown-item" href="#">Help</a></li>
                    <li><a className="dropdown-item" href="#">Log Out</a></li>
                  </ul>
                </div>
              </div>
            )
          }
          {
            !isLogged && (
              <div className="auth d-flex flex-column flex-lg-row">
                <Link to="/login"  className="login-btn fw-normal btn rounded-3 mb-3 mb-lg-0" >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="register-btn fw-normal btn rounded-3 mb-3 mb-lg-0"
                  
                >
                  Register
                </Link>
              </div>
            )
          }
        </div>
      </div>
    </nav>
  )
}
