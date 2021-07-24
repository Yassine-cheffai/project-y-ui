import { useState } from 'react';
import axios from 'axios';

type Series = {
  name: string,
  data: number[]
}

type ChartData = {
  categories: string[],
  series: Series,
}
export  const TweetsChart: React.FC = () => {
   const [chartData, setChartData] = useState<ChartData>();
  const loadChartData = () => {
   axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/twitter/',
      data: {
        product_name: 'macbook air',
        days: 1
      },
      timeout: 300000
    })
      .then(function (response) {
        console.log(response.data);
        setChartData(response.data.chart_data);
      })
      .catch(function (error) { console.log(error) });
  }

   return (
     <div>
       <h3>Twitter Chart Component</h3>
       <button onClick={ loadChartData }>Load Twitter Chart data</button>
       { chartData?.categories }
    </div>
   )
  }
