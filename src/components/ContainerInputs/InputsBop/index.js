import React, { useState } from 'react';
import Filters from '../../Filters';
// import { Container } from './styles';

function InputsBop({ filterSelect }) {
  const [select1, setSelect1] = useState(false);
  const [select2, setSelect2] = useState(false);
  const [select3, setSelect3] = useState(false);
  const [select4, setSelect4] = useState(false);
  const [select5, setSelect5] = useState(false);
  const [select6, setSelect6] = useState(false);
  const [select7, setSelect7] = useState(false);
  const [select8, setSelect8] = useState(false);
  const [select9, setSelect9] = useState(false);
  const [select10, setSelect10] = useState(false);
  const [selectTodosBop, setSelectTodosBop] = useState(true);

  /*
  
  if (filterSelect !== 'bop') {
    selectTodos = false;
  };
 */
  //let selectTodos2 = selectTodos;

  /*if (selectTodos === true && filterSelect === 'bop') {
    var checked = 'checked';

  }else {
    checked = '';
  };

 */
  return (
    <>
      {/* Filtros do BOP */}

      <ul className={filterSelect === 'bop' ? 'selectd' : 'no-select'}>

        <li className="todos"> <Filters type="checkbox" name="Todos" label="Todos" value={selectTodosBop} onClick={() => setSelectTodosBop(!selectTodosBop)} checked={true}/> </li>

        <li> <Filters type="checkbox" name="pk" label="pk" value={ select1}  onClick={() => setSelect1(!select1)} /> </li>

        <li> <Filters type="checkbox" name="servidor" label="servidor" value={ select2} onClick={() => setSelect2(!select2)} /> </li>

        <li> <Filters type="checkbox" name="nro_bop" label="nro_bop" value={ select3} onClick={() => setSelect3(!select3)} /> </li>

        <li> <Filters type="checkbox" name="nro_bop_editado" label="nro_bop_editado" value={ select4} onClick={() => setSelect4(!select4)} /> </li>
        <li> <Filters type="checkbox" name="nro_tombo" label="nro_tombo" value={ select5} onClick={() => setSelect5(!select5)} /> </li>

        <li> <Filters type="checkbox" name="tipo_tombo" label="tipo_tombo" value={ select6} onClick={() => setSelect6(!select6)} /> </li>

        <li> <Filters type="checkbox" name="unidade_origem" label="unidade_origem" value={ select7} onClick={() => setSelect7(!select7)} /> </li>

        <li> <Filters type="checkbox" name="unidade_responsavel" label="unidade_responsavel" value={ select8} onClick={() => setSelect8(!select8)} /> </li>

        <li> <Filters type="checkbox" name="sit_proc" label="sit_proc" value={ select9} onClick={() => setSelect9(!select9)} /></li>

        <li> <Filters type="checkbox" name="classe_motivo" label="classe_motivo" value={ select10} onClick={() => setSelect10(!select10)} /></li>

      </ul>
    </>
  ); 
}

export default InputsBop;