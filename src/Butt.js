import { Button } from "@material-ui/core";
import React from "react";
import "./Butt.css";

function Butt() {
  return (
    <div className="butt">
      <div className="left_button">
        <Button variant="contained">predict</Button>
        <Button variant="outlined">analytics view</Button>
        <Button variant="outlined">Advance search</Button>
      </div>
      <div className="butt_search">
        <input type="search" placeholder="Search Customer Id" />
      </div>
      <div className="left_button">
        <Button variant="outlined">add</Button>
        <Button>edit</Button>
        <Button variant="outlined">delete</Button>
      </div>
    </div>
  );
}

export default Butt;
