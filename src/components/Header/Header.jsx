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
              <div className="header__top_right">
                <Link to="#">
                  <i className='ri-login-circle-line'></i> Login
                </Link>
                <Link to="#">
                  <i className='ri-user-line'></i> Register
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    </header>
  )
}

export default Header