import React from "react";

import { Container, Main } from "./styles";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Form from "./Form";

function Newsletter() {
  return (
    <Container>
      <Header />
      <Main>
        <Form />
      </Main>
      <Footer />
    </Container>
  );
}

export default Newsletter;
