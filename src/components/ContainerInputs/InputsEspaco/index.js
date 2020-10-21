import React, { useState } from 'react';
import Filters from '../../Filter';
// import { Container } from './styles';

function InputsEspaco({ filterSelect }) {
  const [selectTodosEspaco, setSelectTodosEspaco] = useState(true);

  return (
    <>

      <ul className={filterSelect === 'espaco' ? 'selectd' : 'no-select'}>

        <li className="todos"> <Filters type="checkbox" name="TodosEspaco" label="Todos" value={selectTodosEspaco} onClick={() => setSelectTodosEspaco(!selectTodosEspaco)} defaultChecked={selectTodosEspaco} /> </li>
        <li> <Filters type="checkbox" name="sub_grupo" label="sub_grupo" defaultChecked={selectTodosEspaco} /> </li>
        <li> <Filters type="checkbox" name="meio_empregado_sisp" label="meio_empregado_sisp" defaultChecked={selectTodosEspaco} /></li>
        <li> <Filters type="checkbox" name="distrito" label="distrito" defaultChecked={selectTodosEspaco} /> </li>
        <li> <Filters type="checkbox" name="municipios" label="municipios" defaultChecked={selectTodosEspaco} /></li>
        <li> <Filters type="checkbox" name="regionais" label="regionais" defaultChecked={selectTodosEspaco} /></li>
        <li> <Filters type="checkbox" name="bairros" label="bairros" defaultChecked={selectTodosEspaco} /></li>
        <li> <Filters type="checkbox" name="reg_integracao" label="reg_integracao" defaultChecked={selectTodosEspaco} /></li>
        <li> <Filters type="checkbox" name="risp" label="risp" defaultChecked={selectTodosEspaco} /></li>
        <li> <Filters type="checkbox" name="aisp" label="aisp" defaultChecked={selectTodosEspaco} /></li>
        <li> <Filters type="checkbox" name="rua_fato" label="rua_fato" defaultChecked={selectTodosEspaco} /></li>
        <li> <Filters type="checkbox" name="linha" label="linha" defaultChecked={selectTodosEspaco} /> </li>
        <li> <Filters type="checkbox" name="tipo_transporte" label="tipo_transporte" defaultChecked={selectTodosEspaco} /> </li>
        <li> <Filters type="checkbox" name="perimetro" label="perimetro" defaultChecked={selectTodosEspaco} /></li>
        <li> <Filters type="checkbox" name="complemento" label="complemento" defaultChecked={selectTodosEspaco} /> </li>
        <li> <Filters type="checkbox" name="perimetro1" label="perimetro1" defaultChecked={selectTodosEspaco} /> </li>
        <li> <Filters type="checkbox" name="perimetro2" label="perimetro2" defaultChecked={selectTodosEspaco} /> </li>
        <li> <Filters type="checkbox" name="local_ocorrencia" label="local_ocorrencia" defaultChecked={selectTodosEspaco} /> </li>

      </ul>

    </>
  );
}

export default InputsEspaco;