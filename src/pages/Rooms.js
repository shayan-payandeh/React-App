import React from 'react'
import Hero from '../component/Hero'
import Banner from '../component/Banner'
import { Link } from 'react-router-dom'
import RoomsContainer from '../component/RoomsContainer'
const Rooms = () => {
    return (
        <React.Fragment>
            <Hero hero = 'roomsHero'>
                <Banner title = 'Our Rooms' subtitle = ''>
                    <Link to ='/' className = 'btn-primary'>Return Home</Link>
                </Banner>
            </Hero>
            <RoomsContainer />    
        </React.Fragment>
        
    )
}

export default Rooms
  