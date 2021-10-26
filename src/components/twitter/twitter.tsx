import React, { useState } from "react";
import axios from "axios";
import { TweetsChart } from "./tweetsChart";
import { TweetsTable } from "./tweetsTable";

type Series = {
  name: string;
  data: number[];
};
type ChartData = {
  categories: string[];
  series: Series;
};
type TweetsData = {
  subject: string[];
  polarity: number[];
  tweet_text: string[];
  id: number[];
  status: string[];
  created_at: string[];
};
type TwitterResult = {
  chart_data: ChartData;
  tweets_data: TweetsData;
};

const Twitter: React.FC = () => {
  const [twitterResult, settwitterResult] = useState<TwitterResult>();

  const loadtwitterResult = () => {
    let token = localStorage.getItem("token");
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/api/twitter/`,
        {
          product_name: "macbook air",
          days: 1,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(function (response: any) {
        console.log(response.data);
        settwitterResult(response.data);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  };
  return (
    <div>
      <button onClick={loadtwitterResult}>Load Twitter Result</button>
      <TweetsChart twitterResult={twitterResult} />
      <TweetsTable twitterResult={twitterResult} />
    </div>
  );
};

export default Twitter;
