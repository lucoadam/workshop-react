import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

export default function InputField(props) {
  return  <Row>
    <Col sm={12} md={6} lg={4} xl={4}>
    
  <Form.Group>
  <Form.Label>{props.label}:&nbsp;</Form.Label>
  <Form.Control 
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
</Form.Group>
    </Col>
  </Row>
}
