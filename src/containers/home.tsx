import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  loadList,
} from "../store/actions";
import {
  Paper,
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
import {Task} from "../store/reducers";

interface Props {
  repos: Task[],
  loadList: () => {}
};

export interface TaskRowProps {
  task: Task;
}

function TaskRow(props : TaskRowProps) {
  let task = props.task;
  return (
  <TableRow key={task.name}>
    <TableCell component="th" scope="row">
      {task.name}
    </TableCell>
    <TableCell align="left">{task.stars}</TableCell>
    <TableCell align="left">{task.url}</TableCell>
    <TableCell align="left">{task.url}</TableCell>
  </TableRow>
  )
};

class Home extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    this.props.loadList();
  }

  render() {
    return (
        <div>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="left">Stars</TableCell>
                  <TableCell align="left">URL</TableCell>
                  <TableCell align="left">Manage</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.repos.map(row => (
                    <TaskRow task={row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    total_count: state.loader.total_count,
    repos: state.loader.repos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadList: bindActionCreators(loadList, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
