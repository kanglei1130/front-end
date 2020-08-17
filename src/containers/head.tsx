import React from "react";
import {
  Button,
  IconButton,
  Typography,
  Toolbar,
  AppBar
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import {kCompanyName, kPlaceholder} from "../helpers/constants";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function Head() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {kCompanyName}
          </Typography>
          <Button color="inherit" style={{ fontSize: "16px" }}>
            {kPlaceholder}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
