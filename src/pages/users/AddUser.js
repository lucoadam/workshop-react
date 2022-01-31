import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import UserForm from '../../components/UserForm';
import Constants from '../../Constants';

export default function AddUser() {
  const params = useParams();
  const [user, setUser] = useState({
      name: '', 
      age: '',
      location: ''
  })  

  useEffect(()=>{
    if('id' in params){
        axios.get(`${Constants.baseUrl}/users/${params.id}`)
        .then(res=>{
            if(res.status === 200){
                setUser(res.data.data)
            }
        })
    }
  },[params])

  return <Container>
      <div className='display-5'>{params.id ? 'Edit User': 'Add User'}</div>
      <UserForm data={user}/>
  </Container>
}
