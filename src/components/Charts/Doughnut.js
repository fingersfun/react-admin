import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut as DoughnutChart } from 'react-chartjs-2';
const Doughnut = ({ height }) => {
  const data = {
    labels: [
      'Pending',
      'Active',
      'Offline'
    ],
    datasets: [{
      data: [100, 120, 50],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ]
    }]
  };
  return (
    <DoughnutChart data={data} height={height} />
  );
}
Doughnut.propTypes = {
  height: PropTypes.number
}

Doughnut.defaulProps = {
  height: 250
}
export { Doughnut };