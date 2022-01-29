import React from 'react';

export default function InputField(props) {
  return  <div>
  <label>{props.label}:&nbsp;</label>
  <input 
  placeholder={'Enter your '+props.label.toLowerCase()} 
  {...props} 
  />
  {/**
   * props = {
   *    value: '',
   *    onInput: ()=>{},
   *    type: '',
   *    label
   * }
   * 
   * <input type={props.type} onInput={props.onInput} value={props.value}/>
   * 
   * OR
   * 
   * <input {...props}/>
   * 
   */}
</div>;
}
