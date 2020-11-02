import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { scaleBand,scaleLinear,extent } from 'd3';
import ReactDropdown from 'react-dropdown';
import { useData } from './useData';
import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { Marks } from './Marks';

const menuHeight = 80;

const width = 960;
const height = 500 - menuHeight;
const margin = { top: 20, right: 30, bottom: 65, left: 90 };
const xAxisLabelOffset = 50;
const yAxisLabelOffset = 45;

const attrY = [{ value: 'Depth', Label: 'Depth' }];

const attributes=[
	{ value: 'Magnitude', label: 'All' },
  { value: 'mag_first_group', label: '5-6' },
  { value: 'mag_second_group', label: '6-7' },
  { value: 'mag_third_group', label: '7-8' },
  { value: 'mag_fourth_group', label: '8+' },
  //{ value: 'mag_fifth_group', label: 'All Magnitudes' },
];

const attributesY=[
  { value: 'Depth', label: 'All' },
  { value: 'dep_first_group', label: '0-250' },
  { value: 'dep_second_group', label: '251-500' },
  { value: 'dep_third_group', label: '501-750' },
  //{ value: 'dep_fourth_group', label: 'All Depths' },
];

const getLabel = (value) => {
  for (let i = 0; i < attributes.length; i++) {
    if (attributes[i].value == value) {
      return attributes[i].label;
    }
  }
};

const getLabelY = (value) => {
  for (let i = 0; i < attributesY.length; i++) {
    if (attributesY[i].value == value) {
      return attributesY[i].label;
    }
  }
};

const App = () => {
  const data = useData();
  
  //console.log(data);

  const initialXAttribute = 'Magnitude';
  const [xAttribute, setXAttribute] = useState(initialXAttribute);

  //const xValue = d => d.Year;
  const xValue = d => d[xAttribute];
  const xAxisLabel = 'Magnitude';

  
  const initialYAttribute = 'Depth';
  const [yAttribute, setYAttribute] = useState(initialYAttribute);

  const yValue = d => d[yAttribute];
  const yAxisLabel = 'Depth';
  //const yValue = (d) => d.Depth;
  //const yAxisLabel = 'Depth';

  //console.log(yAttribute);
  //console.log(yAxisLabel);

  if (!data) {
    return <pre>Loading...</pre>;
  }

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;
  
  
  const circleRadius=3;

  const xScale = scaleLinear()
    .domain(extent(data, xValue))
    .range([0, innerWidth]);
    
  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([innerHeight, 0]);

  return (
    <>
      <div className="menus-container">
        <span className="dropdown-label">Magnitude</span>
        <ReactDropdown
          options={attributes}
          value={xAttribute}
          onChange={({ value }) => setXAttribute(value)}
        />
        
        <span className="dropdown-label">Depth</span>
        <ReactDropdown 
          options={attributesY}
          value={yAttribute}
          onChange={({ value }) => setYAttribute(value)}
        />
      </div>

      <svg width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.top})`}>
          <AxisBottom
            xScale={xScale}
            innerHeight={innerHeight}
            tickOffset={5}
          />

          <text
            className="axis-label"
            textAnchor="middle"
            transform={`translate(${-yAxisLabelOffset},${
              innerHeight / 2
            }) rotate(-90)`}
          >
            {yAxisLabel}
          </text>

          <AxisLeft yScale={yScale} innerWidth={innerWidth} tickOffset={5} />

          <text
            className="axis-label"
            x={innerWidth / 2}
            y={innerHeight + xAxisLabelOffset}
            textAnchor="middle"
          >
            {xAxisLabel}
          </text>

          <Marks
            data={data}
            xScale={xScale}
            yScale={yScale}
            xValue={xValue}
            yValue={yValue}
            circleRadius={circleRadius}
          />
        </g>
      </svg>
    </>
  );
};
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
