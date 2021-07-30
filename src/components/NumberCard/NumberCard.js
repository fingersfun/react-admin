import React from 'react';
import { Card, Icon } from 'antd';
import CountUp from 'react-countup';
import PropTypes from 'prop-types';
import './NumberCard.style.scss';

const NumberCard = ({ color, number, type, title }) => {
  return (
    <Card hoverable>
      <div className="raap-number-card">
        <div className="icon">
          <Icon type={type} style={{ color: color }} />
        </div>
        <div className="count">
          <div className="raap-count-title">{title}</div>
          <CountUp end={number} />
        </div>
      </div>
    </Card>
  );
}

NumberCard.propTypes = {
  color: PropTypes.string,
  type: PropTypes.string,
  number: PropTypes.number,
  title: PropTypes.string,
}

export default NumberCard;