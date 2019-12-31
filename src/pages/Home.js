import React from 'react'
import Hero from '../component/Hero'
import Banner from '../component/Banner'
import { Link } from 'react-router-dom'
import Services from '../component/Services'
import FeaturedRooms from '../component/FeaturedRooms'

const Home = () => {
    return (
            <React.Fragment>

                <Hero>
                    <Banner  title = 'Luxurious Room' subtitle ='deluxe rooms start at 299$'>
                        <Link to = '/rooms' className = 'btn-primary'>Our Rooms </Link>
                    </Banner>
                </Hero>

                <Services ></Services>
                
                <FeaturedRooms/>
       
            </React.Fragment>
    )
}

export default Home


// export default function Home() {
//     return (
//         <React.Fragment>
//                 <Hero>
//                     <Banner  title = 'Luxurious Room' subtitle ='deluxe rooms start at 299$'>
//                         <Link to = '/rooms' className = 'btn-primary'>Our Rooms </Link>
//                     </Banner>
//                 </Hero>
//                 <Services ></Services>
//                 <FeaturedRooms/>
               
//             </React.Fragment>
//     )
// }
