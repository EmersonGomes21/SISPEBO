import React, { useState } from 'react';
import { Container, Modal } from './styles';
import { Form } from '@unform/web';
import InputsBop from '../ContainerInputs/InputsBop';
import InputsTempo from '../ContainerInputs/InputsTempo';
import InputsFato from '../ContainerInputs/InputsFato';
import InputsEspaco from '../ContainerInputs/InputsEspaco';
import InputsVitima from '../ContainerInputs/InputsVitima';
import InputsAutoria from '../ContainerInputs/InputsAutoria';
import InputsOutros from '../ContainerInputs/InputsOutros';

const ModalFilters = (
  { onClose = () => { }, children }
) => {
  const [filterSelect, setFilterSelect] = useState('bop');
  
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Modal >
      <Container  >
        <button className="close" onClick={onClose}></button>
        <div className="content">

          <Form onSubmit={handleSubmit}>

            <ul className="container-as">
              <li onClick={() => setFilterSelect('bop')}> <a className={filterSelect === 'bop' ? 'select' : ''}>BOP</a></li>
              <li onClick={() => setFilterSelect('fato')}> <a className={filterSelect === 'fato' ? 'select' : ''}>FATO</a></li>
              <li onClick={() => setFilterSelect('espaco')}> <a className={filterSelect === 'espaco' ? 'select' : ''}>ESPAÇO</a></li>
              <li onClick={() => setFilterSelect('tempo')}> <a className={filterSelect === 'tempo' ? 'select' : ''}>TEMPO</a></li>
              <li onClick={() => setFilterSelect('vitima')} > <a className={filterSelect === 'vitima' ? 'select' : ''}>VITIMA</a></li>
              <li onClick={() => setFilterSelect('autoria')} > <a className={filterSelect === 'autoria' ? 'select' : ''}>AUTORIA</a></li>
              <li onClick={() => setFilterSelect('outros')} > <a className={filterSelect === 'outros' ? 'select' : ''}>OUTROS</a></li>
            </ul>
              
            <InputsBop filterSelect={filterSelect} />
            <InputsTempo filterSelect={filterSelect} />
            <InputsFato filterSelect={filterSelect} />
            <InputsEspaco filterSelect={filterSelect} />
            <InputsVitima filterSelect={filterSelect} />
            <InputsAutoria filterSelect={filterSelect}  />
            <InputsOutros filterSelect={filterSelect} />

            <button type="submit" className="button">Filtrar</button>
          </Form>
       
        </div>
      </Container>
    </Modal>
  );
}

export default ModalFilters;