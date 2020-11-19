import React, { useState, useEffect } from "react";
import Thermometers from 'react-thermometer-component'
import firebase from "../../firebase";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import LogsTable from "./LogsTable";

import { Container, DataContainer, LogContainer } from "./styles";

function Thermometer() {

  const [rows, setRows] = useState([]);
  const [temp, setTemp] = useState(30);

  useEffect(() => {
    function start() {
        firebase
          .database()
          .ref("temperature_real_time")
          .on("value", (snapshot) => {
            var item = {
              temperature: snapshot.val().temperature_value,
              date: format(new Date(), "dd/MM/yyyy", { locale: ptBR }),
              hour: format(new Date(), "HH:mm:ss", { locale: ptBR }),
            };

            setTemp(snapshot.val().temperature_value)
            setRows((rows) => [item, ...rows]);
          });
    }

    start();
  }, []);
  return (
    <Container>
      <DataContainer>
      <Thermometers
          theme="light"
          value={temp}
          max="80"
          steps="3"
          format="°C"
          size="large"
          height="300"
        />
      </DataContainer>
      <LogContainer>
        <LogsTable rows={rows} />
      </LogContainer>
    </Container>
  );
}

export default Thermometer;
