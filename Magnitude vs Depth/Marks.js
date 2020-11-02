export const Marks = ({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
  circleRadius
}) =>
  data.map(d => (
    <circle
      className="mark"
      cx={xScale(xValue(d))}
      cy={yScale(yValue(d))}
      r={circleRadius}
    >
      <title>{'Country: ',d.Country,', Date: ',d.Date,', Magnitude: ',xValue(d),', Depth: ',yValue(d)}</title>
    </circle>
  ));
