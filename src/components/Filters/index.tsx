import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  type?: string;
}


const Filters: React.FC<InputProps> = ({ label, name, type, ...rest }) => {
  return (
    <Container>
        
      <div className="input-block" >
      <label htmlFor={name} > {label} </label>
      < input type={type} id={name} {...rest} />
     </div>
    </Container>
  );
}

export default Filters;