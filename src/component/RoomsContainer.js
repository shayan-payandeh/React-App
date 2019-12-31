import React, { useContext } from 'react'
import RoomsFilter from './RoomFilter'
import RoomsList from './RoomList'
import {RoomContext} from '../context'
import Loading from '../component/Loading'
// import Pagination from './Pagination'

export default function RoomsContainer() {
    const context = useContext(RoomContext) 
    const { loading} = context
    
    // const size = Object.keys(sortedRooms).length

        if(loading) return (<Loading/>)
        return (
        <React.Fragment>
            <RoomsFilter  /> 
            <RoomsList
            //  rooms = {sortedRooms} 
             />
             {/* <Pagination totalItems = {size} pageSize ={pageSize} currentPage ={currentPage} onPageChange = {onPageChange} /> */}
        </React.Fragment>
    )
    // return ( 
    //     <RoomConsumer>
    //         {
    //             (value) =>{
    //                 const {loading, sortedRooms, rooms} = value
    //                 if(loading) {return <Loading />}
    //                 return (
    //                     <React.Fragment>
    //                         <RoomsFilter  />
    //                         <RoomsList  />
    //                     </React.Fragment>
    //                 )
    //             }
    //         }
                    
    //     </RoomConsumer>
        
    // )
}
