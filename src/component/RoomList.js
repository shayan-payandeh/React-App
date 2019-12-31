import React,{ useContext } from 'react'
import Room from '../component/Room'
import { RoomContext } from '../context'
import paginate from '../paginate'
import Pagination from './Pagination'
export default function RoomList() {
    const context = useContext(RoomContext)
    const { sortedRooms, currentPage, pageSize, onPageChange} = context
   
    const rooms = paginate(sortedRooms,currentPage, pageSize)
    const size = Object.keys(sortedRooms).length

    if (rooms.length === 0){
        return ( <div className = 'empty-search'>
                    <h3>Unfortunately no room is available</h3>
                 </div>
                )
    }
    return (
        <React.Fragment>
             
                <section className = 'roomslist'>
                    <div className = 'roomslist-center'>
                        {rooms.map(item =>{
                            return <Room key ={item.id} room ={item} /> 
                        })}
                    </div>
                </section>
                <Pagination totalItems ={size} pageSize ={pageSize} currentPage={currentPage} onPageChange ={onPageChange}/>
        </React.Fragment>
        
    )
}
