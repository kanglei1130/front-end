import React, {Component} from "react";
import {Task, TaskStatus} from "../store/types";
import {bindActionCreators} from "redux";
import {manageTask, deleteTask} from "../store/actions";
import {connect} from "react-redux";

import {
  ButtonGroup,
  TableCell,
  TableRow,
  Button
} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

export interface TaskRowProps {
  index: number,
  task: Task,
  manageTask: ({index: number, status: TaskStatus}) => {},
  deleteTask: ({index: number, status: TaskStatus}) => {},
}

class TaskRow extends Component<TaskRowProps> {
  constructor(props) {
    super(props);
    this.onManageTask = this.onManageTask.bind(this);
    this.onDeleteTask = this.onDeleteTask.bind(this);
  }
  onDeleteTask({index: number, status: TaskStatus}) {
    this.props.deleteTask({index: number, status: TaskStatus});
  }

  onManageTask({index: number, status: TaskStatus}) {
    this.props.manageTask({index: number, status: TaskStatus});
  }

  render() {
    let task = this.props.task;
    return (
      <TableRow key={this.props.index}>
        <TableCell component="th" scope="row">{task.name}</TableCell>
        <TableCell align="left">{task.stars}</TableCell>
        <TableCell align="left">{task.url}</TableCell>
        <TableCell align="left">{task.status}</TableCell>
        <TableCell align="left">
          <ButtonGroup color="primary" aria-label="outlined primary button group">
            <Button onClick={
              () => {this.onManageTask({index: this.props.index, status: TaskStatus.Started});}
            }>Start</Button>
            <Button onClick={
              () => {this.onManageTask({index: this.props.index, status: TaskStatus.Finished});}
            }>Finish</Button>
            <Button onClick={
              () => {this.onManageTask({index: this.props.index, status: TaskStatus.Idle});}
            }>Reset</Button>
            <Button startIcon={<DeleteIcon />} color="secondary" onClick={
              () => {this.onDeleteTask({index: this.props.index, status: TaskStatus.Idle});}
            }>Delete</Button>
          </ButtonGroup>
        </TableCell>
      </TableRow>
    )
  }
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    manageTask: bindActionCreators(manageTask, dispatch),
    deleteTask: bindActionCreators(deleteTask, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskRow);
