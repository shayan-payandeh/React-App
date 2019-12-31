import React, { Component } from 'react'
import logo from '../images/logo.svg'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isOpen : false
        }
    }
    handleToggle = () =>{
        this.setState({isOpen : !this.state.isOpen})
    }
    
    render() {
        return (
            <div className = 'navbar'>
                <div className = 'nav-center'>
                    <div className = 'nav-header'>
                        <Link to ='/'>
                            <img src = {logo} alt ='resort'/>
                        </Link>
                        <button onClick ={this.handleToggle} className ="nav-btn">
                            <FaAlignRight className = "nav-icon"/>
                        </button>
                    </div>
                    <ul className = {this.state.isOpen ? 'show-nav nav-links' : 'nav-links'}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/rooms'>Rooms</Link></li>
                        <li><Link to='/admin'>Admin</Link></li>
                        
                    </ul>
                </div>
            </div>
        )
    }
}
