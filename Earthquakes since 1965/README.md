A world map showing earthquakes with magnitude and dates since 1965 (a realization of my first sketch) constructed using the [vega-lite-api](https://github.com/vega/vega-lite-api/).
The [Significant Earthquakes from 1965 dataset](https://gist.github.com/evarun22/318274dcc33d20b753516647310c41f3) has been used for this visualization.
This dataset contains information of earthquakes all over the world that took place from 1965.
Dataset obtained from [Kaggle](https://www.kaggle.com/usgs/earthquake-database).
Country boundaries from [World Atlas TopoJSON](https://github.com/topojson/world-atlas), polished for visual style, including graticules.

Upon hovering onto any point, the tooltip displays the name of the Country and the Magnitude of the earthquake.

FUTURE WORK:
- Include zoom option on the Map
- Include a filter to visualize earthquakes by Year