import React from "react"
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import AboutSection from "../components/UI/AboutSection";
const About = ()=>{
    return(
        <Helmet title="About">
            <CommonSection title="About Us"/>
            <AboutSection/>
            
        </Helmet>
    )
}

export default About;