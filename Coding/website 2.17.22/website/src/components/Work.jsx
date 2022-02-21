import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

import Grid from "@mui/material/Grid";
// import Product from "./utils/productphoto.png";
// import ProdOps from "./utils/prodopsphoto.png";
// import Analyst from "./utils/analystphoto.png";

// const Home = () => {
//   return (
//     <Navbar />,
//     console.log("test"),
//     "In Home");
// };

const Work = () => {

  return (
    <span>
      <Grid container space={0} direction="row" justifyContent="flex-start">
        <Grid item xs={1} alignItems="center">
          <Navbar />
        </Grid>
      </Grid>
      <span className="paragraph">
        <span className="italic">
          The purpose of writing my work experience here is to use a
          story-telling format that is less linear and more contextual than a
          traditional CV. Click on the hyperlinks to learn more about each
          topic.
        </span>
        <br></br>
        <span>
          For work, I'm currently working as a <b>Product Manager</b> at Uber. I
          grew into this role after spending ~2 years in{" "}
          <Link
            to={{
              pathname: "/ProdOps",
            }}
          >
            Product Operations
          </Link>{" "}
          and before then, as an analyst. I knew I wanted to be a PM when I
          first joined Uber and discovered product management.
        </span>

        <br></br>
        <span>
          Prior to Uber, I spent 18 months in a <Link
            to={{
              pathname: "/RotationalProgram",
            }}
          >
            Rotational Program
          </Link>{" "}
          at a large wholesaler -- I mostly focused on warehouse automation.
        </span>
        <br></br>
        <span>
          While working for the wholesaler, I tried my hand at starting a CPG
          brand named <Link
            to={{
              pathname: "/BITS",
            }}
          >
            B!TS
          </Link>. We got it into a few stores, but it
          ultimately didn't take off.
        </span>
        <br></br>
        <span>
          Growing up, between 14 and 18 years old, I turned my hobby of making
          Youtube sketch videos into <Link
            to={{
              pathname: "/Videos",
            }}
          >
            semi-professional video-contest entry
          </Link>. I made enough money here to pay for college.
        </span>
      </span>
    </span>
  );
};

export default Work;
