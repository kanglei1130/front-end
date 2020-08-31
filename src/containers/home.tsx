import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  loadList, loadTasks, loadData
} from "../store/actions";
import {
  Paper,
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import {Task} from "../store/types";
import TaskRow from "./task-row";

interface Props {
  tasks: Task[],
  loadList: () => {},
  loadTasks: (num: number) => {},
  loadData: () => {},
};

class Home extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount() {
    this.props.loadTasks(10);
    this.props.loadData();
  }

  render() {
    return (
        <div style = {{padding: 20}}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <colgroup>
                <col style={{width:'10%'}}/>
                <col style={{width:'10%'}}/>
                <col style={{width:'20%'}}/>
                <col style={{width:'10%'}}/>
                <col style={{width:'20%'}}/>
              </colgroup>
              <TableHead>
                <TableRow>
                  <TableCell>Task ID</TableCell>
                  <TableCell align="left">Owner</TableCell>
                  <TableCell align="left">Timer</TableCell>
                  <TableCell align="left">Status</TableCell>
                  <TableCell align="left">Manage</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.tasks.map(function(row, index) {
                   return <TaskRow key = {index} task = {row} index = {index} />
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.loader.tasks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadTasks: bindActionCreators(loadTasks, dispatch),
    loadList: bindActionCreators(loadList, dispatch),
    loadData: bindActionCreators(loadData, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
