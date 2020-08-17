import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  loadList, loadTasks, loadWorkers,
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
import {Worker} from "../store/types";
import TaskRow from "./worker-row";

interface Props {
  workers: Worker[],
  loadWorkers: () => {},
  loadTasks: (num: number) => {},
};

class Home extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount() {
    /*
    let father = this.props;
    window.setInterval(function(){
      father.loadWorkers();
    }, 1000);
    */
    this.props.loadWorkers();
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
                  <TableCell>Name</TableCell>
                  <TableCell align="left">PID</TableCell>
                  <TableCell align="left">Lines of Log</TableCell>
                  <TableCell align="left">Log Preview</TableCell>
                  <TableCell align="left">Manage</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.workers.map(function(row, index) {
                   return <TaskRow key = {index} worker = {row} index = {index} />
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
    workers: state.loader.workers
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadTasks: bindActionCreators(loadTasks, dispatch),
    loadList: bindActionCreators(loadList, dispatch),
    loadWorkers: bindActionCreators(loadWorkers, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
