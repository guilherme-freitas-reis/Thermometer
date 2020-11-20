import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 ${(props) => props.theme.paddings.containerLg};

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 ${(props) => props.theme.paddings.containerSm};
  }
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 400px;
  background: #fff;
  border-radius: 10px;
  -webkit-box-shadow: 10px 9px 99px 0px rgba(0, 0, 0, 0.17);
  -moz-box-shadow: 10px 9px 99px 0px rgba(0, 0, 0, 0.17);
  box-shadow: 10px 9px 99px 0px rgba(0, 0, 0, 0.17);
  margin-right: 5em;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin: 20px 0;
  }
`;

export const DataHeader = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 25px;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 500;
  padding: 0 20px;
  box-sizing: border-box;
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

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin: 0 0 30px;
  }
`;
