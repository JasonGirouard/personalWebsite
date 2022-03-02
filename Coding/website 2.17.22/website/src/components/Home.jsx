import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import "../App.css";

const Home = () => {
  return (
    <span className="section">
      <Grid
        container
        spacing={3}
        justifyContent="Center"
        alignItems="Center"
        direction="row"
        minWidth={"800px"}
        maxWidth={"80vw"}
      >
        <Grid item>
        <span className="card">
          <Grid>
            <Grid item>
          <span className="welcome-text">Welcome, new friend</span>
          </Grid>
          <Grid item>
          <span> My name is Jason Girouard, and I'm currently located in NYC. This site exists to share a little about who I am, and for me to practice low-level web development. Want to get in touch? Please reach out below — I'm always open to conversation. </span>
          </Grid>
          </Grid>
          </span>
          <Link
                to={{
                  pathname: "/Contact",
                }}
              >
                <span className="section newc section2">Contact Me</span>
              </Link>
        </Grid>
        <Grid
          container
          spacing={3}
          justifyContent="Center"
          alignItems = "Center"
          justify="Center"
          align="Center"
          
         // direction="row"
          minWidth={"800px"}
          maxWidth={"80vw"}
          item
          // note that I should make this intelligent so that it adjusts the width depending on the screensize
          // columnSpacing = {6}
          // rowSpacing = {3}
        >
          <Grid item xs>
            <span className="card melon restrained">
              <Link
                to={{
                  pathname: "/Work",
                }}
              >
                <span className="section clear">Work</span>
              </Link>
            </span>
          </Grid>
          <Grid item xs>
            <span className="card blackberry restrained">
              <Link
                to={{
                  pathname: "/Life",
                }}
              >
                <span className="section clear">Life</span>
              </Link>
            </span>
          </Grid>
          <Grid item xs>
            <span className="card grapefruit restrained">
              <Link
                to={{
                  pathname: "/Projects",
                }}
              >
                <span className="section clear">Projects</span>
              </Link>
            </span>
          </Grid>
        </Grid>
      </Grid>
    </span>
  );
};

// const Home = () => (
//     <div>
//       <h1>Loading</h1>
//     </div>
//   );

export default Home;
