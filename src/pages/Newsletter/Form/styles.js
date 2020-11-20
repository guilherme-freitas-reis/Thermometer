import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  width: 400px;
`;


export const Input = styled.input`
    height: 50px;
    border: 1px solid rgba(0,0,0,.1);
    margin-bottom: 20px;
`;

export const Button = styled.button`
    background: ${props => props.theme.colors.primary};
    height: 50px;
    border: none;
`;