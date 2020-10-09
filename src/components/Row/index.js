import React from 'react';

import { Container } from './styles';

const Row = ({record}) => {
  const key = Object.keys(record);
  return (
    <Container>
    <tr key={record.id}> ''
    {
      key.map(key => <td key={key} style={{
        color: '#808080', textTransform: 'uppercase', fontSize: 18}}> {record[key]} </td>)
    }
  </tr>
  
    </Container>
  );
}

export default Row;