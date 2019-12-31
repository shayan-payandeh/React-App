import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaBeer, FaShuttleVan} from 'react-icons/fa'
import './Services.css'

export default class Services extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             services : [
                 {
                     icon : <FaCocktail />,
                     title: 'Free Cocktail',
                     info : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'
                 },
                 {
                     icon : <FaHiking />,
                     title: 'EndlessHiking',
                     info : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'
                 },
                 {
                     icon : <FaBeer />,
                     title: 'Free Beer',
                     info : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'
                 },
                 {
                     icon : <FaShuttleVan />,
                     title: 'Free ShutlleVan',
                     info : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'
                 }
             ]
        }
    }
    
    render() {
        const {services} = this.state
        return (
            <section className = 'services'>
                <Title title = 'Service' />
                <div className = 'services-center'>
                    {services.map((item,index) =>{
                       return <article key = {index} className = 'service'>
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                              </article>
                       
                    })}
                </div>
            </section>
        )
    }
}
