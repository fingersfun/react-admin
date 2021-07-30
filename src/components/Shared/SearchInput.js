import React from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';
const Search = Input.Search;

const SearchInput = ({ placeholder, onChange, value }) => {
  return (
    <Search
      placeholder={placeholder}
      onChange={onChange}
      enterButton
      value={value}
    />
  );
}

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
}

export { SearchInput }