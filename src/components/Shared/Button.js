import React from 'react';
import { Button as AntdButton, Icon } from 'antd';
import PropTypes from 'prop-types';

const Button = ({ label, hasIcon = false, type, iconType = null, onClick }) => {
  return (
    <AntdButton type={type} onClick={onClick}>
      {
        hasIcon ? <Icon type={iconType} /> : null
      }
      {label}
    </AntdButton>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  hasIcon: PropTypes.bool,
  type: PropTypes.string,
  iconType: PropTypes.string,
  onClick: PropTypes.func
}

export { Button };