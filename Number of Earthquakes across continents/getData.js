import { csv } from 'd3';

const csvUrl = 'https://gist.githubusercontent.com/evarun22/318274dcc33d20b753516647310c41f3/raw/dd00bf22cc62b46d823021a32ad54fece64365ef/earthquakes_cleaned.csv';

export const getData = async () => {
  const data = await csv(csvUrl);
  
  // Have a look at the attributes available in the console!
  console.log(data[0]);

  return data;
};