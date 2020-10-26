import React, { useState, useEffect } from 'react';
import Filters from '../../Filter';
function InputsBop({ filterSelect }) {
  const [select, setSelect] = useState([]);
  const [selectTodosBop, setSelectTodosBop] = useState(true);
  const [value] = useState('');

/**
 * blz, vc tá usando componentes não controlados, certo? Então não precisa se preocupar com esse items: [], que parece estar em um estado.. vc pode acessar todos os checkboxes dentro da sua função handleSubmit, pelo objeto de evento: console.log(e.target.elements.items).. coloca esse código no seu handleSubmit e me diz o que ele retorna :)
 */
  useEffect(()=>{
    let inputs = [
      {id: 1, name: "pk", label: "pk", value: value },
      {id: 2, name: "servidor", label: "servidor", value: value},
      {id: 3, name: "nro_bop", label: "N° bop", value: value},
      {id: 4, name: "nro_bop_editado", label: "N° bop editado", value: value},
      {id: 5, name: "nro_tombo", label: "N° tombo", value: value},
      {id: 6, name: "nro_bop_editado", label: "N° bop editado", value: value},
      {id: 7, name: "unidade_origem", label: "unidade de origem", value: value},
      {id: 8, name: "unidade_responsavel", label: "unidade_responsavel", value: value},
      {id: 9, name: "sit_proc", label: "sit proc", value: value},
      {id: 10, name: "classe_motivo", label: "classe motivo", value: value}
    ];

    setSelect(
      inputs.map(d =>{
        return {
          select: true, 
          id: d.id,
          name: d.name,
          label: d.label,
          value: d.name
        };
      })
    );

    

  },[]);
  
  return (
    <>
      {/* Filtros do BOP */}
      <ul className={filterSelect === 'bop' ? 'selectd' : 'no-select'}>
        <li className="todos"> <Filters 
        type="checkbox" 
        name="TodosBop"
        label="Todos"
        onClick={() => setSelectTodosBop(!selectTodosBop)}
        checked={ selectTodosBop === true ? true : false}
        /> </li>

       { select.map((d, i) => (
          <li key={d.id} > 
          <Filters 
          type="checkbox" onChange={(event) =>{
            let checked = event.target.checked;
            setSelect(
              select.map(data=>{
              if(d.id===data.id){

                data.select = checked;
              }
              return data;
            })
            );

          }} 
          name={d.name} 
          label={d.label} 
          value={(d.select === true && selectTodosBop === true) ? d.value : ''}
          checked={ selectTodosBop === true ? d.select : !d.select}
           /></li>
       ))}
      </ul>
    </>


  ); 
};

export default InputsBop;