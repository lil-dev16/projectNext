import React from 'react'
import SkillsRate from './skills_rate'
import SkillsCtn from './skills_ctn'
import Title from  './title'

const Skills = () => {
    return(
        <div className="skills_contain">
            <Title name="Skills"/>
            <div className="skill">
            <SkillsRate />
            <SkillsCtn />
            </div>
            
        </div>
    )
}

export default Skills