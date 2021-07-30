import React from 'react';
import { Polar } from 'react-chartjs-2';
export default () => {

  const data = {
    datasets: [{
      data: [
        11,
        16,
        7,
        13,
        // 14
      ],
      backgroundColor: [
        '#FF6384',
        '#4BC0C0',
        '#FFCE56',
        '#36A2EB',
        // '#36A2EB'
      ],
      label: 'My dataset' // for legend
    }],
    labels: [
      'Red',
      'Green',
      'Yellow',
      'Blue',
      // 'Blue'
    ]
  };
  return (
    <Polar data={data} height={250} />
  );
}