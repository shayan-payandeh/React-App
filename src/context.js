import React, { Component } from 'react'
import items from './data'

const RoomContext = React.createContext()

class RoomProvider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            rooms : [],
            sortedRooms : [],
            featuredRooms : [],
            loading : true,

        //---for filtering----
            type : '',
            capacity : 1,
            minPrice : 0,
            maxPrice : 0,
            minSize : 0,
            maxSize : 0,
            breakfast : false,
            pets : false,
              

        }
    }
    
    componentDidMount(){
        let rooms = this.formatData(items)
        console.log(rooms)
        let featuredRooms = rooms.filter(room => room.featured === true)
        
        let maxPrice = Math.max(...rooms.map(room => room.price))
        let minPrice = Math.min(...rooms.map(room => room.price))

        let maxSize = Math.max(...rooms.map(room => room.size))
        
        this.setState({
            rooms, 
            featuredRooms, 
            sortedRooms : rooms, 
            loading :false,
            price : maxPrice,
            maxPrice,
            minPrice,
            maxSize,
            currentPage : 1,
            pageSize : 5
        })
    }


    formatData(elements) {
        let temptItems = elements.map(item =>{
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url)
            let room = {...item.fields, images, id}
            return room
        })
        return temptItems
    }
    
    getRoom = slug =>{
        const tempRooms = [...this.state.rooms]
        const room = tempRooms.find(room => room.slug === slug)
        return room
    }

    filterRooms = () =>{
        let {rooms, type, capacity, price} = this.state
        let tempRooms = [...rooms]

        capacity = parseInt(capacity)
        price = parseInt(price)


        if(type !== 'all'){
            tempRooms =  tempRooms.filter(room => room.type === type)
           
        }
        

        if(capacity !==1){
            tempRooms = tempRooms.filter(room => room.capacity === capacity)
        }

        tempRooms = tempRooms.filter(room => room.price <= price  )

        this.setState({sortedRooms : tempRooms , currentPage:1 })
    }

    onPageChange = (page) =>{
        this.setState({currentPage : page })
    }

    handleChange = event => {
         
        const name = event.target.name
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
        this.setState({
            [name] :value //for example ===> " capacity : 4 "  or  " type : 'single' "
        },this.filterRooms)
    
        //filterRooms function will be executed after setState() has been executed successfully
    }

    

    render() {
        return (
            <RoomContext.Provider 
                value = {   
                            {...this.state , 
                            getRoom: this.getRoom, 
                            handleChange : this.handleChange,
                            onPageChange : this.onPageChange}
                        }
            >
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}
    
const RoomConsumer = RoomContext.Consumer

export {RoomProvider, RoomContext, RoomConsumer}

