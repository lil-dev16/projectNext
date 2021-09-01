import React from 'react'

function Nav(props) {
    return(
        <div>
            
            <ul>
                <li className="nav_link" style={{listStyle: 'none', fontWeight: 'bold'}}>{props.name}</li>
            </ul>
        </div>
    )
}
export default Nav