const API_KEY = process.env.REACT_APP_API_KEY;

const getData = async (symbol) => {
    const query = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=30min&apikey=${API_KEY}`
    const res = await fetch(query)
    const data = await res.json()
    return data
}

export default getData;