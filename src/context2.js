import React, { Component } from 'react'
import items from './data'
import { RoomContext } from './context'
class context2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            rooms : [],
            featuredRooms : [],
            sortedRooms : [],
            loading = false,

            type = 'all',
            capacity : 1,
            minSize : 0,
            maxSize : 0,
            minPrice : 0,
            maxPrice : 0,
            pet : false,
            breakfast : false
        }
    }

    componentDidMount() {
        let rooms = this.formatData(items)
        let featuredRooms = rooms.filter(room => room.featured === true)
        
        let minPrice = Math.min(...rooms.map(room => room.price))
        let maxPrice = Math.max(...rooms.map(room => room.price))

        let maxSize = Math.max(...rooms.map(room => room.size))

        this.setState({
            rooms,
            sortedRooms : rooms,
            featuredRooms,
            price : maxPrice,
            maxPrice,
            minPrice,
            maxSize,
            loading : false
        })
    }
    
    formatData(elements) {
        let temptItems = elements.map(element =>{
            let id = element.sys.id
            let images = element.field.images.map(image => image.fields.file.url)
            let rooms = {...elements.fields, images, id}
            return rooms
        })
        return temptItems
    }

    getRoom = slug =>{
        let rooms = [...this.state.rooms]
        const room = rooms.find(room => room.slug === slug)
        return room
    }

    filterRooms= () =>{
        const {rooms, type, capacity, price, minPrice, maxPrice, minSize, pets, breakfast} = this.state
        const sortedRooms = [...rooms]

        if(type !== 'all'){
            sortedRooms = sortedRooms.filter(room => room.type === type)
        }

        if(capacity !== 1){
            sortedRooms = sortedRooms.filter(room => room.capacity === capacity)
        }

        sortedRooms = sortedRooms.filter(room => room.price <= price )

        this.setState({sortedRooms})
    }

    handleChange = event => {
        const name = event.target.name
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
        this.setState({ [name] : value}, this.filterRooms)
    }
    
    render() {
        return (
            <RoomContext.Provider value = {{...this.this.state, getRoom :this.getRoom, handleChange : this.handleChange}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer

export {RoomProvider, RoomConsumer, RoomContext}
