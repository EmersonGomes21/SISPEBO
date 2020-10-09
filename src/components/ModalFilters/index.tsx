import React from 'react';

import { Container, Modal } from './styles';

const ModalFilters: React.FC = (
  {children}
) => {
  return (
    <Modal>
      <Container>
        <button className="close">Close</button>
        <div className="content"> {children}</div>
      </Container>
    </Modal>
  );
}          

export default ModalFilters;