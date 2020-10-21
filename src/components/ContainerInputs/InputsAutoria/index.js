import React, { useState } from 'react';
import Filters from '../../Filter';
// import { Container } from './styles';

function InputsAutoria({ filterSelect }) {

  const [selectTodosAutoria, setSelectTodosAutoria] = useState(false);
  return (
    <>

      <ul className={filterSelect === 'autoria' ? 'selectd' : 'no-select'}>


        <li className="todos"> <Filters type="checkbox" name="Todos" label="Todos" value={selectTodosAutoria} defaultChecked={selectTodosAutoria} onClick={() => setSelectTodosAutoria(!selectTodosAutoria)} /> </li>

        <li><Filters type="checkbox" name="aut_nome" label="aut_nome" defaultChecked={selectTodosAutoria} /></li>
        <li> <Filters type="checkbox" name="aut_alcunha" label="aut_alcunha" defaultChecked={selectTodosAutoria} /> </li>
        <li> <Filters type="checkbox" name="aut_data_nasc" label="aut_data_nasc" defaultChecked={selectTodosAutoria} /></li>
        <li> <Filters type="checkbox" name="aut_idade" label="aut_idade" defaultChecked={selectTodosAutoria} /> </li>
        <li> <Filters type="checkbox" name="aut_fx_etaria" label="aut_fx_etaria" defaultChecked={selectTodosAutoria} /></li>
        <li> <Filters type="checkbox" name="aut_nro_doc" label="aut_nro_doc" defaultChecked={selectTodosAutoria} /></li>
        <li>  <Filters type="checkbox" name="aut_tipo_doc" label="aut_tipo_doc" defaultChecked={selectTodosAutoria} /></li>
        <li> <Filters type="checkbox" name="aut_pai" label="aut_pai" defaultChecked={selectTodosAutoria} /> </li>
        <li><Filters type="checkbox" name="aut_mae" label="aut_mae" defaultChecked={selectTodosAutoria} /> </li>
        <li><Filters type="checkbox" name="aut_tipo" label="aut_tipo" defaultChecked={selectTodosAutoria} /> </li>
        <li>  <Filters type="checkbox" name="aut_sexo" label="aut_sexo" defaultChecked={selectTodosAutoria} /></li>
        <li> <Filters type="checkbox" name="grau_de_relacionamento" label="grau_de_relacionamento" defaultChecked={selectTodosAutoria} />
        </li>
        <li> <Filters type="checkbox" name="aut_cor_pele" label="aut_cor_pele" defaultChecked={selectTodosAutoria} /> </li>
        <li> <Filters type="checkbox" name="aut_grau_inst" label="aut_grau_inst" defaultChecked={selectTodosAutoria} /></li>
        <li><Filters type="checkbox" name="aut_profissao" label="aut_profissao" defaultChecked={selectTodosAutoria} /> </li>
        <li><Filters type="checkbox" name="aut_sit_emprego" label="aut_sit_emprego" defaultChecked={selectTodosAutoria} /> </li>
        <li> <Filters type="checkbox" name="aut_est_civil" label="aut_est_civil" defaultChecked={selectTodosAutoria} /></li>
        <li> <Filters type="checkbox" name="meio_locomocao" label="meio_locomocao" defaultChecked={selectTodosAutoria} /></li>
        <li><Filters type="checkbox" name="cor_veiculo" label="cor_veiculo" defaultChecked={selectTodosAutoria} /> </li>
        <li> <Filters type="checkbox" name="marca_veic_fuga" label="marca_veic_fuga" defaultChecked={selectTodosAutoria} /> </li>
        <li> <Filters type="checkbox" name="modelo_do_veic_fuga" label="modelo_do_veic_fuga" defaultChecked={selectTodosAutoria} /> </li>
        <li> <Filters type="checkbox" name="qtd_autor" label="qtd_autor" defaultChecked={selectTodosAutoria} /></li>
        <li>  <Filters type="checkbox" name="ident_autoria" label="ident_autoria" defaultChecked={selectTodosAutoria} /></li>

      </ul>
    </>
  );
}

export default InputsAutoria;