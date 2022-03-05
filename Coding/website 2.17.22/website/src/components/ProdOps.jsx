import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Grid from "@mui/material/Grid";

const ProdOps = () => {
  return (
    <span>
      <Grid container space={0} direction="row" justifyContent="flex-start">
        <Grid item xs={1} alignItems="center">
          <Navbar />
        </Grid>
      </Grid>
      <span className="paragraph">
        <span>
          I began working in Product Ops after joining Uber as an analyst and
          building hacky python-based tools to support Account Management teams
          to work proactively. In my role as an analyst, it was my job to create
          analytics & solutions asap for problems that existed but I put in
          extra time to try to solve the problems at their true root-cause.
          Joining Product Ops let me partner more closely with those who were
          working towards these longer term solutions.{" "}
        </span>

        <br></br>
        <span>
          Product Ops was my first experience working with engineering, design,
          and data science. I began by immersing myself in design books, and
          understanding how I can add value to engineering & data science
          partners without getting too technical myself.
        </span>
        <br></br>
        <span>
          I tell people that product ops is responsible for three things
          <ol>
            <li>Product Quality</li>
            <li>Change Management</li>
            <li>
              Informing product roadmapping with insights from the business
            </li>
          </ol>
          and that Product Ops should be responsible for the more urgent and
          less strategic aspects of product development. I've written more about
          Product Ops{" "}
          <a href="https://jasontgirouard.medium.com/the-product-manager-product-ops-relationship-eabb69a5b753">
            here
          </a>{" "}
          and{" "}
          <a href="https://jasontgirouard.medium.com/how-to-get-10x-the-value-from-your-product-analysis-94adf24fa327">
            here
          </a>
          .
        </span>
        <br></br>
        <span>
          Being a Product Manager, I've gained a new perspective on Prod Ops and
          how the role enables PMs to focus on what can maximize leverage,
          rather than be consumed by what's urgent. I continue to think a lot
          about Product Ops and will most likely write more on the topic.
        </span>
      </span>
    </span>
  );
};

export default ProdOps;
