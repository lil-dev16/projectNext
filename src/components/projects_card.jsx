import React from 'react'

const ProjectCard = (props) => {
    return(
        <div className="projectCard">
            {props.img}
            <h1>{props.h}</h1>
            <p>{props.p}</p>
            <button>Read More</button>
        </div>
    )
}

export default ProjectCard