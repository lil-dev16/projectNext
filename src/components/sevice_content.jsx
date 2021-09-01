import React from 'react'
import Image from 'next/image'
import Servicework from './service_work'

const ServiceCtn = () => {
    return(
        <div className="service">
          <Servicework
          img={<Image
            src="/img/web-programmingb.png"
                alt="Picture of the work"
                width={100}
                height={100}
          />}
          h="Development"
          p="The backbone supporting our cutting-edge web design"
          />

          <Servicework
          img={<Image
            src="/img/creativity.png"
                alt="Picture of the work"
                width={100}
                height={100}
          />}
          h="UI/UX Design"
          p="Intuitive interface with focus on end users"
          />

          <Servicework
          img={<Image
            src="/img/animation.png"
                alt="Picture of the work"
                width={100}
                height={100}
          />}
          h="Animation"
          p="Visual effects and graphic motion.
          Utilized as effective commuinication tools."
          />
        </div>
    )
}

export default ServiceCtn