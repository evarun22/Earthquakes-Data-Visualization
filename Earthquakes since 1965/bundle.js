(function (React$1, ReactDOM, d3, topojson) {
  'use strict';

  var React$1__default = 'default' in React$1 ? React$1['default'] : React$1;
  ReactDOM = ReactDOM && Object.prototype.hasOwnProperty.call(ReactDOM, 'default') ? ReactDOM['default'] : ReactDOM;

  const jsonUrl = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json';

  const useWorldAtlas = () => {
    const [data, setData] = React$1.useState(null);

    React$1.useEffect(() => {
      d3.json(jsonUrl).then(topology => {
        const { countries, land } = topology.objects;
        setData({
          land: topojson.feature(topology, land),
          interiors: topojson.mesh(topology, countries, (a, b) => a !== b)
        });
      });
    }, []);
    

    return data;
  };

  const csvUrl = 'https://gist.githubusercontent.com/evarun22/318274dcc33d20b753516647310c41f3/raw/dd00bf22cc62b46d823021a32ad54fece64365ef/earthquakes_cleaned.csv';

  const row = d => {
    d.Latitude = +d.Latitude;
    d.Longitude = +d.Longitude;
    d.Magnitude = +d.Magnitude;
    d.Country = d.Country;
    return d;
  };

  const useData = () => {
    const [data, setData] = React$1.useState(null);

    React$1.useEffect(() => {
      d3.csv(csvUrl, row).then(setData);
    }, []);

    return data;
  };

  const projection = d3.geoNaturalEarth1();
  const path = d3.geoPath(projection);
  const graticule = d3.geoGraticule();

  const Marks = ({
    worldAtlas: { land, interiors },
    cities,
    sizeScale,
    sizeValue
  }) => (
    React.createElement( 'g', { className: "marks" },
      React.createElement( 'path', { className: "sphere", d: path({ type: 'Sphere' }) }),
      React.createElement( 'path', { className: "graticules", d: path(graticule()) }),
      land.features.map(feature => (
        React.createElement( 'path', { className: "land", d: path(feature) })
      )),
      React.createElement( 'path', { className: "interiors", d: path(interiors) }),
      React.createElement( 'g', { class: "points" },
      cities.map(d => {
        const [x, y] = projection([d.Longitude, d.Latitude]);
        return ( React.createElement( 'circle', { cx: x, cy: y, r: sizeScale(sizeValue(d)) },
        React.createElement( 'title', null,
            d.Country, " ", ' Magnitude: ', " ", d.Magnitude
        )
            )
              );
      })
    )
    )
  );

  const width = 960;
  const height = 500;



  const App = () => {
    const worldAtlas = useWorldAtlas();
    const cities = useData();

    if (!worldAtlas || !cities) {
      return React$1__default.createElement( 'pre', null, "Loading..." );
    }

    const sizeValue = d => d.Magnitude;
    const maxRadius = 5;
    const minRadius = 0.1;

    const sizeScale = d3.scaleSqrt()
      .domain([0, d3.max(cities, sizeValue)])
      .range([minRadius, maxRadius]);
    
    return (
      React$1__default.createElement( 'svg', { width: width, height: height },
        React$1__default.createElement( Marks, {
          worldAtlas: worldAtlas, cities: cities, sizeScale: sizeScale, sizeValue: sizeValue })
      )
    );
  };
  const rootElement = document.getElementById('root');
  ReactDOM.render(React$1__default.createElement( App, null ), rootElement);

}(React, ReactDOM, d3, topojson));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbInVzZVdvcmxkQXRsYXMuanMiLCJ1c2VEYXRhLmpzIiwiTWFya3MuanMiLCJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGpzb24sIHpvb20gfSBmcm9tICdkMyc7XG5pbXBvcnQgeyBmZWF0dXJlLCBtZXNoIH0gZnJvbSAndG9wb2pzb24nO1xuXG5jb25zdCBqc29uVXJsID0gJ2h0dHBzOi8vdW5wa2cuY29tL3dvcmxkLWF0bGFzQDIuMC4yL2NvdW50cmllcy01MG0uanNvbic7XG5cbmV4cG9ydCBjb25zdCB1c2VXb3JsZEF0bGFzID0gKCkgPT4ge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGpzb24oanNvblVybCkudGhlbih0b3BvbG9neSA9PiB7XG4gICAgICBjb25zdCB7IGNvdW50cmllcywgbGFuZCB9ID0gdG9wb2xvZ3kub2JqZWN0cztcbiAgICAgIHNldERhdGEoe1xuICAgICAgICBsYW5kOiBmZWF0dXJlKHRvcG9sb2d5LCBsYW5kKSxcbiAgICAgICAgaW50ZXJpb3JzOiBtZXNoKHRvcG9sb2d5LCBjb3VudHJpZXMsIChhLCBiKSA9PiBhICE9PSBiKVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgXG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzdiB9IGZyb20gJ2QzJztcblxuY29uc3QgY3N2VXJsID0gJ2h0dHBzOi8vZ2lzdC5naXRodWJ1c2VyY29udGVudC5jb20vZXZhcnVuMjIvMzE4Mjc0ZGNjMzNkMjBiNzUzNTE2NjQ3MzEwYzQxZjMvcmF3L2RkMDBiZjIyY2M2MmI0NmQ4MjMwMjFhMzJhZDU0ZmVjZTY0MzY1ZWYvZWFydGhxdWFrZXNfY2xlYW5lZC5jc3YnO1xuXG5jb25zdCByb3cgPSBkID0+IHtcbiAgZC5MYXRpdHVkZSA9ICtkLkxhdGl0dWRlO1xuICBkLkxvbmdpdHVkZSA9ICtkLkxvbmdpdHVkZTtcbiAgZC5NYWduaXR1ZGUgPSArZC5NYWduaXR1ZGU7XG4gIGQuQ291bnRyeSA9IGQuQ291bnRyeVxuICByZXR1cm4gZDtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VEYXRhID0gKCkgPT4ge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNzdihjc3ZVcmwsIHJvdykudGhlbihzZXREYXRhKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiBkYXRhO1xufTtcbiIsImltcG9ydCB7IGdlb05hdHVyYWxFYXJ0aDEsIGdlb1BhdGgsIGdlb0dyYXRpY3VsZSB9IGZyb20gJ2QzJztcblxuY29uc3QgcHJvamVjdGlvbiA9IGdlb05hdHVyYWxFYXJ0aDEoKTtcbmNvbnN0IHBhdGggPSBnZW9QYXRoKHByb2plY3Rpb24pO1xuY29uc3QgZ3JhdGljdWxlID0gZ2VvR3JhdGljdWxlKCk7XG5cbmV4cG9ydCBjb25zdCBNYXJrcyA9ICh7XG4gIHdvcmxkQXRsYXM6IHsgbGFuZCwgaW50ZXJpb3JzIH0sXG4gIGNpdGllcyxcbiAgc2l6ZVNjYWxlLFxuICBzaXplVmFsdWVcbn0pID0+IChcbiAgPGcgY2xhc3NOYW1lPVwibWFya3NcIj5cbiAgICA8cGF0aCBjbGFzc05hbWU9XCJzcGhlcmVcIiBkPXtwYXRoKHsgdHlwZTogJ1NwaGVyZScgfSl9IC8+XG4gICAgPHBhdGggY2xhc3NOYW1lPVwiZ3JhdGljdWxlc1wiIGQ9e3BhdGgoZ3JhdGljdWxlKCkpfSAvPlxuICAgIHtsYW5kLmZlYXR1cmVzLm1hcChmZWF0dXJlID0+IChcbiAgICAgIDxwYXRoIGNsYXNzTmFtZT1cImxhbmRcIiBkPXtwYXRoKGZlYXR1cmUpfSAvPlxuICAgICkpfVxuICAgIDxwYXRoIGNsYXNzTmFtZT1cImludGVyaW9yc1wiIGQ9e3BhdGgoaW50ZXJpb3JzKX0gLz5cbiAgICA8ZyBjbGFzcz1cInBvaW50c1wiPlxuICAgIHtjaXRpZXMubWFwKGQgPT4ge1xuICAgICAgY29uc3QgW3gsIHldID0gcHJvamVjdGlvbihbZC5Mb25naXR1ZGUsIGQuTGF0aXR1ZGVdKTtcbiAgICAgIHJldHVybiAoIDxjaXJjbGUgY3g9e3h9IGN5PXt5fSByPXtzaXplU2NhbGUoc2l6ZVZhbHVlKGQpKX0gPlxuICAgICAgPHRpdGxlPlxuICAgICAgICAgIHtkLkNvdW50cnl9IHsnIE1hZ25pdHVkZTogJ30ge2QuTWFnbml0dWRlfVxuICAgICAgPC90aXRsZT5cbiAgICAgICAgICA8L2NpcmNsZT5cbiAgICAgICAgICAgICk7XG4gICAgfSl9XG4gIDwvZz5cbiAgPC9nPlxuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgIFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgc2NhbGVTcXJ0LCBtYXgsIHpvb20gfSBmcm9tICdkMyc7XG5pbXBvcnQgeyB1c2VXb3JsZEF0bGFzIH0gZnJvbSAnLi91c2VXb3JsZEF0bGFzJztcbmltcG9ydCB7IHVzZURhdGEgfSBmcm9tICcuL3VzZURhdGEnO1xuaW1wb3J0IHsgTWFya3MgfSBmcm9tICcuL01hcmtzJztcblxuY29uc3Qgd2lkdGggPSA5NjA7XG5jb25zdCBoZWlnaHQgPSA1MDA7XG5cblxuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IHdvcmxkQXRsYXMgPSB1c2VXb3JsZEF0bGFzKCk7XG4gIGNvbnN0IGNpdGllcyA9IHVzZURhdGEoKTtcblxuICBpZiAoIXdvcmxkQXRsYXMgfHwgIWNpdGllcykge1xuICAgIHJldHVybiA8cHJlPkxvYWRpbmcuLi48L3ByZT47XG4gIH1cblxuICBjb25zdCBzaXplVmFsdWUgPSBkID0+IGQuTWFnbml0dWRlO1xuICBjb25zdCBtYXhSYWRpdXMgPSA1O1xuICBjb25zdCBtaW5SYWRpdXMgPSAwLjE7XG5cbiAgY29uc3Qgc2l6ZVNjYWxlID0gc2NhbGVTcXJ0KClcbiAgICAuZG9tYWluKFswLCBtYXgoY2l0aWVzLCBzaXplVmFsdWUpXSlcbiAgICAucmFuZ2UoW21pblJhZGl1cywgbWF4UmFkaXVzXSk7XG4gIFxuICByZXR1cm4gKFxuICAgIDxzdmcgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0+XG4gICAgICA8TWFya3NcbiAgICAgICAgd29ybGRBdGxhcz17d29ybGRBdGxhc31cbiAgICAgICAgY2l0aWVzPXtjaXRpZXN9XG4gICAgICAgIHNpemVTY2FsZT17c2l6ZVNjYWxlfVxuICAgICAgICBzaXplVmFsdWU9e3NpemVWYWx1ZX1cbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuY29uc3Qgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIHJvb3RFbGVtZW50KTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImpzb24iLCJmZWF0dXJlIiwibWVzaCIsImNzdiIsImdlb05hdHVyYWxFYXJ0aDEiLCJnZW9QYXRoIiwiZ2VvR3JhdGljdWxlIiwiUmVhY3QiLCJzY2FsZVNxcnQiLCJtYXgiXSwibWFwcGluZ3MiOiI7Ozs7OztFQUlBLE1BQU0sT0FBTyxHQUFHLHdEQUF3RCxDQUFDO0FBQ3pFO0VBQ08sTUFBTSxhQUFhLEdBQUcsTUFBTTtFQUNuQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUdBLGdCQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekM7RUFDQSxFQUFFQyxpQkFBUyxD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