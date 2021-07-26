import React from 'react';

type Series = {
  name: string,
  data: number[]
}
type ChartData = {
  categories: string[],
  series: Series,
}
type TweetsData = {
  subject: string[],
  polarity: number[],
  tweet_text: string[],
  tweet_id: number[],
  status: string[],
  created_at: string[],
}
type TwitterResult = {
  chart_data: ChartData,
  tweets_data: TweetsData,
}
type Props = {
  twitterResult: TwitterResult | undefined;
}

export const TweetsTable: React.FC<Props> = (props) => {
  const { twitterResult } = props;
  let tweetsRows = [];
  const rowsNumber = twitterResult?.tweets_data.subject.length || 0
  for (let i = 0; i < rowsNumber; i++) {
    tweetsRows.push(
      {
        subject: twitterResult?.tweets_data.subject[i],
        polarity: twitterResult?.tweets_data.polarity[i],
        tweet_text: twitterResult?.tweets_data.tweet_text[i],
        tweet_id: twitterResult?.tweets_data.tweet_id[i],
        status: twitterResult?.tweets_data.status[i],
        created_at: twitterResult?.tweets_data.created_at[i],
      }

    )
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Subject</th>
          <th>Polarity</th>
          <th>Tweet Text</th>
          <th>Tweet ID</th>
          <th>Status</th>
          <th>Created at</th>
        </tr>
      </thead>
      <tbody>
        { tweetsRows.map((row) => (
          <tr key={ row.tweet_id }>
            <td>{ row.subject }</td>
            <td>{ row.polarity }</td>
            <td>{ row.tweet_text }</td>
            <td>{ row.tweet_id }</td>
            <td>{ row.status }</td>
            <td>{ row.created_at }</td>
          </tr>
        )
        )
        }
      </tbody>
    </table>
  )
}
