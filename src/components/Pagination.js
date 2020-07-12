import React, { useState } from "react";
import PropTypes from "prop-types";
import { Pagination } from "react-bootstrap";

const CustomPagination = ({
  total,
  limit,
  handlePaginationClick,
  activePage,
}) => {
  const [active, setActive] = useState(activePage);
  let items = [];
  const totalItems = Math.ceil(total / limit);

  const handleClick = (number) => {
    setActive(number);
    handlePaginationClick(number);
  };

  for (let number = 1; number <= totalItems; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => handleClick(number)}
      >
        {number}
      </Pagination.Item>
    );
  }
  return <Pagination>{items.length > 1 ? items : null}</Pagination>;
};

export default CustomPagination;

CustomPagination.propTypes = {
  total: PropTypes.number,
  limit: PropTypes.number,
  handlePaginationClick: PropTypes.func,
  activePage: PropTypes.number,
};
