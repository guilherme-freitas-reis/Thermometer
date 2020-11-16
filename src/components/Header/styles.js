import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  background: ${(props) => props.theme.colors.background};
  padding: 0 ${(props) => props.theme.paddings.containerLg};

  @media (max-width: 1600px) {
    height: 80px;
    padding: 0 ${(props) => props.theme.paddings.containerMd};
  }

  @media (max-width: 768px) {
    height: 70px;
    padding: 0 ${(props) => props.theme.paddings.containerSm};
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  text-decoration: none;
`;

export const LogoImage = styled.img`
  height: 60%;
`;

export const LogoText = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.sizes.mediumSmall};
  font-style: none;
  margin-left: 20px;

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.sizes.small};
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

export const CTA = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.primary};
  color: #ffffff;
  text-decoration: none;
  padding: 0 30px;
  height: 50%;
  border-radius: 50px;
  -webkit-box-shadow: 10px 9px 99px 0px rgba(0, 0, 0, 0.37);
  -moz-box-shadow: 10px 9px 99px 0px rgba(0, 0, 0, 0.37);
  box-shadow: 10px 9px 99px 0px rgba(0, 0, 0, 0.37);
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.sizes.small};
  }

  :hover {
    transition: 0.3s;
    opacity: 0.8;
  }
`;
