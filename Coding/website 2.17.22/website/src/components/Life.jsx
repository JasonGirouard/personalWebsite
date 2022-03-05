import React from 'react';
import Navbar from './Navbar';

import Grid from "@mui/material/Grid";

import bikeGif from './utils/life/bikeGif.gif';
import cat from './utils/life/cat.jpg';
import hurting from './utils/life/hurting.JPG';
import travel from './utils/life/travel.jpg';
import sand from './utils/life/sand.jpg';
import sanjuan from './utils/life/sanjuan.jpg';

// const Home = () => {
//   return (
//     <Navbar />,
//     console.log("test"),
//     "In Home");
// };

const Life = () => {
  return (
   <span className="paragraph">
<Grid container space={0} direction="row" justifyContent="flex-start">
        <Grid item xs={1} alignItems="center">
          <Navbar />
        </Grid>
      </Grid>

      <span> Currently living in NYC. Was able to move with my partner without changing jobs. Needed to experience NYC in my 20s. </span>
      <br></br>
      <span> Prior to living in NYC, I spent 3 years in Chicago. I may very well move back one day. I love the friendliness & affordability of the city, the ease & accessibility of the public transportation, and the people.  </span>
      
      <br></br>
      <span> To clear my mind, I love to run. I ran cross-country in high school but never excelled. It wasn't until studying abroad in Edinburgh that I found myself really enjoying 5 to 8 mile runs across the Scottish hillside. After coming back to the US, I ran my first marathon my senior year. The process of training is cathartic and structure building for me. Because a friend suggested it, I ran my first 50 mile ultra marathon in February of 2019 in Buffalo along the Erie Canal. After swearing we'd never do that again, we attempted a 100 mile ultra marathon in Traverse City in June 2021 -- I made it 80 miles before my body began to give up due to improper hydration & nutrition. Six months later, I completed a 100 mile ultra in Brazos Bend, Texas in 24 hours and 10 minutes. </span>

<br></br>
<span>I like to tinker with road/gravel bikes in my spare time. Biking is a great way to visit further away places without relying on a car. I've given one attempt at bike-packing so far by biking the ~450 mile Natchez Trace.</span>

<br></br>
<span>
  Combining running & biking, other friends & I like to do a yearly Ironman 70.3. It's fun competition and a great excuse to vacation together. So far we've done them in Lake Placid, Ohio, Cozumel, and Tempe.
</span>
 
<br></br>
<span>
  The ability to work remotely has so far allowed me to spend a month at a time in a new location, rather than just a week for vacation. Since 2020, I've spent a month in San Juan, El Paso, Vegas, and Austin. I'd love to continue doing this, including potentially spending a month in Alaska during the summer.
</span>

<br></br>
      <span> I grew up in Central Massachusetts in a small town, Brimfield. The city has a population of 3,000 but for three time per year, 100,000+ people visit throughout the week for the world's largest outdoor antique fair. Starting in 7th grade, I began wearing a "Porter for hire" shirt and moving the flea's finds. I wasn't nearly as big (or experienced) as the other porters, but I could find work to pay at least $100 for the day. I used that money to buy myself a Mac capable of better video editing. </span>

      <Grid
      container direction = "row"
      >
        <Grid item xs>
        <img className = "workimg" src={sand} />
        </Grid>
        <Grid item xs>
        <img className = "workimg" src={sanjuan} />
        </Grid>
        <Grid item xs>
        <img className = "workimg" src={bikeGif} />
        </Grid>
        <Grid item xs>
          <img className = "workimg" src={cat} />
        </Grid>
        <Grid item xs>
        <img className = "workimg" src={hurting} />
        </Grid>
        <Grid item xs>
        <img className = "workimg" src={travel} />
        </Grid>
        </Grid>

   </span>



);
};

export default Life;
