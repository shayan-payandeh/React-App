import React, { Component } from 'react'
import { Admin, Resource} from 'react-admin'
// import jsonServerProvider from 'ra-data-json-server'
import fakeDataProvider from 'ra-data-fakerest'
import {UserList,  UserCreate, UserEdit} from './Users'
import {RoomList,  RoomCreate, RoomEdit} from './Rooms'
import Dataa from '../../Dataa'
//In order to read data from json we use jsonServerprovider function of ra-data-json-server library
//In order to read data locally we use fakeDataProvider function of ra-data-fakerest

// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')
const dataProvider = fakeDataProvider(Dataa)

export class Adminstrator extends Component {

    render() {
        
        return (
            <Admin dataProvider = {dataProvider} >
                <Resource name = 'users' list = {UserList} create ={UserCreate}  edit ={UserEdit}/>  
                <Resource name = 'rooms' list = {RoomList} create ={RoomCreate}  edit ={RoomEdit}/>  
            </Admin>
        )
    }
}

export default Adminstrator
