import React from 'react';

import { Container } from './styles';
import Table from '../Table';

const Lists_Tables = () => {
  const data = [
    {id: 1, bop: '123489944-23', name: 'Emerson Gomes REBOLSAS', last: 'Gomes', date: '21/12/1998', naturalidade: 'Braganca', cpf: '123.445.552.34', identificador: 5, BOP: '123489944-23', nome: 'Marilene', sobre_nome: 'Tavares', data: '21/12/1998', natura: 'Braganca', rg: '123.445.552.34'},
    {id: 2, bop: '123489944-23', name: 'Davi', last: 'Griff', date: '21/12/1998', naturalidade: 'Braganca', cpf: '123.445.552.34', identificador: 5, BOP: '123489944-23', nome: 'Marilene', sobre_nome: 'Tavares', data: '21/12/1998', natura: 'Braganca', rg: '123.445.552.34'},
    {id: 3, bop: '123489944-23', name: 'Renato', last: 'Vitão', date: '21/12/1998', naturalidade: 'Braganca', cpf: '123.445.552.34', identificador: 5, BOP: '123489944-23', nome: 'Marilene', sobre_nome: 'Tavares', data: '21/12/1998', natura: 'Braganca', rg: '123.445.552.34'},
    {id: 4, bop: '123489944-23', name: 'Luis', last: 'Vitão', date: '21/12/1998', naturalidade: 'Braganca', cpf: '123.445.552.34', identificador: 5, BOP: '123489944-23', nome: 'Marilene', sobre_nome: 'Tavares', data: '21/12/1998', natura: 'Braganca', rg: '123.445.552.34'},
    {id: 5, bop: '123489944-23', name: 'Marilene', last: 'Tavares', date: '21/12/1998', naturalidade: 'Braganca', cpf: '123.445.552.34', identificador: 5, BOP: '123489944-23', nome: 'Marilene', sobre_nome: 'Tavares', data: '21/12/1998', natura: 'Braganca', rg: '123.445.552.34'},
    {id: 6, bop: '123489944-23', name: 'Cleyton', last: 'Costa', date: '21/12/1998', naturalidade: 'Braganca', cpf: '123.445.552.34', identificador: 5, BOP: '123489944-23', nome: 'Marilene', sobre_nome: 'Tavares', data: '21/12/1998', natura: 'Braganca', rg: '123.445.552.34'},
    {id: 7, bop: '123489944-23', name: 'Emerson', last: 'Gomes', date: '21/12/1998', naturalidade: 'Braganca', cpf: '123.445.552.34', identificador: 5, BOP: '123489944-23', nome: 'Marilene', sobre_nome: 'Tavares', data: '21/12/1998', natura: 'Braganca', rg: '123.445.552.34'},
    {id: 8, bop: '123489944-23', name: 'Davi', last: 'Griff', date: '21/12/1998', naturalidade: 'Braganca', cpf: '123.445.552.34', identificador: 5, BOP: '123489944-23', nome: 'Marilene', sobre_nome: 'Tavares', data: '21/12/1998', natura: 'Braganca', rg: '123.445.552.34'},
    {id: 9, bop: '123489944-23', name: 'Renato', last: 'Vitão', date: '21/12/1998', naturalidade: 'Braganca', cpf: '123.445.552.34', identificador: 5, BOP: '123489944-23', nome: 'Marilene', sobre_nome: 'Tavares', data: '21/12/1998', natura: 'Braganca', rg: '123.445.552.34'},
    {id: 10, bop: '123489944-23', name: 'Luis', last: 'Vitão', date: '21/12/1998', naturalidade: 'Braganca', cpf: '123.445.552.34', identificador: 5, BOP: '123489944-23', nome: 'Marilene', sobre_nome: 'Tavares', data: '21/12/1998', natura: 'Braganca', rg: '123.445.552.34'},
    {id: 11, bop: '123489944-23', name: 'Marilene', last: 'Tavares', date: '21/12/1998', naturalidade: 'Braganca', cpf: '123.445.552.34', identificador: 5, BOP: '123489944-23', nome: 'Marilene', sobre_nome: 'Tavares', data: '21/12/1998', natura: 'Braganca', rg: '123.445.552.34'},
    {id: 12, bop: '123489944-23', name: 'Cleyton', last: 'Costa', date: '21/12/1998', naturalidade: 'Braganca', cpf: '123.445.552.34', identificador: 5, BOP: '123489944-23', nome: 'Marilene', sobre_nome: 'Tavares', data: '21/12/1998', natura: 'Braganca', rg: '123.445.552.34'},
    {id: 13, bop: '123489944-23', name: 'Emerson', last: 'Gomes', date: '21/12/1998', naturalidade: 'Braganca', cpf: '123.445.552.34', identificador: 5, BOP: '123489944-23', nome: 'Marilene', sobre_nome: 'Tavares', data: '21/12/1998', natura: 'Braganca', rg: '123.445.552.34'},
    {id: 14, bop: '123489944-23', name: 'Davi', last: 'Griff', date: '21/12/1998', naturalidade: 'Braganca', cpf: '123.445.552.34', identificador: 5, BOP: '123489944-23', nome: 'Marilene', sobre_nome: 'Tavares', data: '21/12/1998', natura: 'Braganca', rg: '123.445.552.34'},
    {id: 15, bop: '123489944-23', name: 'Renato', last: 'Vitão', date: '21/12/1998', naturalidade: 'Braganca', cpf: '123.445.552.34', identificador: 5, BOP: '123489944-23', nome: 'Marilene', sobre_nome: 'Tavares', data: '21/12/1998', natura: 'Braganca', rg: '123.445.552.34'},
    {id: 16, bop: '123489944-23', name: 'Luis', last: 'Vitão', date: '21/12/1998', naturalidade: 'Braganca', cpf: '123.445.552.34', identificador: 5, BOP: '123489944-23', nome: 'Marilene', sobre_nome: 'Tavares', data: '21/12/1998', natura: 'Braganca', rg: '123.445.552.34'},
    {id: 17, bop: '123489944-23', name: 'Marilene', last: 'Tavares', date: '21/12/1998', naturalidade: 'Braganca', cpf: '123.445.552.34', identificador: 5, BOP: '123489944-23', nome: 'Marilene', sobre_nome: 'Tavares', data: '21/12/1998', natura: 'Braganca', rg: '123.445.552.34'},
    {id: 18, bop: '123489944-23', name: 'Cleyton', last: 'Costa', date: '21/12/1998', naturalidade: 'Braganca', cpf: '123.445.552.34', identificador: 5, BOP: '123489944-23', nome: 'Marilene', sobre_nome: 'Tavares', data: '21/12/1998', natura: 'Braganca', rg: '123.445.552.34'},
    
  ];

  const heade = {
    id: 'Ident',
    name: 'Nome',
    last: 'Sobre nome',
  };
  return (

    <Container>
     <Table data={data} heade={heade}/>
   
    </Container>
  );
}

export default Lists_Tables;