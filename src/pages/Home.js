import React, { Component } from 'react'
import {FaChevronDown, FaStar} from 'react-icons/fa'
import NavbarLogOut from '../components/NavbarLogOut';
import Footer from '../components/Footer';
import '../assets/css/Home.css'

import testimonialImage from '../assets/img/testimonial-user-pict/edward-newgate.png';
import navigationIcon from '../assets/img/circle-chevron-arrow.svg'

import merapi from '../assets/img/popular/eric-muhr.png'
import telukBogam from '../assets/img/popular/iqx-azmi.png'
import bromo from '../assets/img/popular/manny-moreno.png'
import malioboro from '../assets/img/popular/chuttersnap.png'

export default class Home extends Component {
  render() {
    const imagePath = '../assets/img/popular/';
    const popularVehicles = [
      {
        name: 'Merapi',
        location: 'Yogyakarta',
        img: merapi,
      },
      {
        name: 'Teluk Bogam',
        location: 'Kalimantan',
        img: telukBogam,
      },
      {
        name: 'Bromo',
        location: 'Malang',
        img: bromo,
      },
      {
        name: 'Malioboro',
        location: 'Yogyakarta',
        img: malioboro,
      },
    ]
    return (
      <>
        <NavbarLogOut setLogin={this.props.setLogin} />

        {/*=============== Jumbotron =============== */}
        <section className="jumbotron container-fluid pt-5">
          <div className="hero-content container">
            <h1>Explore and Travel</h1>
            <p>Vehicle Finder</p>
            <div className="aesthetic-line rounded"></div>
            <form className="vehicle-finder-form mt-5" action="#">
              <div className="row select-group">
                <div className="my-2 col-6 position-relative">
                  <select
                    className="filter-input form-select"
                    aria-label="Default select example"
                  >
                    <option defaultValue>Location</option>
                    <option defaultValue="1">One</option>
                    <option defaultValue="2">Two</option>
                    <option defaultValue="3">Three</option>
                  </select>
                  <FaChevronDown />
                </div>

                <div className="my-2 col-6 position-relative">
                  <select
                    className="filter-input form-select"
                    aria-label="Default select example"
                  >
                    <option defaultValue>Type</option>
                    <option defaultValue="1">One</option>
                    <option defaultValue="2">Two</option>
                    <option defaultValue="3">Three</option>
                  </select>
                  <FaChevronDown />
                </div>
                <div className="my-2 col-6 position-relative">
                  <select
                    className="filter-input form-select"
                    aria-label="Default select example"
                  >
                    <option defaultValue>Payment</option>
                    <option defaultValue="1">One</option>
                    <option defaultValue="2">Two</option>
                    <option defaultValue="3">Three</option>
                  </select>
                  <FaChevronDown />
                </div>
                <div className="my-2 col-6 position-relative">
                  <select
                    className="filter-input form-select"
                    aria-label="Default select example"
                  >
                    <option defaultValue>Date</option>
                    <option defaultValue="1">One</option>
                    <option defaultValue="2">Two</option>
                    <option defaultValue="3">Three</option>
                  </select>
                  <FaChevronDown />
                </div>
              </div>
              <button className="btn mt-4 search-btn">Explore</button>
            </form>
          </div>
        </section>

        {/*=============== Popular =============== */}
        <section className="popular container px-lg-4 px-5">
          <div
            className="head-section d-flex justify-content-center justify-content-md-start justify-content-md-between w-100 mb-5 mb-lg-0 align-items-center"
          >
            <h2>Popular in town</h2>
            <a className="d-md-block d-none" href="/vehicle-type.html"
              >View all <span><i className="icon fa-solid fa-chevron-right"></i></span
            ></a>
          </div>
          <div
            className="popular-vehicles d-flex flex-column align-items-center flex-md-row row"
          >
            {popularVehicles.map((vehicle, idx) => (
              <div key={idx} className="image-wrapper position-relative col">
                <img src={vehicle.img} alt="" srcSet="" />
                <div className="image-desc position-absolute">
                  <h3 className="vehicle-name">{vehicle.name}</h3>
                  <p className="location">Yogyakarta</p>
                </div>
              </div>
            ))}
          </div>
          <a className="d-block d-md-none text-center mt-4" href="/"
            >View all <span><i className="icon fa-solid fa-chevron-right"></i></span
          ></a>
        </section>

        {/*=============== Testimonials =============== */}
        <section className="testimonial container px-lg-4 px-5">
          <h2 className="text-center text-md-start">Testimonials</h2>
          <div className="testimonial-wrapper row flex-row-reverse">
            <div className="image-col col-12 col-md-6 d-flex justify-content-center">
              <div className="image-wrapper position-relative">
                <img
                  className="user-image"
                  src={testimonialImage}
                  alt="testimonial user pict"
                />
                <div className="navigation position-absolute">
                  <a className="link-light disabled" href="#">
                    <img
                      className="prev-image disabled"
                      src={navigationIcon}
                      alt="prev-user"
                    />
                  </a>
                  <a className="link-light" href="#">
                    <img
                      className="next-image"
                      src={navigationIcon}
                      alt="next-user"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="feedback-col col-12 col-md-6 mt-5 mt-md-0">
              <div className="feedback d-flex flex-column justify-content-center h-100">
                <div className="stars text-center text-md-start">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="desc text-center text-md-start">
                  <p>
                    ”It was the right decision to rent vehicle here, I spent less
                    money and enjoy the trip. It was an amazing experience to have a
                    ride for wildlife trip!”
                  </p>
                </div>
                <div className="user text-center text-md-start">
                  <p className="name">Edward Newgate</p>
                  <p className="occupation">Founder Circle</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </>
    )
  }
}
