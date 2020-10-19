import React, {useState} from 'react';
import Filters from '../../Filters';
// import { Container } from './styles';

function InputsBop({filterSelect}) {

  const [select, setSelect] = useState(false);
  const [select2, setSelect2] = useState(false);
  const [select3, setSelect3] = useState(false);
  return (
    <>
     {/* Filtros do BOP */}

     <ul className={filterSelect === 'bop' ? 'selectd' : 'no-select'}>
    
     <li> <Filters type="checkbox" name="servidor" label="servidor" value={select2} onClick={() => setSelect2(!select2)} /> </li>
     <li> <Filters type="checkbox" name="pk" label="pk" value={select3} onClick={() => setSelect3(!select3)}/> </li>
     <li> <Filters type="checkbox" name="nro_bop" label="nro_bop" /> </li>
     <li> <Filters type="checkbox" name="nro_bop_editado" label="nro_bop_editado" /> </li>
     <li> <Filters type="checkbox" name="nro_tombo" label="nro_tombo" /> </li>
     <li> <Filters type="checkbox" name="tipo_tombo" label="tipo_tombo" /> </li>
     <li> <Filters type="checkbox" name="unidade_origem" label="unidade_origem" /> </li>
     <li> <Filters type="checkbox" name="unidade_responsavel" label="unidade_responsavel" /> </li>
     <li> <Filters type="checkbox" name="sit_proc" label="sit_proc" /></li>
     <li> <Filters type="checkbox" name="classe_motivo" label="classe_motivo" /></li>

   </ul>
   </>
  );
}

export default InputsBop;