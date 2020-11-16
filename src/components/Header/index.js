import React from "react";

import {
  Container,
  LogoContainer,
  LogoImage,
  LogoText,
  ActionsContainer,
  CTA,
} from "./styles";

function Header() {
  return (
    <Container>
      <LogoContainer to="/">
        <LogoImage src="/images/icon.png" />
        <LogoText>thermometer</LogoText>
      </LogoContainer>
      <ActionsContainer>
        <CTA to="/newsletter/subscribe">receber notificações</CTA>
      </ActionsContainer>
    </Container>
  );
}

export default Header;
