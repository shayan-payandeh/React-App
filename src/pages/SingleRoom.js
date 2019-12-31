import React, { Component } from 'react' 
import defaultBcg from '../images/room-1.jpeg'
import Banner from '../component/Banner'
import { Link } from 'react-router-dom'
import { RoomContext } from '../context'
import StyledHero from '../component/StyledHero'

export default class SingleRoom extends Component {
    constructor(props) {
        super(props)
        //console.log(this.props.match.params.slug)
        this.state ={
            slug : this.props.match.params.slug,
            defaultBcg
        }
    }
    
    static contextType = RoomContext
    
    render() {
        const { getRoom } = this.context
        const { slug } = this.state

        const room = getRoom(slug) 
        if(!room)
        return  <div className = 'error'>
                    <h4>no such room could be found ... </h4>
                    <Link to = '/rooms' className = 'btn-primary'>Return Home</Link>
                </div>
                
        const {name, description, capacity, size, price, extras, breakfast, pets, images} = room
        const [mainImg,...defaultImg] = images
        return (
           <React.Fragment>
               <StyledHero img={mainImg || this.state.defaultBcg}> 
               <Banner title={`${name} Room`}>
                    <Link to = '/rooms' className = 'btn-primary'>Back To Rooms</Link>
               </Banner>
               
               </StyledHero>
               <section className = 'single-room'>
                   <div className = 'single-room-images'>
                       {defaultImg.map((item,index) =>{
                           return <img key ={index} src ={item} alt ={name} />
                       })}
                   </div>
                   <div className = 'single-room-info'>
                       <article className = 'desc'>
                           <h3>details</h3>
                           <p>{description}</p>
                       </article>
                       <article className = 'info'>
                           <h3>Info</h3>
                           <h6>Price : {price}</h6>
                           <h6>Size : {size}</h6>
                           <h6>Max Capacity : {capacity > 1 ? `${capacity} people` : `${capacity} person`} </h6>
                           <h6>{pets ? 'Pets allowed' : 'no pets allowed'}</h6>
                           {breakfast && <h6>breakfast included</h6>}
                       </article>
                   </div>
               </section>
               <section className = 'room-extras'>
                    <h6>Extras : </h6>
                    <ul className ='extras'>
                        {extras.map((item,index) =>{
                            return <li key={index}>{item}</li>
                        })}
                    </ul>
                </section>
           </React.Fragment>
        )
    }
}
