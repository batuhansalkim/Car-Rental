import React from 'react';
import {Container,Row,Col,ListGroup,ListGroupItem} from "reactstrap";
import { Link } from 'react-router-dom';
import "../../styles/footer.css";

const quickLinks = [
  {
    path:"/about",
    display:"About"
  },
  {
    path:"#",
    display:"Privacy Policy"
  },
  {
    path:"/cars",
    display:"Car Listing"
  },
  {
    path:"/blogs",
    display:"Blog"
  },
  {
    path:"/contact",
    display:"Contact"
  }
]
function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return <footer className='footer'>
    <Container>
      <Row>
        <Col lg="2" md="4" sm="12">
          <div className="logo">
            <h1>
              <Link to="/home" className='d-flex align-items-center gap-2'>
                <i className='ri-car-line'></i>
                <span>Rent Car <br /> Service</span>
              </Link>
            </h1>
          </div>
          <p className='footer__logo-content'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At velit perferendis quod saepe quisquam eveniet ea vero impedit. Unde labore qui nostrum accusantium ad? Modi iure necessitatibus sequi ipsa officiis.
          </p>
        </Col>

        <Col lg="4" md="4" sm="6">
          <div className="mb-4">
            <h5 className='footer__link-title'>Quick Links</h5>
            <ListGroup>
              {
                quickLinks.map((item,index)=>(
                  <ListGroupItem key={index} className='p-0 mt-3'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </div>
        </Col>

        <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Office Location</h5>
              <p className="office__info">Turkey,Bilecik, Sogut, Number 27</p>
              <p className="office__info">Phone: +0995345875365</p>

              <p className="office__info">Email: batuhansalkim11@gmail.com</p>

              <p className="office__info">Office Time: 05am - 12pm</p>
            </div>
          </Col>


          <Col lg="3" md="4" sm="12"> 
          <div className="mb-4">
            <h5 className='footer__link-title'>Newsletter</h5>
            <p className='section__description'>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="text" placeholder='email' />
              <span>
                <i className='ri-send-plane-line'></i>
              </span>
            </div>
          </div>
          </Col>
          <Col lg="12">
            <div className="footer__bottom">
              <p className='section__description d-flex align-items-center justify-content-center gap-1 pt-4'>
                <i className='ri-copyright-line'>
                  Copyright {year}, Developed by Muhibur and Batuhan. All right reserved.
                </i>
              </p>
            </div>
          </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer