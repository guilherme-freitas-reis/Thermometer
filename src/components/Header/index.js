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
        <CTA to="/newsletter/subscribe">inscreva-se</CTA>
      </ActionsContainer>
    </Container>
  );
}

export default Header;
