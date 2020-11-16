import React from "react";

import Header from "../../components/Header";
import Thermometer from "../../components/Thermometer";
import Footer from "../../components/Footer";

import { Container } from "./styles";

function Index() {
  return (
    <Container>
      <Header />
      <Thermometer />
      <Footer />
    </Container>
  );
}

export default Index;
