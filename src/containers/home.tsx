import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  loadList,
} from "../action-reducers/actions";
import {
  Paper,
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
import {Repo} from "../action-reducers/reducers";

interface Props {
  repos: Repo[],
  loadList: () => {}
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
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.repos.map(row => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
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
