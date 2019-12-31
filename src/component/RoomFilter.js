import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from './Title'

// A function that return unique values of a member of an array
const getUnique = (items,value) =>{
    return [...new Set(items.map(item => item[value]))]
}

// function getUnique(items,value){
//     return [... new Set(items.map(item => item[value]))]
// }

export default function RoomFilter() {
    // function getUnique(items,value){
    //     return [... new Set(items.map(item => item[value]))]
    // }
    
    const context  = useContext(RoomContext)
    const {rooms, handleChange, type, capacity, price, minPrice, maxPrice} = context

    let types = getUnique(rooms,'type')
    types = ['all',...types]

    let people = getUnique(rooms,'capacity')
    // let people = [... new Set(rooms.map(room => room.capacity))]

    return (
        <section className = 'filter-container'> 
            <Title title = 'Search Rooms' />
            
            <form className ='filter-form'>

                <div className = 'form-group'>
                    <label htmlFor ='type'>room type</label>
                    <select
                         className = 'form-control' 
                         name = 'type' 
                         id ='type' 
                         value = {type}
                         onChange = {handleChange}
                    >
                        {types.map((type,index)=>{
                            return <option value = {type} key ={index}>{type}</option>
                        })}
                    </select>
                </div>


                <div className = 'form-group'>
                    <label htmlFor ='capacity'>Guests</label>
                    <select
                         className = 'form-control' 
                         name = 'capacity' 
                         id ='capacity' 
                         value = {capacity}
                         onChange = {handleChange}
                    >
                        {people.map((p,index)=>{
                            return <option value = {p} key ={index}>{p}</option>
                        })}
                    </select>
                </div>

                <div className='form-group'>
                    <label htmlFor ='price'>room price ${price}</label>
                    <input 
                        className ='form-control'
                        type ='range'  
                        name ='price' 
                        min={minPrice}  
                        max ={maxPrice} 
                        id='price' 
                        value ={price} 
                        onChange = {handleChange} 
                         />
                </div>
                
            </form>
        </section>
    )
}
 