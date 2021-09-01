import React from 'react'
import Nav from './Nav'

function Header(){
        return(
            <div className="contain">
        <div className="header">
            <h2>Segun</h2>
            <Nav name= "Home" />
            <Nav name= "About" />
            <Nav name= "Skills" />
            <Nav name= "Services" />
            <Nav name= "Project" />
            <Nav name= "Contact" />
        </div>
        </div>
        )
}

export default Header