import React, {Component} from "react";
import {Worker, WorkerLog} from "../store/types";
import {bindActionCreators} from "redux";
import {manageTask, deleteTask, loadWorkerLog} from "../store/actions";
import {connect} from "react-redux";

import {
  ButtonGroup,
  TableCell,
  TableRow,
  Button,
  Link,
} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

export interface WorkerRowProps {
  index: number,
  worker: Worker,
  deleteTask: ({index: number, status: TaskStatus}) => {},
  loadWorkerLog: (log: WorkerLog) => {},
}

class WorkerRow extends Component<WorkerRowProps> {
  constructor(props) {
    super(props);
    this.onViewLog = this.onViewLog.bind(this);
  }
  onViewLog(param: WorkerLog) {
    this.props.loadWorkerLog(param);
  }

  render() {
    let worker = this.props.worker;
    return (
      <TableRow key={this.props.index}>
        <TableCell component="th" scope="row">{worker.name}</TableCell>
        <TableCell align="left">{worker.pid}</TableCell>
        <TableCell align="left">{worker.logLineCount}</TableCell>
        <TableCell align="left">
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              let param : WorkerLog = {
                index: this.props.index,
                pid : worker.pid,
                start: 0
              };
              this.onViewLog(param);
            }}
          >
            {worker.logPreview}
          </Link>
        </TableCell>
        <TableCell align="left">
            <Button startIcon={<DeleteIcon />} color="secondary" onClick={
              () => { console.log("kill worker");}
            }>Kill</Button>
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
    loadWorkerLog: bindActionCreators(loadWorkerLog, dispatch),
    manageTask: bindActionCreators(manageTask, dispatch),
    deleteTask: bindActionCreators(deleteTask, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkerRow);
