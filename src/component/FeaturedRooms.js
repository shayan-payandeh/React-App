import React, { Component } from 'react'
import { RoomContext } from '../context'
import Loading from './Loading'
import Title from './Title'
import Room from './Room'
import './FeaturedRooms.css';

export default class FeaturedRooms extends Component {
    static contextType = RoomContext
    
    render() {
        let {loading, featuredRooms : rooms} = this.context
        
         rooms = rooms.map(room =>{
            return <Room key = {room.id} room = {room} />
        })
        return (
            <section className = 'featurd-rooms'>
                <Title title = 'Featured Rooms' />
                <div className = 'featured-rooms-center'>
                    {loading ? <Loading /> : rooms}
                </div>
                
            </section>
        )
    }
}

// export default function FeaturedRooms() {
//     const context = useContext(RoomContext)
//     const {loading, featuredRooms} = context

//     const rooms = featuredRooms.map(room =>{
//         return <Room key = {room.id} room = {room} />})
//     return (
//         <div>
//              <section className = 'featurd-rooms'>
//                 <Title title = 'Featured Rooms' />
//               <div className = 'featured-rooms-center'>
//                    {loading ? <Loading /> : rooms}
//                </div>
                
//            </section>
//         </div>
//     )
// }
