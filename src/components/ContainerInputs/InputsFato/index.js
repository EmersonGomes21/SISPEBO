import React from 'react';
import Filters from '../../Filters';
// import { Container } from './styles';

function InputsFato({filterSelect}) {
  return (
    <>
            {/* Filtros fato */}
            <ul className={filterSelect === 'fato' ? 'selectd' : 'no-select'}>
             
              <li>  <Filters type="checkbox" name="data_fato" label="data_fato" /> </li>
              <li>  <Filters type="checkbox" name="hora_fato" label="hora_fato" /> </li>
              <li>  <Filters type="checkbox" name="mes_fato" label="mes_fato" /></li>
              <li>  <Filters type="checkbox" name="ano_fato" label="ano_fato" /></li>
              <li>  <Filters type="checkbox" name="dia_semana" label="dia_semana" /> </li>
              <li>  <Filters type="checkbox" name="fx_4_hor" label="fx_4_hor" /></li>
              <li>  <Filters type="checkbox" name="fx_12_hr" label="fx_12_hr" />  </li>
              <li>  <Filters type="checkbox" name="data_inst_proc" label="data_inst_proc" /> </li>
              <li>  <Filters type="checkbox" name="hora_reg_proc" label="hora_reg_proc" /> </li>
              <li>  <Filters type="checkbox" name="data_concl_proc" label="data_concl_proc" /> </li>
              <li>  <Filters type="checkbox" name="hora_concl_proc" label="hora_concl_proc" /> </li>
              <li>  <Filters type="checkbox" name="mes_registro" label="mes_registro" /></li>
              <li>  <Filters type="checkbox" name="ano_registro" label="ano_registro" /> </li>
              <li>  <Filters type="checkbox" name="consolidado" label="consolidado" /> </li>
              <li>  <Filters type="checkbox" name="fato_real" label="fato_real" /> </li>
              <li>  <Filters type="checkbox" name="especificacao_crime" label="especificacao_crime" /></li>
              <li>  <Filters type="checkbox" name="meio_emp_coest" label="meio_emp_coest" /></li>
              <li>  <Filters type="checkbox" name="latitude" label="latitude" /> </li>
              <li>  <Filters type="checkbox" name="longitude" label="longitude" /> </li>
              <li>  <Filters type="checkbox" name="causa_presumivel" label="causa_presumivel" /> </li>
              <li>  <Filters type="checkbox" name="especializacao_fato" label="especializacao_fato" /> </li>
              <li>  <Filters type="checkbox" name="grupo_ocorrencia" label="grupo_ocorrencia" /> </li>
              <li> <Filters type="checkbox" name="identificacao_fato" label="identificacao_fato" /> </li>

            </ul>


    </>
  );
}

export default InputsFato;