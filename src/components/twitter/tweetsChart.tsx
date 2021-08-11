import React from "react";
//import TwitterResult from './twitter';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

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
type Props = {
  twitterResult: TwitterResult | undefined;
};

export const TweetsChart: React.FC<Props> = (props) => {
  const { twitterResult } = props;
  let options = {
    title: {
      text: "Twitter Text",
    },
    //chart: {
    //type: "column"
    //},
    xAxis: {
      categories: twitterResult?.chart_data.categories,
    },
    yAxis: {
      title: "feedbacks",
    },
    series: twitterResult?.chart_data.series,
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
