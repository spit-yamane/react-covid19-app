import React from 'react';
import { Radar } from 'react-chartjs-2';

const data = {
  labels: [
    'React',
    'Vue',
    'Angular',
    'Javascript',
    'Typescript',
    'Redux',
    'REST API',
  ],
  datasets: [
    {
      label: 'Person A',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: '#00b8b8b',
      pointBackgroundColor: '#008b8b',
      pointBorderColor: '#fff',
      data: [100, 10, 10, 100, 50, 30, 10],
    },
    {
      label: 'Person B',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: '#ff1493',
      pointBackgroundColor: '#ff1493',
      pointBorderColor: '#fff',
      data: [50, 30, 100, 100, 50, 20, 20],
    },
  ],
};

const RadarPlot: React.FC = () => {
  return (
    <div>
      <Radar data={data} />
    </div>
  );
};

export default RadarPlot;
