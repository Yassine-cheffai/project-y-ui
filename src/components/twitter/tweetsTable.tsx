import React from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';

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
  id: number[],
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

  const columns: GridColDef[] = [
    { field: 'subject', headerName: 'Subject', width: 90 },
    {
      field: 'polarity',
      headerName: 'Polarity',
      width: 150,
      editable: true,
    },
    {
      field: 'tweet_text',
      headerName: 'Tweet Text',
      width: 150,
    },
    {
      field: 'id',
      headerName: 'Tweet ID',
      width: 110,
    },
    {
      field: 'status',
      headerName: 'Status',
      type: 'number',
      width: 110,
    },
    {
      field: 'created_at',
      headerName: 'Created At',
      type: 'number',
      width: 110,
    },
  ];

  let tweetsRows = [];
  const rowsNumber = twitterResult?.tweets_data.subject.length || 0
  for (let i = 0; i < rowsNumber; i++) {
    tweetsRows.push(
      {
        subject: twitterResult?.tweets_data.subject[i],
        polarity: twitterResult?.tweets_data.polarity[i],
        tweet_text: twitterResult?.tweets_data.tweet_text[i],
        id: twitterResult?.tweets_data.id[i],
        status: twitterResult?.tweets_data.status[i],
        created_at: twitterResult?.tweets_data.created_at[i],
      }

    )
  }
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={tweetsRows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}
