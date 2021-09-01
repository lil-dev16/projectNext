import React from 'react'
import Image from 'next/image'
import ProjectCard from './projects_card'

const ProjectCtn = () => {
    return(
        <div className="project">
            <ProjectCard 
            img={<Image 
                src="/img/creativity.png"
                alt="Picture of the work"
                width={100}
                height={100}
            />}
            h="Weather App"
            p='lorem vskfvh ibfblrsbss jbblvblsbwkjs h blksbsf bhjfl hnmbhbjhj  jh jhfg hj hj hj'

            />

            <ProjectCard 
            img={<Image 
                src="/img/creativity.png"
                alt="Picture of the work"
                width={100}
                height={100}
            />}
            h="Flip cards Game"
            p='This is a game that uses cards to test your memory'

            />

            <ProjectCard 
            img={<Image 
                src="/img/creativity.png"
                alt="Picture of the work"
                width={100}
                height={100}
            />}
            h="Face Recognition"
            p='This is an app uses an api to detect your face'

            />

<ProjectCard 
            img={<Image 
                src="/img/creativity.png"
                alt="Picture of the work"
                width={100}
                height={100}
            />}
            h="Space Invaders"
            p='This is fun game that involves shooting aliens from outer space'

            />

<ProjectCard 
            img={<Image 
                src="/img/creativity.png"
                alt="Picture of the work"
                width={100}
                height={100}
            />}
            h="Voice controlled news Feed"
            p='This is a web app that gives you current information with the use of your voice.'

            />

<ProjectCard 
            img={<Image 
                src="/img/creativity.png"
                alt="Picture of the work"
                width={100}
                height={100}
            />}
            h="Snake Game"
            p='This is a game that has a snake eating bits of food and growing longer'

            />
        </div>
    )
}

export default ProjectCtn