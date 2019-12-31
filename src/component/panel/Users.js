import React from 'react';

import {List, Datagrid, TextField, EmailField, Create, SimpleForm, TextInput, Edit, CloneButton,
        TopToolbar, ShowButton} from 'react-admin';

export const UserList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="address.street" />
      <TextField source="address.zipcode" />
      <TextField source="phone" />
      <TextField source="website" />
      <TextField source="company.name" />
    </Datagrid>
  </List>
);

export const UserCreate = props =>(
  <Create {...props} >
      <SimpleForm>
          <TextInput source="name" />
          <TextInput source="username" />
          <TextInput source="email" />
          <TextInput source="address.street" label="Address" />
          <TextInput source="phone" />
          <TextInput source="website" />
          <TextInput source="company.name" label="Company" />
          <CloneButton/>
      </SimpleForm>
  </Create>
)

export const UserEdit = props =>(
  <Edit undoable={false} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="address.street" label="Address" />
      <TextInput source="phone" />
      <TextInput source="website" />
      <TextInput source="company.name" label="Company" />
    </SimpleForm>
  </Edit>
)

const UserAction = ({basePath, data, resource}) =>{
  return(
  <TopToolbar>
    <ShowButton basePath = {basePath} record ={data}/>
    <button >custom action</button>
  </TopToolbar>)
}