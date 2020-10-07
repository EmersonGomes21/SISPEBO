import React from 'react';

 import {
    Container,
   } from './styles';


//Componente de linhas
const Row = ({record})=>{
const key = Object.keys(record);
  return (

    <tr key={record.id}>
    {
      key.map(key => <td key={key} style={{
        color: '#808080', textTransform: 'uppercase', fontSize: 18}}> {record[key]} </td>)
    }
  </tr>
  
  )
}

//Componente de linhas

const Table = ({
  data,
  heade
}) => {
  const keys = Object.keys(data[0]);
  
  return (
    <Container >
      <div className="scroll-touch">
    <table>
      <thead>
        <tr> 
          { /*colunas */ keys.map(key =>
            <th key={key} style={{textTransform: 'uppercase'}}>{key}</th>
          )}

        </tr>
      </thead>
     
      <tbody>
        {data.map(record => (<Row record={record} />))}
      </tbody>
    </table>
    </div>
    </Container>
  );
}

export default Table;