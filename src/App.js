import React, { useState, useEffect } from 'react';

import getData from './api';
import LineChart from './components/LineChart';
import styles from './app.module.css';
  
const labels = [
    "2021-12-30 20:00:00", "2021-12-30 19:00:00", "2021-12-30 18:30:00", 
    "2021-12-30 17:30:00", "2021-12-30 17:00:00", "2021-12-30 16:30:00", 
    "2021-12-30 16:00:00"
].map(value => value.substr(10, 14));
  
const mocke_data = [
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
        datasets: [{
                label: 'NUBR3',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45],
            }
        ]
    },
];

const getLabels = (dataAPI) => {
    const labels = Object.keys(dataAPI);
    return labels;
}

const buildDataObject = (data) => {
    const label = "NU"
    const labels = getLabels(data);
    const chartJSdata = data.map(value => value.open)
    const datasets = [{
            label: label,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: chartJSdata
        }
    ]

    return [{
        labels: labels,
        datasets: datasets
    }]
}



const App = () => {
    const [data, setData] = useState(mocke_data)
    const [dataAPI, setDataAPI] = useState([])

    useEffect(() => {
        getData('NU').then(res => setDataAPI(res['Time Series (30min)']))
    }, [])
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