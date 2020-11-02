import React from 'react';
import ReactDOM from 'react-dom';
import { scaleSqrt, max, zoom } from 'd3';
import { useWorldAtlas } from './useWorldAtlas';
import { useData } from './useData';
import { Marks } from './Marks';

const width = 960;
const height = 500;



const App = () => {
  const worldAtlas = useWorldAtlas();
  const cities = useData();

  if (!worldAtlas || !cities) {
    return <pre>Loading...</pre>;
  }

  const sizeValue = d => d.Magnitude;
  const maxRadius = 5;
  const minRadius = 0.1;

  const sizeScale = scaleSqrt()
    .domain([0, max(cities, sizeValue)])
    .range([minRadius, maxRadius]);
  
  return (
    <svg width={width} height={height}>
      <Marks
        worldAtlas={worldAtlas}
        cities={cities}
        sizeScale={sizeScale}
        sizeValue={sizeValue}
      />
    </svg>
  );
};
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
