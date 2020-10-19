
import React, {useEffect, useRef} from 'react';
import {useField} from '@unform/core';

export default function Input({name, value, ...rest}) {
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
    <input ref={inpuRef} value={value} {...rest} />
  );
}

 