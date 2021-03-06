import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import TvIcon from "@mui/icons-material/Tv";
import MovieIcon from "@mui/icons-material/Movie";
import SearchIcon from "@mui/icons-material/Search";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#F02C11!important",
    zIndex: 100,
  },
});

function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (value === 0) {
      navigate("/");
      window.scroll(0,0)
    } else if (value === 1) {
      navigate("/movies");
      window.scroll(0,0)
    } else if (value === 2) {
      navigate("/series");
      window.scroll(0,0)
    } else if (value === 3) {
      navigate("/search");
      window.scroll(0,0)
    }
  }, [value, navigate]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        style={{ color: "white" }}
        label="پربازدید"
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="فیلم"
        icon={<MovieIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="سریال"
        icon={<TvIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="جستجو"
        icon={<SearchIcon />}
      />
    </BottomNavigation>
  );
}



export default SimpleBottomNavigation;
