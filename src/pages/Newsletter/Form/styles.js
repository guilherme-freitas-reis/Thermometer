import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  width: 450px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: ${(props) => props.theme.sizes.mediumSmall};
  margin: 0 0 30px;
  color: #333;
`;

export const Input = styled.input`
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 0 20px;
  outline-color: ${(props) => props.theme.colors.primary}ce;
  font-size: ${(props) => props.theme.sizes.small};
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

  :hover {
    transition: 0.5s;
    background: ${(props) => props.theme.colors.primary}ce;
  }
`;
