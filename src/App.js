import React from 'react';
import LineChart from './components/LineChart';

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
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  const data = [{
        labels: labels,
        datasets: [
            {
                label: 'AZUL4',
                backgroundColor: 'rgb(53, 162, 235)',
                borderColor: 'rgba(53, 162, 235, 0.5)',
                data: [10, 8, 5, 9, 11, 14, 7],
            }
        ]
    },
    {
        labels: labels,
        datasets: [{
                label: 'NUBR33',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45],
            }
        ]
    },
];

const App = () => {
    return (
        <div>
            { data.map( data => <LineChart options={options} data={data}/> ) }
        </div>
    )
}

export default App;