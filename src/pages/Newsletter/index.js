import React from "react";

import { Container, Main } from './styles';

import Header from '../../components/Header';
import Form from './Form';

function Newsletter() {
  return <Container>
    <Header/>
    <Main>
      <Form/>
    </Main>
  </Container>;
}

export default Newsletter;
