import React from "react";
import {AppBar, Toolbar, IconButton, makeStyles} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../assets/Original on Transparent just logo.png";

const Navigation = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: "auto",
      edge: "end",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton>
            <img
              src={logo}
              alt="logo"
              style={{
                height: "30px",
                width: "auto",
              }}
            />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="menu"
            className={classes.menuButton}
            style={{
              alignSelf: "center",
              justifySelf: "end",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
