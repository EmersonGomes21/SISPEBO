import React, { useState } from 'react';
import Filters from '../../Filter';
// import { Container } from './styles';


function InputsFato({ filterSelect }) {
  const [selectTodosFato, setSelectTodosFato] = useState(true);
  return (
    <>
      {/* Filtros fato */}
      <ul className={filterSelect === 'fato' ? 'selectd' : 'no-select'}>

        <li className="todos"> <Filters type="checkbox" name="TodosFato" label="Todos" value={selectTodosFato} onClick={() => setSelectTodosFato(!selectTodosFato)} defaultChecked={selectTodosFato} defaultChecked={selectTodosFato} /> </li>
        <li>  <Filters type="checkbox" name="data_fato" label="data_fato" defaultChecked={selectTodosFato} /> </li>
        <li>  <Filters type="checkbox" name="hora_fato" label="hora_fato" defaultChecked={selectTodosFato} /> </li>
        <li>  <Filters type="checkbox" name="mes_fato" label="mes_fato" defaultChecked={selectTodosFato} /></li>
        <li>  <Filters type="checkbox" name="ano_fato" label="ano_fato" defaultChecked={selectTodosFato} /></li>
        <li>  <Filters type="checkbox" name="dia_semana" label="dia_semana" defaultChecked={selectTodosFato} /> </li>
        <li>  <Filters type="checkbox" name="fx_4_hor" label="fx_4_hor" defaultChecked={selectTodosFato} /></li>
        <li>  <Filters type="checkbox" name="fx_12_hr" label="fx_12_hr" defaultChecked={selectTodosFato} />  </li>
        <li>  <Filters type="checkbox" name="data_inst_proc" label="data_inst_proc" defaultChecked={selectTodosFato} /> </li>
        <li>  <Filters type="checkbox" name="hora_reg_proc" label="hora_reg_proc" defaultChecked={selectTodosFato} /> </li>
        <li>  <Filters type="checkbox" name="data_concl_proc" label="data_concl_proc" defaultChecked={selectTodosFato} /> </li>
        <li>  <Filters type="checkbox" name="hora_concl_proc" label="hora_concl_proc" defaultChecked={selectTodosFato} /> </li>
        <li>  <Filters type="checkbox" name="mes_registro" label="mes_registro" defaultChecked={selectTodosFato} /></li>
        <li>  <Filters type="checkbox" name="ano_registro" label="ano_registro" defaultChecked={selectTodosFato} /> </li>
        <li>  <Filters type="checkbox" name="consolidado" label="consolidado" defaultChecked={selectTodosFato} /> </li>
        <li>  <Filters type="checkbox" name="fato_real" label="fato_real" defaultChecked={selectTodosFato} /> </li>
        <li>  <Filters type="checkbox" name="especificacao_crime" label="especificacao_crime" defaultChecked={selectTodosFato} /></li>
        <li>  <Filters type="checkbox" name="meio_emp_coest" label="meio_emp_coest" defaultChecked={selectTodosFato} /></li>
        <li>  <Filters type="checkbox" name="latitude" label="latitude" defaultChecked={selectTodosFato} /> </li>
        <li>  <Filters type="checkbox" name="longitude" label="longitude" defaultChecked={selectTodosFato} /> </li>
        <li>  <Filters type="checkbox" name="causa_presumivel" label="causa_presumivel" defaultChecked={selectTodosFato} /> </li>
        <li>  <Filters type="checkbox" name="especializacao_fato" label="especializacao_fato" defaultChecked={selectTodosFato} /> </li>
        <li>  <Filters type="checkbox" name="grupo_ocorrencia" label="grupo_ocorrencia" defaultChecked={selectTodosFato} /> </li>
        <li> <Filters type="checkbox" name="identificacao_fato" label="identificacao_fato" defaultChecked={selectTodosFato} /> </li>

      </ul>


    </>
  );
}

export default InputsFato;