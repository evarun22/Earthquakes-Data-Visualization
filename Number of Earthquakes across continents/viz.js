import vl from 'vega-lite-api';

const brush = vl.selectInterval().encodings('x');

const selection = vl.selectMulti('Select') // name the selection 'Select'
    .fields('Continent')


const year_range = vl.markBar({width: 2})
    .select(brush)
    .encode(
      vl.x().fieldN('Year').scale({"zero": false}).title('Select year range'),
    	vl.tooltip().fieldN('Year')
    )
    .width(700)
    .height(15);

const plot = vl
	
  .markBar({ size: 15, opacity: 0.8 })
	.select(selection)
  .transform(
    vl
      .groupby('Year', 'Continent')
      .aggregate(vl.count().field('ID').as('NumEarthquakes'))
  )
  .encode(
    vl.x().fieldN('Year').title('Year'),
    vl.y().fieldQ('NumEarthquakes').title('Number of Earthquakes'),
    vl.color().fieldN('Continent').title('Continent'),
    vl.tooltip([
      vl.color().fieldN('Continent').title('Continent'),
      vl.x().fieldN('Year').title('Year'),
      vl.y().fieldQ('NumEarthquakes').title('Earthquakes'),
    ]),
     vl.opacity().if(selection, vl.value(1)).value(0.3),
     vl.opacity().if((brush), vl.value(1)).value(0.3)
  )
	.width(700)
	.height(260);


export const viz = vl.vconcat(plot,year_range).spacing(5);