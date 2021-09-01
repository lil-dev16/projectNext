import React from 'react'
import Homedet from './home_data'
import HomeImg from './home_img'
import HomeSocial from './home_socials'

    const Hom = () =>  {
        return(
            <div className="hom">
                <Homedet />
                <HomeSocial />
                <HomeImg />
            </div>
        )
    }
export default Hom