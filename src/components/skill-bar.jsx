import React from 'react'

const Skillbar = (props) => {
    return(
        <div className="skillsBar">
          <h5>{props.name}</h5>
          <h5>{props.percent}</h5>
        </div>
    )
}

export default Skillbar