import React from 'react';
import Filters from '../../Filters';
// import { Container } from './styles';

function InputsVitima({filterSelect}) {
  return(
    <> 
  
  <ul className={filterSelect === 'vitima' ? 'selectd' : 'no-select'}>
          
              <li> <Filters type="checkbox" name="relator" label="relator" /> </li>
              <li> <Filters type="checkbox" name="relator" label="relator" /> </li>
              <li> <Filters type="checkbox" name="relato" label="relato" /> </li>
              <li> <Filters type="checkbox" name="atuacao" label="atuacao" /> </li>
              <li> <Filters type="checkbox" name="vit_nome" label="vit_nome" /> </li>
              <li> <Filters type="checkbox" name="vit_alcunha" label="vit_alcunha" /> </li>
              <li>  <Filters type="checkbox" name="vit_dt_nasc" label="vit_dt_nasc" /> </li>
              <li> <Filters type="checkbox" name="vit_idade" label="vit_idade" /> </li>
              <li> <Filters type="checkbox" name="vit_fx_etaria" label="vit_fx_etaria" /> </li>
              <li> <Filters type="checkbox" name="vit_nro_doc" label="vit_nro_doc" /> </li>
              <li> <Filters type="checkbox" name="vit_tipo_doc" label="vit_tipo_doc" /> </li>
              <li> <Filters type="checkbox" name="vit_pai" label="vit_pai" /> </li>
              <li> <Filters type="checkbox" name="vit_mae" label="vit_mae" /> </li>
              <li> <Filters type="checkbox" name="vit_tipo" label="vit_tipo" /> </li>
              <li> <Filters type="checkbox" name="vit_sexo" label="vit_sexo" /></li>
              <li> <Filters type="checkbox" name="vit_cor_pele" label="vit_cor_pele" /></li>
              <li> <Filters type="checkbox" name="vit_grau_inst" label="vit_grau_inst" /></li>
              <li> <Filters type="checkbox" name="vit_profissao" label="vit_profissao" /></li>
              <li> <Filters type="checkbox" name="vit_situacao_emprego" label="vit_situacao_emprego" /></li>
              <li> <Filters type="checkbox" name="vit_estado_civil" label="vit_estado_civil" /></li>

            </ul>

    </>

  );
}

export default InputsVitima;