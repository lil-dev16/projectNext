import React from 'react'
import Title from './title'
import AboutImg from './aboutImg'
import AboutCtn from './aboutCtn'

const About = () => {
    return(
        <div className= "about__section">
            <Title name="About"/>
            <div className="abt">
            <AboutImg />
            <AboutCtn />
            </div>
        </div>
    )
}

export default About