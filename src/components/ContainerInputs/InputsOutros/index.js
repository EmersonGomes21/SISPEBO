import React, { useState } from 'react';
import Filters from '../../Filter';

// import { Container } from './styles';

function InputsOutros({ filterSelect }) {
  const [selectTodosOutros, setSelectTodosOutros] = useState(true);
  return (
    <>
      <ul className={filterSelect === 'outros' ? 'selectd' : 'no-select'}>

        <li className="todos"> <Filters type="checkbox" name="TodosOutros" label="Todos" value={selectTodosOutros} onClick={() => setSelectTodosOutros(!selectTodosOutros)} defaultChecked={selectTodosOutros} /> </li>
        <li>  <Filters type="checkbox" name="controle" label="controle" defaultChecked={selectTodosOutros} /></li>
        <li>  <Filters type="checkbox" name="controle_ctcd" label="controle_ctcd" defaultChecked={selectTodosOutros} /> </li>
        <li>  <Filters type="checkbox" name="flags" label="flags" defaultChecked={selectTodosOutros} /> </li>
        <li>  <Filters type="checkbox" name="relatorio" label="relatorio" defaultChecked={selectTodosOutros} /> </li>

      </ul>

    </>
  );
}

export default InputsOutros;