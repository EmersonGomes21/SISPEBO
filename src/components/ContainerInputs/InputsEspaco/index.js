import React from 'react';
import Filters from '../../Filters';
// import { Container } from './styles';

function InputsEspaco({filterSelect}) {
  return (
    <>
   
   <ul className={filterSelect === 'espaco' ? 'selectd' : 'no-select'}>
           

              <li> <Filters type="checkbox" name="sub_grupo" label="sub_grupo" /> </li>
              <li> <Filters type="checkbox" name="meio_empregado_sisp" label="meio_empregado_sisp" /></li>
              <li> <Filters type="checkbox" name="distrito" label="distrito" /> </li>
              <li> <Filters type="checkbox" name="municipios" label="municipios" /></li>
              <li> <Filters type="checkbox" name="regionais" label="regionais" /></li>
              <li> <Filters type="checkbox" name="bairros" label="bairros" /></li>
              <li> <Filters type="checkbox" name="reg_integracao" label="reg_integracao" /></li>
              <li> <Filters type="checkbox" name="risp" label="risp" /></li>
              <li> <Filters type="checkbox" name="aisp" label="aisp" /></li>
              <li> <Filters type="checkbox" name="rua_fato" label="rua_fato" /></li>
              <li> <Filters type="checkbox" name="linha" label="linha" /> </li>
              <li> <Filters type="checkbox" name="tipo_transporte" label="tipo_transporte" /> </li>
              <li> <Filters type="checkbox" name="perimetro" label="perimetro" /></li>
              <li> <Filters type="checkbox" name="complemento" label="complemento" /> </li>
              <li> <Filters type="checkbox" name="perimetro1" label="perimetro1" /> </li>
              <li> <Filters type="checkbox" name="perimetro2" label="perimetro2" /> </li>
              <li> <Filters type="checkbox" name="local_ocorrencia" label="local_ocorrencia" /> </li>

            </ul>

    </>
  );
}

export default InputsEspaco;