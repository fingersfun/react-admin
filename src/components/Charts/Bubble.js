import React from 'react';
import { Bubble } from 'react-chartjs-2';

export default () => {
  const data = { // This is the dummy data you can pass this data as a prop from a parent component.
    labels: ['January'],
    datasets: [
      {
        label: 'My First dataset',
        fill: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [
          { x: 10, y: 20, r: 5 }, { x: 1, y: 2, r: 10 }, { x: 3, y: 5, r: 5 }, { x: 19, y: 4, r: 5 }, { x: 4, y: 4, r: 5 },
          { x: 6, y: 6, r: 5 }, { x: 6, y: 1, r: 10 }, { x: 8, y: 0, r: 5 }, { x: 8, y: 5, r: 20 }, { x: 3, y: 2, r: 5 },
          { x: 12, y: 12, r: 5 }, { x: 14, y: 2, r: 10 }, { x: 18, y: 18, r: 15 }, { x: 19, y: 2, r: 5 }, { x: 19, y: 9, r: 5 },
          { x: 2, y: 13, r: 5 }, { x: 2, y: 10, r: 10 }, { x: 18, y: 14, r: 10 }, { x: 5, y: 10, r: 10 }, { x: 12, y: 12, r: 5 },
          { x: 17, y: 7, r: 10 }, { x: 1, y: 4, r: 15 }, { x: 16, y: 2, r: 5 }, { x: 3, y: 11, r: 5 },
        ]
      }
    ]
  };

  return (
    <Bubble data={data} height={140} />
  );
}