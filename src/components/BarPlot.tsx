import React from 'react';
import { Bar, HorizontalBar } from 'react-chartjs-2';

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Demo bar plot',
      backgroundColor: '#20b2aa',
      boderColor: 'transparent',
      hoverBackgroundColor: '#5f9ea0',
      data: [5, 10, 40, 30, 50, 100, 10],
    },
  ],
};

const BarPlot: React.FC = () => {
  return (
    <div>
      <Bar data={data} />
      <HorizontalBar data={data} />
    </div>
  );
};

export default BarPlot;
