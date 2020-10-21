import React, { useState } from 'react';
import Filters from '../../Filter';
// import { Container } from './styles';

function InputsTempo({ filterSelect }) {

  const [selectTodosTempo, setSelectTodosTempo] = useState(true);
  return (
    <>
      {/* Filtros de tempo */}

      <ul className={filterSelect === 'tempo' ? 'selectd' : 'no-select'}>

        <li className="todos"> <Filters type="checkbox" name="TodosTempo" label="Todos" value={selectTodosTempo} onClick={() => setSelectTodosTempo(!selectTodosTempo)} defaultChecked={selectTodosTempo} defaultChecked={selectTodosTempo} /> </li>
        <li> <Filters type="checkbox" name="dia_semana" label="dia_semana" defaultChecked={selectTodosTempo} /> </li>
        <li> <Filters type="checkbox" name="data_registro" label="data_registro" defaultChecked={selectTodosTempo} /> </li>
        <li> <Filters type="checkbox" name="hora_registro" label="hora_registro" defaultChecked={selectTodosTempo} /> </li>
        <li> <Filters type="checkbox" name="fx_4_hor" label="fx_4_hor" defaultChecked={selectTodosTempo} /></li>
        <li><Filters type="checkbox" name="fx_12_hr" label="fx_12_hr" defaultChecked={selectTodosTempo} /></li>
        <li><Filters type="checkbox" name="data_inst_proc" label="data_inst_proc" defaultChecked={selectTodosTempo} /></li>
        <li> <Filters type="checkbox" name="hora_reg_proc" label="hora_reg_proc" defaultChecked={selectTodosTempo} /></li>
        <li><Filters type="checkbox" name="data_concl_proc" label="data_concl_proc" defaultChecked={selectTodosTempo} /></li>
        <li><Filters type="checkbox" name="hora_concl_proc" label="hora_concl_proc" defaultChecked={selectTodosTempo} /></li>
        <li><Filters type="checkbox" name="mes_registro" label="mes_registro" defaultChecked={selectTodosTempo} /></li>
        <li><Filters type="checkbox" name="ano_registro" label="ano_registro" defaultChecked={selectTodosTempo} /></li>

      </ul>

    </>
  );
}

export default InputsTempo;