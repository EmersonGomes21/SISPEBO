import React from 'react';
import Filters from '../../Filters';
// import { Container } from './styles';

function InputsAutoria({filterSelect}) {
  return (
    <>

<ul className={filterSelect === 'autoria' ? 'selectd' : 'no-select'}>

              <li><Filters type="checkbox" name="aut_nome" label="aut_nome" />

              </li>
              <li> <Filters type="checkbox" name="aut_alcunha" label="aut_alcunha" /> </li>
              <li> <Filters type="checkbox" name="aut_data_nasc" label="aut_data_nasc" /></li>
              <li> <Filters type="checkbox" name="aut_idade" label="aut_idade" /> </li>
              <li> <Filters type="checkbox" name="aut_fx_etaria" label="aut_fx_etaria" /></li>
              <li> <Filters type="checkbox" name="aut_nro_doc" label="aut_nro_doc" /></li>
              <li>  <Filters type="checkbox" name="aut_tipo_doc" label="aut_tipo_doc" /></li>
              <li> <Filters type="checkbox" name="aut_pai" label="aut_pai" /> </li>
              <li><Filters type="checkbox" name="aut_mae" label="aut_mae" /> </li>
              <li><Filters type="checkbox" name="aut_tipo" label="aut_tipo" /> </li>
              <li>  <Filters type="checkbox" name="aut_sexo" label="aut_sexo" /></li>
              <li> <Filters type="checkbox" name="grau_de_relacionamento" label="grau_de_relacionamento" />
              </li>
              <li> <Filters type="checkbox" name="aut_cor_pele" label="aut_cor_pele" /> </li>
              <li> <Filters type="checkbox" name="aut_grau_inst" label="aut_grau_inst" /></li>
              <li><Filters type="checkbox" name="aut_profissao" label="aut_profissao" /> </li>
              <li><Filters type="checkbox" name="aut_sit_emprego" label="aut_sit_emprego" /> </li>
              <li> <Filters type="checkbox" name="aut_est_civil" label="aut_est_civil" /></li>
              <li> <Filters type="checkbox" name="meio_locomocao" label="meio_locomocao" /></li>
              <li><Filters type="checkbox" name="cor_veiculo" label="cor_veiculo" /> </li>
              <li> <Filters type="checkbox" name="marca_veic_fuga" label="marca_veic_fuga" /> </li>
              <li> <Filters type="checkbox" name="modelo_do_veic_fuga" label="modelo_do_veic_fuga" /> </li>
              <li> <Filters type="checkbox" name="qtd_autor" label="qtd_autor" /></li>
              <li>  <Filters type="checkbox" name="ident_autoria" label="ident_autoria" /></li>

            </ul>
    </>
  );
}

export default InputsAutoria;