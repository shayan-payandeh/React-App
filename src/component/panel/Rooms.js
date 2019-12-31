import React from 'react'
import { List, Datagrid, TextField, Create, Edit, SimpleForm,TextInput} from 'react-admin'

export const RoomList = props =>(
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source ="sys.id" label = "id"/>
            <TextField source = "fields.name" label ="name" />
            <TextField source = "fields.slug" label = "slug" />
            <TextField source = "fields.capacity" label = "capacity" />
            <TextField source = "fields.price" label = "price" />
            <TextField source = "fields.type" label = "type" />
        </Datagrid>
    </List>
)

export const RoomCreate = props =>(
    <Create {...props}>
        <SimpleForm>
            <TextInput source ="sys.id" label = "id"/>
            <TextInput source = "fields.name" label ="name" />
            <TextInput source = "fields.slug" label = "slug" />
            <TextInput source = "fields.capacity" label = "capacity" />
            <TextInput source = "fields.price" label = "price" />
            <TextInput source = "fields.type" label = "type" />
        </SimpleForm>
    </Create>
)

export const RoomEdit = props =>(
    <Edit  undoable={false}  {...props}>
        <SimpleForm>
            <TextInput disabled source ="sys.id" label = "id"/>
            <TextInput source = "fields.name" label ="name" />
            <TextInput source = "fields.slug" label = "slug" />
            <TextInput source = "fields.capacity" label = "capacity" />
            <TextInput source = "fields.price" label = "price" />
            <TextInput source = "fields.type" label = "type" />    
        </SimpleForm>
    </Edit>
)