import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 ${(props) => props.theme.paddings.containerLg};
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  background: #fff;
  border-radius: 10px;
  -webkit-box-shadow: 10px 9px 99px 0px rgba(0, 0, 0, 0.17);
  -moz-box-shadow: 10px 9px 99px 0px rgba(0, 0, 0, 0.17);
  box-shadow: 10px 9px 99px 0px rgba(0, 0, 0, 0.17);
  margin-right: 5em;
`;

export const LogContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  background: #fff;
  border-radius: 10px;
  -webkit-box-shadow: 10px 9px 99px 0px rgba(0, 0, 0, 0.17);
  -moz-box-shadow: 10px 9px 99px 0px rgba(0, 0, 0, 0.17);
  box-shadow: 10px 9px 99px 0px rgba(0, 0, 0, 0.17);
`;
