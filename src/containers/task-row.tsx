import React, {Component} from "react";
import {Task} from "../store/types";
import {TableCell, TableRow} from "@material-ui/core";
import {bindActionCreators} from "redux";
import {startTask, endTask} from "../store/actions";
import {connect} from "react-redux";

export interface TaskRowProps {
  key: number;
  task: Task;
}

class TaskRow extends Component<TaskRowProps> {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    let task = this.props.task;
    return (
      <TableRow key={this.props.key}>
        <TableCell component="th" scope="row">{task.name}</TableCell>
        <TableCell align="left">{task.stars}</TableCell>
        <TableCell align="left">{task.url}</TableCell>
        <TableCell align="left">{task.status}</TableCell>
        <TableCell align="left">{task.url}</TableCell>
      </TableRow>
    )
  }
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    startTask: bindActionCreators(startTask, dispatch),
    endTask: bindActionCreators(endTask, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskRow);
