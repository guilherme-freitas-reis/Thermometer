import React from "react";

import LogsTable from "./LogsTable";

import { Container, DataContainer, LogContainer } from "./styles";

function Thermometer() {
  return (
    <Container>
      <DataContainer />
      <LogContainer>
        <LogsTable />
      </LogContainer>
    </Container>
  );
}

export default Thermometer;
