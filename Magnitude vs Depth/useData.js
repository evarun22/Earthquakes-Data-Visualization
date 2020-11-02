import { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl =
  'https://raw.githubusercontent.com/evarun22/Earthquakes-Data-Visualization/master/earthquakes_cleaned.csv';

//const start_year = 1957;
//const end_year = 2020;
//const num_years = end_year - start_year;

//var sum_by_year = new Array(num_years).fill(0);

//console.log(num_years);
//console.log(sum_by_year);

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = (d) => {
      /*test
      if(d.Year==='1957')
      {
      	//console.log('true');
      }
      */
      /*
      var count=0;
      for(var i=0;i<num_years;i++)
      {
        //console.log(i);
      	if(d.Year==(i+1957))
        {
          count+=1;
        	console.log(count);
          
        }
      }
      */

      d.Magnitude = +d.Magnitude;
      d.Depth = +d.Depth;
			d.Country = d.Country
      d.Date = d.Date
      //console.log(d.Year);
      //console.log(d['Year']);

      /*
      d.test =+d.Year;
      console.log(d.test);
      */
      
 			
      if(d.Magnitude>='5' && d.Magnitude<='6')
      {
      	d.mag_first_group=+d.Magnitude;
      }
      
      if(d.Magnitude>='6.01' && d.Magnitude<='7')
      {
      	d.mag_second_group=+d.Magnitude;
      }
      
      if(d.Magnitude>='7.01' && d.Magnitude<='8')
      {
      	d.mag_third_group=+d.Magnitude;
      }
      
      if(d.Magnitude>='8.01')
      {
      	d.mag_fourth_group=+d.Magnitude;
      }
      
      if(d.Magnitude>='5' && d.Magnitude<='10')
      {
      	d.mag_fifth_group=+d.Magnitude;
      }
      
      
      if(d.Depth>='0' && d.Depth<='250')
      {
      	d.dep_first_group=+d.Depth;
      }
      
      if(d.Depth>='251' && d.Depth<='500')
      {
      	d.dep_second_group=+d.Depth;
      }
      
      if(d.Depth>='501' && d.Depth<='750')
      {
      	d.dep_third_group=+d.Depth;
      }
      
      if(d.Depth>='0')
      {
      	d.dep_fourth_group=+d.Depth;
      }
      //console.log(d.Year);
      //console.log(d.first_group);
      //console.log(d.second_group);
      //console.log(d.third_group);
      //console.log(d.fourth_group);
      //console.log(d.fifth_group);
      
      return d;
    };
    csv(csvUrl, row).then(setData);
  }, []);
  

  //console.log(data);
  return data;
};
