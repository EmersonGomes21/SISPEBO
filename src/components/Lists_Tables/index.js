import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import Table from '../Table';


const Lists_Tables = () => {

  const heade = {
    id: 'Ident',
    name: 'Nome',
    last: 'Sobre nome',
  };

  const [data, setData] = useState();
  
  useEffect(() => {
    Promise.all([
      fetch(`http://192.168.0.105:3333/bops`)

    ]).then(async response => {
      const [atlasPResponse] = response;
      const atlasP = await atlasPResponse.json();
      

      /**
       * const shuffledRepos = repos.sort(() => 0.50 - Math.random());
      const sliceRepos = shuffledRepos.slice(0, 6);
       */

      setData({
        atlasP
      })


    });
  }, []);


  if (!data) {
    return <h1>Loading...</h1>
  }
   console.log(data.atlasP);
  return (

    <Container>
     <Table data={data.atlasP} heade={heade}/>
     
    </Container>
  );
}

export default Lists_Tables;