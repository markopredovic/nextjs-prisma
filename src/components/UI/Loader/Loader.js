import React from "react";
import { Spinner } from "react-bootstrap";

import classes from "./loader.module.css";

const Loader = () => {
  return (
    <div className={classes.loader}>
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loader;
