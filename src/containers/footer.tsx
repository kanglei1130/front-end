import React from "react";
import Typography from "@material-ui/core/Typography/index";
import {kCompanyName} from "../constants";

export default class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          background: "#50b8e7",
          paddingTop: "8vw",
          paddingBottom: "2vw",
          marginTop: "2vw"
        }}
      >
        <Typography variant="h6" align="center" gutterBottom>
          &copy; 2020 All Rights Reserved - {kCompanyName}
        </Typography>
      </footer>
    );
  }
}
