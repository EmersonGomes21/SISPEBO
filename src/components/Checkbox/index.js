import React, { useState } from 'react';
import { Form } from '@unform/web';
// import { Container } from './styles';
import Input from '../Form/input';
function Checkbox() {

  function handleSubmit(data) {
    console.log(data);

  }
  const [select, setSelect] = useState(false);
  const [select2, setSelect2] = useState(false);
  const [select3, setSelect3] = useState(false);

  return (
    <Form onSubmit={handleSubmit} >

      <Input name="BOP" type="checkbox" value={select} onClick={() => setSelect(!select)} />

      <Input name="vitima" type="checkbox" value={select2} onClick={() => setSelect2(!select2)} />

      <Input name="autoria" type="checkbox" value={select3} onClick={() => setSelect3(!select3)} />

      <button type="submit">Enviar</button>
    </Form>
  );
}

export default Checkbox;