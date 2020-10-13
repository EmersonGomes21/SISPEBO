import React from 'react';

import { Container, Modal } from './styles';
//import {ModalClose} from '../../@types';

const ModalFilters = (
  {onClose = ()=> {}, children}
) => {
  return (
    <Modal>
      <Container>
        <button className="close" onClick={onClose}></button>
        <div className="content"> {children}</div>
      </Container>
    </Modal>
  );
}          

export default ModalFilters;