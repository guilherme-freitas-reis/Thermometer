import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: ${(props) => props.theme.colors.background};
`;

export const Main = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
`;
