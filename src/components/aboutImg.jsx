import React from 'react'
import Image from 'next/image'

const AboutImg = () => {
    return(
        <div>
            <Image 
                src="/img/desk.svg"
                alt="Picture of the Segun"
                width={300}
                height={300}
            />
        </div>
    )
}

export default AboutImg