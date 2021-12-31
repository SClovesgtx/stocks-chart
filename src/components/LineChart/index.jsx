import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Minhas Ações',
    },
  },
  scales: {
    xAxes: [ {
        display: true,
        type: 'time',
        time: {
          parser: 'YYYY-MM-DD HH:mm:ss',
          // tooltipFormat: 'll HH:mm',
          unit: 'minute', // hour, day, week, month
          unitStepSize: 30,
          // displayFormats: {
          //   day: 'DD MM',
          //   minute: 'HH:mm',
          // }
        }
      }
    ]
  }
};

function LineChart({ data }) {
    return (
        <Line
          options={ options }
          data={ data }
        />
        
    )
}

export default LineChart;
