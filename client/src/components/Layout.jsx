import React, { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Paper } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  toolbar: {
    flexWrap: "wrap"
  },
  link: {
    margin: theme.spacing(1, 1.5),
    color: "#fff"
  }
}));

const Layout = props => {
  const classes = useStyles();
  return (
    <Paper>
      <AppBar color="primary" position="static" style={{ height: 64 }}>
        <Toolbar className={classes.toolbar} style={{ height: 64 }}>
          <Typography>
            <Link className={classes.link} component={RouterLink} to="/">
              Home
            </Link>
            <Link className={classes.link} component={RouterLink} to="/meals">
              Meals
            </Link>
            <Link
              className={classes.link}
              component={RouterLink}
              to="/meals/create"
            >
              Create meal
            </Link>
            <Link
              className={classes.link}
              component={RouterLink}
              to="/ingredients"
            >
              Ingredients
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      {props.children}
    </Paper>
  );
};

export default Layout;
