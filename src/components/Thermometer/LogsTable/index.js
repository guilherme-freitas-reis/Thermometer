import React, { useState, useEffect } from "react";
import { getHours, getDate } from "date-fns";
import { ptBR } from "date-fns/locale";

import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    maxHeight: "100%",
  },
});

function createData(temperature, hour, date) {
  return { temperature, hour, date };
}

export default function LogsTable() {
  const classes = useStyles();

  const [rows, setRows] = useState([]);

  useEffect(() => {
    const startLog = () => {
      setInterval(() => {
        var data = rows;

        const newData = createData(
          Math.floor(Math.random() * 50),
          getHours(new Date(), { locale: ptBR }),
          getDate(new Date(), { locale: ptBR })
        );

        data.push(newData);

        console.log(data);

        setRows([data]);
      }, 1000);
    };

    startLog();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Temperatura</TableCell>
            <TableCell>Hora</TableCell>
            <TableCell>Data</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.temperature}º celsius
              </TableCell>
              <TableCell>{row.hour}</TableCell>
              <TableCell>{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
