import React, { useState, ChangeEvent } from "react";
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

interface FilterPostsProps {
  filterPosts: (filterText: string) => void;
  currentFilter: string;
}

const FilterPosts = ({ filterPosts, currentFilter }: FilterPostsProps) => {
  const classes = useStyles();
  const [value, setValue] = useState(currentFilter);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
