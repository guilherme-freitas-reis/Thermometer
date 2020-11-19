import React, { useState, useEffect } from "react";
import firebase from "../../../firebase";
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

export default function LogsTable() {
  const classes = useStyles();

  const [rows, setRows] = useState([]);

  useEffect(() => {
    function start() {
      setInterval(() => {
        firebase
          .database()
          .ref("temperature_real_time")
          .once("value")
          .then((snapshot) => {
            var data = rows;

            var item = {
              temperature: snapshot.val().temperature_value,
              date: 2,
              hour: 2,
            };

            data.push(item);

            setRows(data);
          });
        console.log(rows);
      }, 1000);
    }

    start();
  }, []);

  return (
    <div>
      {rows.map((item) => (
        <div>oi</div>
      ))}
    </div>
  );
}
