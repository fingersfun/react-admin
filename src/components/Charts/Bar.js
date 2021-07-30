import React from 'react';
import { Bar } from 'react-chartjs-2';

export default () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Monthly Progress',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
  return (
    <Bar
      data={data}
      width={100}
      height={50}
      options={{
        maintainAspectRatio: false
      }}
    />
  );
}