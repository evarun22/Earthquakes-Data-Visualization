A scatterplot showing Depth vs Magnitude for earthquakes across all continents since 1965 (a realization of my third sketch). 
The [Significant Earthquakes from 1965 dataset](https://gist.github.com/evarun22/318274dcc33d20b753516647310c41f3) has been used for this visualization.
This dataset contains information of earthquakes all over the world that took place from 1965.
Dataset obtained from [Kaggle](https://www.kaggle.com/usgs/earthquake-database).

The Dropdown menus on the top allows to select any particular range of both the attributes - Depth and Magnitude. This might be helpful to study earthquakes in a particular region and depth-range/magnitude-range. Upon hovering onto any data point on the plot, information regarding Country Name, Date of when the earthquake has occurred, its Magnitude and its Depth can be seen. 
 
Initially, I thought of including the Horizontal Distance on X-axis and indicate Magnitude by Luminance. But this did not come out well as 99% of all the data points have the same value for Horizontal Distance. Hence, I changed path and cam up with this plot to better understand the relationship between these two features.