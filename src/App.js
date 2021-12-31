import React from 'react';
import LineChart from './components/LineChart';
import styles from './app.module.css';
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  const data = [
      {
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
                label: 'NUBR3',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45],
            }
        ]
    },
    {
        labels: labels,
        datasets: [
            {
                label: 'AZUL',
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
        <div className={styles.wrapper}>
            { data.map( (data) => (
            <div key={data.datasets[0].label} className={styles['line-chart']}> 
                <LineChart data={data}/> 
            </div> )) }
        </div>
    )
}

export default App;