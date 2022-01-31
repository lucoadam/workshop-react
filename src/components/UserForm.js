import React, { useEffect, useState } from 'react';
import InputField from './InputField';
import axios from 'axios'
import { Alert, Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Constants from '../Constants';

export default function UserForm(props) {
    /**
     * Maintaining Form State
     */
  const {data} = props;
  const [formData, setFormData] = useState(props.data)
  const [message, setMessage] = useState('');
  function onFormFieldValueChange(field, val){
      setFormData(function(previousValue){
          return {...previousValue,[field]: val}
      })
  }

  useEffect(()=>{
    setFormData(data);
  },[data])

  function onFormSubmit(event){
    event.preventDefault();
    /**
     *  axios.[HTTP Method](url, options)
     * if method post, patch, put => (url, data, options)
     * (client ==> server ) 
     * probable there may be response / error
     * axios.[HTTP Method](url, options).then(function (response){
     *  (server (data, headers, status))
     * })
     * .catch(function(err){
     *   ()
     * })
     */
    let api =  null
    if(formData._id){
      api =  axios.put(`${Constants.baseUrl}/users/${formData._id}`,formData)
    }else{
      api = axios.post(`${Constants.baseUrl}/users`,formData)
    }
    api
    .then(response=> {
       if(response.status === 201 || response.status === 202){
         setMessage(response.data.message);
       }

    })
    .catch(err=>{
        console.log(err)
    })
  }
  return <Form onSubmit={onFormSubmit}>
      <InputField 
        label="Name" 
        value={formData.name} 
        type="text" 
        onInput={(e)=>onFormFieldValueChange('name',e.target.value)}
        autoFocus
      />
      <InputField 
        label="Location" 
        value={formData.location} 
        type="text"
        onInput={(e)=>onFormFieldValueChange('location',e.target.value)}
        />
      <InputField 
        label="Age" 
        value={formData.age} 
        type="number"
        onInput={(e)=>onFormFieldValueChange('age',e.target.value)}
    />
    {message!='' && <Row>
      <Col sm={12} md={6} lg={4} xl={4} >
      <Alert variant='success'>{message} <Link to="/users">View users</Link></Alert>
      </Col>
      </Row>}
    <Button variant='secondary' className='p-1 mt-3' type="submit">{formData._id?'Update': 'Submit'}</Button>
  </Form>;
}
