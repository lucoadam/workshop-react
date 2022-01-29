import React, { useState } from 'react';
import InputField from './InputField';
import axios from 'axios'

export default function Form() {
    /**
     * Maintaining Form State
     */
  const [formData, setFormData] = useState({
      name: '',
      location: '',
      age: ''
  })
  function onFormFieldValueChange(field, val){
      setFormData(function(previousValue){
          return {...previousValue,[field]: val}
      })
  }

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
    axios.post('http://localhost:5000/users',formData)
    .then(response=> {
        console.log(response.data)
    })
    .catch(err=>{
        console.log(err)
    })
  }
  return <form onSubmit={onFormSubmit}>
      <InputField 
        label="Name" 
        value={formData.name} 
        type="text" 
        onInput={(e)=>onFormFieldValueChange('name',e.target.value)}
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
    <button type="submit">Submit</button>
  </form>;
}
