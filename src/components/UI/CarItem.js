import React from 'react'
import {Col} from "reactstrap";
import {Link} from "react-router-dom";

function CarItem(props) {
    const { imgUrl, model, carName, automatic, speed, price } = props.item;
  return <Col lg="4" md="4" sm="6" className='mb-5' >
  <div className='car__item'> 
    <div className="car__img">
        <img src={imgUrl} alt="" />
    </div>

    <div className="car__item-content mt-4">
        <h4 className="section__title text-center">{carName}</h4>
            <h6 className="rent__price text-center mt-">${price}.00 <span>/ Day</span></h6>
    </div>
  </div>
  </Col>
}

export default CarItem