import React from "react";
import {Task} from "../store/reducers";
import {TableCell, TableRow} from "@material-ui/core";

export interface TaskRowProps {
  task: Task;
}

export default function TaskRow(props : TaskRowProps) {
  let task = props.task;
  return (
    <TableRow key={task.name}>
      <TableCell component="th" scope="row">{task.name}</TableCell>
      <TableCell align="left">{task.stars}</TableCell>
      <TableCell align="left">{task.url}</TableCell>
      <TableCell align="left">{task.url}</TableCell>
    </TableRow>
  )
};

