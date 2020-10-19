import React from 'react';
import Filters from '../../Filters';

// import { Container } from './styles';

function InputsOutros({filterSelect}) {
  return (
    <>
      <ul className={filterSelect === 'outros' ? 'selectd' : 'no-select'}>

      
        <li>  <Filters type="checkbox" name="controle" label="controle" /></li>
        <li>  <Filters type="checkbox" name="controle_ctcd" label="controle_ctcd" /> </li>
        <li>  <Filters type="checkbox" name="flags" label="flags" /> </li>
        <li>  <Filters type="checkbox" name="relatorio" label="relatorio" /> </li>

      </ul>

    </>
  );
}

export default InputsOutros;