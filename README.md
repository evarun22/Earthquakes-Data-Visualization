# Earthquakes-Data-Visualization
A project that visualizes the earthquakes dataset that contains data about the significant earthquakes that took place on earth since 1965.

## Data

This dataset includes a record of the date, time, location, depth, magnitude, and source of every earthquake with a reported magnitude 5.5 or higher since 1965. Dataset obtained from [Kaggle](https://www.kaggle.com/usgs/earthquake-database)

## Prototypes

I’ve created a map that shows the occurences of earthquakes by latitude and longitude across the world since 1965. The depth of the color is represents the magnitude of that particular earthquake.

[![image](https://user-images.githubusercontent.com/29768921/94610836-e2395b80-026e-11eb-9694-10472cf9d7f6.png)](https://vizhub.com/evarun22/ab189a6d9b994a63bd2dff2983a7d9af)


## Questions & Tasks

The following tasks and questions will drive the visualization and interaction decisions for this project:

 * Countries with high number of earthquakes 
 * Countries with most dangerous earthquakes (magnitude more than 8)
 * Continents with the number of earthquakes every year
 * Is there any Correlation between Horizontal distance, Magnitude and Depth?

## Sketches

![image](https://user-images.githubusercontent.com/29768921/94611305-8c18e800-026f-11eb-91a6-f80319772f6e.png)

* The 1st sketch shows the occurrences of earthquakes all over the world with the size of the red circle representing magnitude
  * I included a tool tip that shows the name of the country when hovered upon
  * It will also include dropdown menus for FROM and TO by which the period can be selected (see Future Work section)
  * The size of the marker will represent magnitude
  * The darkness of color will represent the density
* The 2nd sketch shows the number of earthquakes by continent during different periods
  * It will have a filter to select only particular continent(s) (see Future Work section)
  * It has a filter to select time period
* The 3rd sketch shows relationship between the variables Depth, Horizontal Distance and Magnitude
  * Color will represent magnitude
  * Filters can be added to narrow the dataset down and have a closer look
  * Helps in understanding if there is a correlation among any of the three features

## Schedule of Deliverables

* 7 October 2020 - Process dataset and include country and continent names by Latitude and Longitude
  * Used Python and updated the dataset to have two different columns - Country and Continent
  * Updated the processed dataset to the GitHub gist.
* 14 October 2020 - Completed the visualization of the first sketch
  * 10 October 2020 - Completed the plotting of points on the map
  * 12 October 2020 - Included the tooltip
  * 14 October 2020 - Include the dropdown menus (see Future Work section)
* 21 October 2020 - Completed the visualization of the second sketch
  * 17 October 2020 - Completed plotting the graph
  * 19 October 2020 - Included features for Continent and Time Period
  * 21 October 2020 - Included range filter
* 28 October 2020 - Completed the visualization of the third sketch
  * 24 October 2020 - Completed plotting the graph
  * 28 November 2020 - Included filters and range for axes
* 4 November 2020 - Completed Project and improvisations along the way 
  * 2 and 3 November 2020 - Improved the plots and make the visualizations more appeaing and interactive

## Data Cleaning
Data has been cleaned using Python and the [code](https://github.com/evarun22/Earthquakes-Data-Visualization/blob/master/data_cleaning.ipynb) and the new [cleaned dataset](https://github.com/evarun22/Earthquakes-Data-Visualization/blob/master/earthquakes_cleaned.csv) have been uploaded to this repository. 
After cleaning, the dataset now has the following features:
* Country
* Continent
* Day
* Month
* Year

## Visualizations
* Plot 1:

[![Sketch 1](https://user-images.githubusercontent.com/29768921/97827716-13081880-1c93-11eb-9a24-f8d412b6ea15.PNG)](https://vizhub.com/evarun22/ab189a6d9b994a63bd2dff2983a7d9af?edit=files&file=useData.js&mode=full)

A world map showing earthquakes with magnitude and dates since 1965 (a realization of my first sketch). Upon hovering onto any point, the tooltip displays the name of the Country and the Magnitude of the earthquake.

* Plot 2:

[![Sketch 2](https://user-images.githubusercontent.com/29768921/97827736-22876180-1c93-11eb-9315-12bda71c1e1b.PNG)](https://vizhub.com/evarun22/24f9c60769ab42b1a0f8e62e75aaff9d?edit=files&file=README.md&mode=full)

A bar graph showing number of earthquakes across all continents since 1965 to 1988 (a realization of my second sketch). The X axis represents the Year, Y axis represents number of earthquakes and color represents Continent. The blank entry space on the list of Continents refers to earthquakes that have occurred in International Waters - boundaries of which do not belong to any particular country and hence are not indicated using any continent.
The range can be used to select the years which are to be visualized. Upon hovering onto any stacked bar on the plot, information regarding Continent Name, Number of Earthquakes and the year can be seen.

* Plot 3 (improvised):

[![Sketch 3](https://user-images.githubusercontent.com/29768921/97827758-303ce700-1c93-11eb-87ff-38919d1f70fa.PNG)](https://vizhub.com/evarun22/91091303ebcc4c5f9022c0605eedd0bf?edit=files&file=index.html&mode=full)

A scatterplot showing Depth vs Magnitude for earthquakes across all continents since 1965 (a realization of my third sketch). Initially, I thought of including the Horizontal Distance on X-axis and indicate Magnitude by Luminance. But this did not come out well as 99% of all the data points have the same value for Horizontal Distance. Hence, I changed path and cam up with this plot to better understand the relationship between these two features.

The X axis represents Magnitude and the Y axis represents Depth. The Dropdown menus on the top allows to select any particular range of both the attributes - Depth and Magnitude. This might be helpful to study earthquakes in a particular region and depth-range/magnitude-range. Upon hovering onto any data point on the plot, information regarding Country Name, Date of when the earthquake has occurred, its Magnitude and its Depth can be seen. 

## Future Work
* To include a zoom option on the map (Plot 1)
* To include a filter to visualize earthquakes by Year (Plot 1)
* To add a drop down to choose Continent(s) (Plot 2)
* To come up with more interesting visualizations
