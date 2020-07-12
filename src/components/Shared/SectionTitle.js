import React from "react";
import PropTypes from "prop-types";

const SectionTitle = ({ title }) => {
  return <h3 className="mb-3">{title}</h3>;
};

export default SectionTitle;

SectionTitle.propTypes = {
  title: PropTypes.string,
};
