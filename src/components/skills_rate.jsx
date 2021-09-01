import React from 'react'
import Skillbar from './skill-bar'


const SkillsRate = () => {
    return(
        <div>
          <h1>Professional Skills</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
               Exercitationem excepturi ab accusamus quod omni numquam 
               fugiat nobis molestiae laborum nulla?</p>
               <Skillbar name="HTML" percent="80%"/>
               <Skillbar name="CSS" percent="70%"/>
               <Skillbar name="JS" percent="70%"/>
               <Skillbar name="React" percent="20%"/>
               <Skillbar name="UI/UX" percent="20%"/>
        </div>
    )
}

export default SkillsRate;