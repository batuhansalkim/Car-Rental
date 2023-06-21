import React from "react";
import { Col } from "reactstrap";
import "../../styles/service-list.css";
import servicesData from "../../assets/data/serviceData";

const ServicesList=()=>{
    return (
        <>
        {servicesData.map((item)=>(
            <ServiceItem item={item} key={item.id}/>
        ))}
        </>
    )
}
const ServiceItem = ({item})=>(
    <Col lg="4" md="4" sm="6" className="mb-3 batu__container" >
        <div className="service__item">
            <span className="mb-3 d-inline-block">
                <i className={item.icon}></i>
            </span>
            <h6>{item.title}</h6>
            <p className="section__description">{item.desc}</p>
        </div>
    </Col>
)


export default ServicesList;