import React from 'react'
import HeroSlider from '../components/UI/HeroSlider'
import Helmet from '../components/Helmet/Helmet';
import FindCarForm from '../components/UI/FindCarForm';
import "../styles/hero-slider.css";
import { Container,Row,Col } from 'reactstrap';
import AboutSection from '../components/UI/AboutSection';
import ServicesList from '../components/UI/ServicesList';
import CarItem from '../components/UI/CarItem';
import carData from "../assets/data/carData";

function Home() {
  return <Helmet title="Home">
    <section className='p-0 hero__slider-section'>
      <HeroSlider/>
      
      <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Find your best car here</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div>
    </section>
    <AboutSection/>
    
    <section>
      <Container>
        <Row>
          <Col lg="12" className='mb-5 text-center'>
            <h6 className='section__subtitle'>See our</h6>
            <h2 className='section__title'>Popular Services</h2>
          </Col>

          <ServicesList/>
        </Row>
      </Container>
      
    </section>

    <section>
      <Container>
        <Row>
          <Col lg="12" className='text-center mb-5'>
            <h6 className='section__subtitle'>Come With</h6>
            <h2 className='section__title'>Hot Offers</h2>
          </Col>
          {
            carData.slice(0, 6).map((item,index)=>(
              <CarItem item={item} key={index}/>
            ))
          }
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Home