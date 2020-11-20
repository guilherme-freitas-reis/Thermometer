import React from "react";

import { Container, Title, Input, Button } from "./styles";

function Form() {
  function save(e) {
    e.preventDefault();
  }

  return (
    <Container onSubmit={save} method="POST">
      <Title>receba alertas de temperatura diretamente no seu e-mail</Title>
      <Input type="text" placeholder="Seu nome" />
      <Input type="email" placeholder="Seu e-mail completo" />
      <Button type="submit">receber notificações</Button>
    </Container>
  );
}

export default Form;
