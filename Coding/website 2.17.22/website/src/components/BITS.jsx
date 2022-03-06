import React from "react";
import Navbar from "./Navbar";
import Grid from "@mui/material/Grid";
import deliver from "./utils/BITS/deliver.JPG";
import packaging from "./utils/BITS/packaging.jpeg";
import packaging2 from "./utils/BITS/packaging2.jpeg";
import production from "./utils/BITS/production.JPG";
import Rig from "./utils/BITS/Rig.JPG";

const BITS = () => {
  window.scrollTo(0, 0);
  return (
    <span>
      <Grid container space={0} direction="row" justifyContent="flex-start">
        <Grid item xs={1} alignItems="center">
          <Navbar />
        </Grid>
      </Grid>
      <span class="paragraph">
        <span>
          <br></br>
          While working at the wholesale grocer, I tried launching a whole-food
          pea-protein based snack called B!TS. I did this because...
          <ul>
            <li>
              I could see the growth of snacking, plant protein, and natural
              whole foods growing as a sector.
            </li>
            <li>
              My experience at CS gave me confidence that I could understand
              merchandising's role in creating a CPG brand.
            </li>
            <li>
              In my own marathon training, I was always hungry -- and needed
              clean, high-energy food.
            </li>
            <li>I wanted to build something, if only to learn.</li>
          </ul>
          I went from making recipes rolling the bites by hand, to engineering
          food-grade production equipment from{" "}
          <a href="http://www.boilielab.lv/shop/">
            Latvian carp bait equipment
          </a>{" "}
          thousands at a time.
          <br></br>
        </span>
        <br></br>
        <span>
          I stopped because I could no longer build B!TS alongside working full
          time, but mostly becuase I lost conviction in what I was building. I
          didn't even like to eat (or talk about) this product by this point,
          and coming to grips with that was a difficult experience.
          <br></br>
        </span>

        <br></br>
        <span>
          In hindsight, I spent far too much time considering category
          positioning, branding, trademarking, and scaling production for the
          future which took away from time that could have been spent getting
          the product directly into the hands of consumers. More tactically, I
          also thought I had to support 4 or 5 different flavors which added
          lots of complexity to production and management when I could have just
          stuck with the best one.
          <br></br>
        </span>
        <br></br>
        <span>Find pictures from B!TS below.</span>

        <Grid container direction="row">
          <Grid item xs>
            <img className="workimg" src={packaging} />
          </Grid>
          <Grid item xs>
            <img className="workimg" src={packaging2} />
          </Grid>
          <Grid item xs>
            <img className="workimg" src={deliver} />
          </Grid>
          <Grid item xs>
            <img className="workimg" src={production} />
          </Grid>
          <Grid item xs>
            <img className="workimg" src={Rig} />
          </Grid>
        </Grid>
      </span>
    </span>
  );
};

export default BITS;
