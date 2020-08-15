import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Pagination from "@material-ui/lab/Pagination";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import {
  loadList,
  setItemSelected,
  deleteItem
} from "../actions/load-list-action";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_page: 0
    };
    this.onChangePage = this.onChangePage.bind(this);
    this.onSelected = this.onSelected.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  componentDidMount() {
    this.props.loadList({ page: 1, per_page: 10 });
  }
  onChangePage(event, number) {
    const default_per_page = 4;
    let per_page = Math.min(
      default_per_page,
      this.props.total_count - (number - 1) * default_per_page
    );
    this.props.loadList({ page: number, per_page: per_page });
  }
  onSelected({ index, event }) {
    let checked = event.target.checked;
    this.props.setItemSelected({ index, checked });
  }
  onDelete({ index }) {
    this.props.deleteItem({ index });
  }
  render() {
    return (
      <div>
        <Pagination
          count={Math.ceil(this.props.total_count / 10)}
          color="primary"
          onChange={this.onChangePage}
        />
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="left">Owner</TableCell>
                <TableCell align="left">Stars</TableCell>
                <TableCell align="left">URL</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.repos.map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.owner}</TableCell>
                  <TableCell align="left">{row.stars}</TableCell>
                  <TableCell align="left">{row.url}</TableCell>
                </TableRow>
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
    repos: state.loader.repos,
    total_count: state.loader.total_count,
    ui: state.loader.ui
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadList: bindActionCreators(loadList, dispatch),
    setItemSelected: bindActionCreators(setItemSelected, dispatch),
    deleteItem: bindActionCreators(deleteItem, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
