import { geoNaturalEarth1, geoPath, geoGraticule } from 'd3';

const projection = geoNaturalEarth1();
const path = geoPath(projection);
const graticule = geoGraticule();

export const Marks = ({
  worldAtlas: { land, interiors },
  cities,
  sizeScale,
  sizeValue
}) => (
  <g className="marks">
    <path className="sphere" d={path({ type: 'Sphere' })} />
    <path className="graticules" d={path(graticule())} />
    {land.features.map(feature => (
      <path className="land" d={path(feature)} />
    ))}
    <path className="interiors" d={path(interiors)} />
    <g class="points">
    {cities.map(d => {
      const [x, y] = projection([d.Longitude, d.Latitude]);
      return ( <circle cx={x} cy={y} r={sizeScale(sizeValue(d))} >
      <title>
          {d.Country} {' Magnitude: '} {d.Magnitude}
      </title>
          </circle>
            );
    })}
  </g>
  </g>
);
                       
                       
                       
                       
                       
