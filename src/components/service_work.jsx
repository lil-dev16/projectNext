import React from 'react'

const Servicework = (props) => {
    return(
        <div className="comp">
          {props.img}
          <h1>{props.h}</h1>
          <p>{props.p}</p>
        </div>
    )
}

export default Servicework