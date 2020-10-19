import React from 'react';
import Filters from '../../Filters';
// import { Container } from './styles';

function InputsTempo({filterSelect}) {
  return (
    <>
      {/* Filtros de tempo */}

      <ul className={filterSelect === 'tempo' ? 'selectd' : 'no-select'}>
            
              <li> <Filters type="checkbox" name="dia_semana" label="dia_semana" /> </li>
              <li> <Filters type="checkbox" name="data_registro" label="data_registro" /> </li>
              <li> <Filters type="checkbox" name="hora_registro" label="hora_registro" /> </li>
              <li> <Filters type="checkbox" name="fx_4_hor" label="fx_4_hor" /></li>
              <li><Filters type="checkbox" name="fx_12_hr" label="fx_12_hr" /></li>
              <li><Filters type="checkbox" name="data_inst_proc" label="data_inst_proc" /></li>
              <li> <Filters type="checkbox" name="hora_reg_proc" label="hora_reg_proc" /></li>
              <li><Filters type="checkbox" name="data_concl_proc" label="data_concl_proc" /></li>
              <li><Filters type="checkbox" name="hora_concl_proc" label="hora_concl_proc" /></li>
              <li><Filters type="checkbox" name="mes_registro" label="mes_registro" /></li>
              <li><Filters type="checkbox" name="ano_registro" label="ano_registro" /></li>

            </ul>

    </>
  );
}

export default InputsTempo;