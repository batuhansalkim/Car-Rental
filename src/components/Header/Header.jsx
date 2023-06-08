import React from 'react'
import {Container,Row,Col} from "reactstrap";
import { Link } from 'react-router-dom';
import "../../styles/header.css";

function Header() {
  return (
    <header className='header'>

      <div className="header__top">
        <Container>

          <Row>

            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help?</span>
                <span className='header__top__help'>
                  <i className='ri-phone-fill'></i>+1-202-505-0149
                </span>
              </div>
            </Col>
            
            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <Link to="#" className='d-flex align-items-center gap-1'>
                  <i className='ri-login-circle-line'></i> Login
                </Link>
                <Link to="#" className='d-flex align-items-center gap-1'>
                  <i className='ri-user-line'></i> Register
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className='header__middle'>
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4" >
              <div className="logo">
                <h1>
                  <Link to="/home" className='d-flex align-items-center gap-3'>
                    <i className='ri-car-line'></i>
                    <span>Rent Car <br />Service</span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4" >
                <div className='header__location'>
                  <span><i className='ri-earth-line'></i></span>
                  <div className='header__location-content'>
                    <h4>Turkiye</h4>
                    <h6>Bilecik City, Sogut</h6>
                  </div>
                </div>
            </Col>

            <Col lg="3" md="3" sm="4" >
                <div className="header__location">
                  <span><i className='ri-time-line'></i></span>
                  <div className='header__location-content'>
                    <h4>Sunday to Friday</h4>
                    <h6>10am - 7pm</h6>
                  </div>
                </div>
            </Col>

            <Col lg="2" md="3" sm="0">
              <button className='header__btn btn d-flex align-items-center justify-content-end text-end'>
                <Link to="/contact">
                 <i className='ri-phone-line'></i> Request a call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  )
}

export default Header