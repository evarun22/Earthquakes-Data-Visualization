# Earthquakes-Data-Visualization
A project that visualizes the earthquakes dataset that contains data about the significant earthquakes that took place on earth since 1965.

## Data

This dataset includes a record of the date, time, location, depth, magnitude, and source of every earthquake with a reported magnitude 5.5 or higher since 1965. Dataset obtained from [Kaggle](https://www.kaggle.com/usgs/earthquake-database)

## Prototypes

I’ve created a map that shows the occurences of earthquakes by latitude and longitude across the world since 1965. The depth of the color is represents the magnitude of that particular earthquake.

[![image](https://user-images.githubusercontent.com/29768921/94610836-e2395b80-026e-11eb-9694-10472cf9d7f6.png)](https://vizhub.com/evarun22/ab189a6d9b994a63bd2dff2983a7d9af)


## Questions & Tasks

The following tasks and questions will drive the visualization and interaction decisions for this project:

 * Countries with highest number of earthquakes by number
 * Countries with most dangerous earthquakes (magnitude more than 8)
 * Continents with the number of earthquakes in each period along with their magnitudes
 * Is there any Correlation between Horizontal distance, Magnitude and Depth?

## Sketches

![image](https://user-images.githubusercontent.com/29768921/94611305-8c18e800-026f-11eb-91a6-f80319772f6e.png)

* The 1st sketch shows the occurrences of earthquakes all over the world with the size of the red circle representing magnitude
  * I would like to include a tool tip that shows the name of the country when hovered upon
  * It will also include dropdown menus for FROM and TO by which the period can be selected
  * The size of the marker will represent magnitude
  * The darkness of color will represent the density
* The 2nd sketch shows the number of earthquakes by continent during different periods
  * It will have a filter to select only particular continent(s)
  * It will have a filter to select time period
  * It will have a feature to select a range for the number of earthquakes 
* The 3rd sketch shows relationship between the variables Depth, Horizontal Distance and Magnitude
  * Color will represent magnitude
  * Filters will be added to narrow the dataset down and have a closer look
  * Will help in understanding if there is a correlation among any of the three features
  
## Visualizations
Sketch 1:

[![image](https://github.com/evarun22/Earthquakes-Data-Visualization/issues/3#issue-734153913)]
(https://vizhub.com/evarun22/ab189a6d9b994a63bd2dff2983a7d9af?edit=files&file=useData.js&mode=full)

Sketch 2:

[![image](https://github.com/evarun22/Earthquakes-Data-Visualization/issues/4#issue-734154061)]
(https://vizhub.com/evarun22/24f9c60769ab42b1a0f8e62e75aaff9d?edit=files&file=README.md&mode=full)

Sketch 3 (improvised):

[![image](https://github.com/evarun22/Earthquakes-Data-Visualization/issues/5#issue-734154178)]
(https://vizhub.com/evarun22/91091303ebcc4c5f9022c0605eedd0bf?edit=files&file=index.html&mode=full)

## Schedule of Deliverables

* 7 October 2020 - Process dataset and include country and continent names by Latitude and Longitude
  * Use Python and update the dataset to have two different columns - Country and Continent
  * Update the processed dataset to the GitHub gist.
* 14 October 2020 - Complete the visualization of the first sketch
  * 10 October 2020 - Complete the plotting of points on the map
  * 12 October 2020 - Include the tooltip
  * 14 October 2020 - Include the dropdown menus
* 21 October 2020 - Complete the visualization of the second sketch
  * 24 October 2020 - Complete plotting the graph
  * 26 October 2020 - Include features for Continent and Time Period
  * 28 October 2020 - Include range filter for number of earthquakes
* 28 October 2020 - Complete the visualization of the third sketch
  * 30 October 2020 - Complete plotting the graph
  * 1 November 2020 - Include color hue and range for axes
* 4 November 2020 - Complete Project and improvisations along the way (if found any)
  * 2 and 3 November 2020 - Look to improve the plots and make the visualizations more appeaing and interactive
