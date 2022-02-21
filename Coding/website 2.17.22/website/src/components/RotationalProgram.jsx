import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Grid from "@mui/material/Grid";
import warehouse1 from './utils/rotational/warehouse1.JPG';
import warehouse2 from './utils/rotational/warehouse2.JPG';
import warehouse3 from './utils/rotational/warehouse3.JPG';
import warehouse4 from './utils/rotational/warehouse4.JPG';

import aframe1 from './utils/rotational/aframe1.JPG';
import aframe2 from './utils/rotational/aframe2.JPG';
import aframe3 from './utils/rotational/aframe3.JPG';
const RotationalProgram = () => {
  return (

    
    <span>
      <Grid container space={0} direction="row" justifyContent="flex-start">
        <Grid item xs={1} alignItems="center">
          <Navbar />
        </Grid>
      </Grid>
      <span className="paragraph">
        <span>
          For my first full time job after college I wanted to prioritize
          <ol>
            <li>Learning</li>
              <li>Hands-on Experience</li>
              <li>Variety</li>
              <li>A Supportive Environment</li>
          </ol>

          As a result, I took with a job in a Rotational Leadership Development program with a large wholesaler (CS Wholesale Grocers) which paid less money than other offers I received, but gave me a great environment to be challenged and learn.

        </span>

        <br></br>
        <span>
          I rotated between Corporate Development, Warehouse Automation, and TMS (Transportation Management System) integration. I spent the bulk of my time in the second rotation, implementing a <a href="https://www.youtube.com/watch?v=anuLf5AWR8I">KNAPP A-Frame</a>, an automated picking solution for small items of consistent shape. In hindsight, it was incredible how we went from fully manual picking to the A-Frame at near-max capacity in just 7 months.
        </span>
        <br></br>
        <span>
          It was here that I first learned SQL, learned to model scenarios in Excel, and build tools to solve operational challenges. From here, I moved to Uber because... 
          <ul>
            <li>My friends moved away from New Hampshire</li>
              <li>I wanted to live in a city</li>
              <li>I thought that our inbound/outbound transportation management process at CS was inefficient, and that Uber Freight seemed to be solving this problem well</li>
          </ul>
        </span>
        <br></br>
        <span>
          Find fun pictures of my time at CS below.
        </span>
      
      <Grid
      container direction = "row"
      >
        <Grid item xs>
          <img className = "workimg" src={warehouse1} />
        </Grid>
        <Grid item xs>
        <img className = "workimg" src={warehouse2} />
        </Grid>
        <Grid item xs>
        <img className = "workimg" src={warehouse3} />
        </Grid>
        <Grid item xs>
        <img className = "workimg" src={warehouse4} />
        </Grid>

        <Grid>

       
        <Grid
        container direction = "row"
        >
          <Grid item xs>
          <img className = "workimg2" src={aframe1} />
          </Grid>
          <Grid item xs>
          <img className = "workimg2" src={aframe2} />
          </Grid>
          <Grid item xs>
          <img className = "workimg2" src={aframe3} />
          </Grid>

        </Grid>
        The evolution of the AFrame assembled in the warehouse.
        </Grid>
      </Grid>
      </span>
    </span>
  );
};

export default RotationalProgram;
