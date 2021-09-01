import React from 'react'
import Image from 'next/image'

function HomeImg() {
    return(
        <div className="homeImg">
             <Image 
                src="/img/segun.png"
                alt="Picture of the Segun"
                width={450}
                height={470}
            />
        </div>
    )
}

export default HomeImg