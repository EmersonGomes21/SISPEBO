import React, { useState } from 'react';
import Filters from '../../Filter';
// import { Container } from './styles';

function InputsVitima({ filterSelect }) {

  const [selectTodosVitima, setSelectTodosVitima] = useState(true);
  return (
    <>

      <ul className={filterSelect === 'vitima' ? 'selectd' : 'no-select'}>

        <li className="todos"> <Filters type="checkbox" name="TodosVitima" label="Todos" value={selectTodosVitima} onClick={() => setSelectTodosVitima(!selectTodosVitima)} defaultChecked={selectTodosVitima} /> </li>
        <li> <Filters type="checkbox" name="relator" label="relator" defaultChecked={selectTodosVitima} /> </li>
        <li> <Filters type="checkbox" name="relator" label="relator" defaultChecked={selectTodosVitima} /> </li>
        <li> <Filters type="checkbox" name="relato" label="relato" defaultChecked={selectTodosVitima} /> </li>
        <li> <Filters type="checkbox" name="atuacao" label="atuacao" defaultChecked={selectTodosVitima} /> </li>
        <li> <Filters type="checkbox" name="vit_nome" label="vit_nome" defaultChecked={selectTodosVitima} /> </li>
        <li> <Filters type="checkbox" name="vit_alcunha" label="vit_alcunha" defaultChecked={selectTodosVitima} /> </li>
        <li>  <Filters type="checkbox" name="vit_dt_nasc" label="vit_dt_nasc" defaultChecked={selectTodosVitima} /> </li>
        <li> <Filters type="checkbox" name="vit_idade" label="vit_idade" defaultChecked={selectTodosVitima} /> </li>
        <li> <Filters type="checkbox" name="vit_fx_etaria" label="vit_fx_etaria" defaultChecked={selectTodosVitima} /> </li>
        <li> <Filters type="checkbox" name="vit_nro_doc" label="vit_nro_doc" defaultChecked={selectTodosVitima} /> </li>
        <li> <Filters type="checkbox" name="vit_tipo_doc" label="vit_tipo_doc" defaultChecked={selectTodosVitima} /> </li>
        <li> <Filters type="checkbox" name="vit_pai" label="vit_pai" defaultChecked={selectTodosVitima} /> </li>
        <li> <Filters type="checkbox" name="vit_mae" label="vit_mae" defaultChecked={selectTodosVitima} /> </li>
        <li> <Filters type="checkbox" name="vit_tipo" label="vit_tipo" defaultChecked={selectTodosVitima} /> </li>
        <li> <Filters type="checkbox" name="vit_sexo" label="vit_sexo" defaultChecked={selectTodosVitima} /></li>
        <li> <Filters type="checkbox" name="vit_cor_pele" label="vit_cor_pele" defaultChecked={selectTodosVitima} /></li>
        <li> <Filters type="checkbox" name="vit_grau_inst" label="vit_grau_inst" defaultChecked={selectTodosVitima} /></li>
        <li> <Filters type="checkbox" name="vit_profissao" label="vit_profissao" defaultChecked={selectTodosVitima} /></li>
        <li> <Filters type="checkbox" name="vit_situacao_emprego" label="vit_situacao_emprego" defaultChecked={selectTodosVitima} /></li>
        <li> <Filters type="checkbox" name="vit_estado_civil" label="vit_estado_civil" defaultChecked={selectTodosVitima} /></li>

      </ul>

    </>

  );
}

export default InputsVitima;