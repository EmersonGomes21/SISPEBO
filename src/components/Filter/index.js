import React, {useEffect, useRef} from 'react';
import { Container } from './styles';
import {useField} from '@unform/core';

const Filters = ({ label, name, type,...rest  }) => {

  const inpuRef =  useRef(null); 
  const {fieldName, registerField, defaultValue, error} = useField(name);
  
 useEffect( () =>{
 registerField({
   name: fieldName,
   ref:  inpuRef.current,
   path: 'value'
 })
 },[fieldName, registerField]);

  return (
    <Container>
      <div className="input-block" >
      <label htmlFor={name} > {label} </label>
      < input ref={inpuRef} type={type} id={name}  {...rest} />
     </div>
    </Container>
  );
}

export default Filters;