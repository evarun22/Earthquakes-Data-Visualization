import { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl = 'https://gist.githubusercontent.com/evarun22/318274dcc33d20b753516647310c41f3/raw/dd00bf22cc62b46d823021a32ad54fece64365ef/earthquakes_cleaned.csv';

const row = d => {
  d.Latitude = +d.Latitude;
  d.Longitude = +d.Longitude;
  d.Magnitude = +d.Magnitude;
  d.Country = d.Country
  return d;
};

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvUrl, row).then(setData);
  }, []);

  return data;
};
