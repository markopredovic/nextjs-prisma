import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  filter: {
    flexDirection: "row",
  },
});

const FilterPosts = ({ filterPosts, currentFilter }) => {
  const classes = useStyles();
  const [value, setValue] = useState(currentFilter);

  const handleChange = (e) => {
    setValue(e.target.value);
    filterPosts(e.target.value);
  };

  return (
    <Box mb={4}>
      <FormControl component="fieldset" variant="filled">
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
          className={classes.filter}
        >
          <FormControlLabel value="all" control={<Radio />} label="All" />
          <FormControlLabel
            value="featured"
            control={<Radio />}
            label="Featured"
          />
          <FormControlLabel
            value="archived"
            control={<Radio />}
            label="Archived"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default FilterPosts;

FilterPosts.propTypes = {
  filterPosts: PropTypes.func,
  currentFilter: PropTypes.string,
};
