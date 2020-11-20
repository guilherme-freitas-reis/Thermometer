import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  width: 450px;

  @media (max-width: 768px) {
    margin-top: 30px;
    width: 100%;
    padding: 0 20px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: ${(props) => props.theme.sizes.mediumSmall};
  margin: 0 0 30px;
  color: #333;

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.sizes.small};
  }
`;

export const Input = styled.input`
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 0 20px;
  outline-color: ${(props) => props.theme.colors.primary}ce;
  font-size: ${(props) => props.theme.sizes.small};

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  background: ${(props) => props.theme.colors.primary};
  height: 50px;
  border: none;
  font-size: ${(props) => props.theme.sizes.small};
  color: #fff;
  font-weight: 600;
  outline-color: ${(props) => props.theme.colors.primary}ce;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-top: 10px;
  }

  :hover {
    transition: 0.5s;
    background: ${(props) => props.theme.colors.primary}ce;
  }
`;
