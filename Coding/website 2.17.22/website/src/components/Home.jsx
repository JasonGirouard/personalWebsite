import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import "../App.css";

const Home = () => {
  return (
    <span className="section">
      <Grid
        container
        spacing={1}
        justifyContent="Center"
        alignItems="Center"
        direction="row"
        maxWidth={"800px"}
      >
        <Grid item xs>
          <span className="card">
            <Grid>
              <Grid item xs>
                <span className="welcome-text">Welcome, new friend</span>
              </Grid>
              <Grid item xs>
                <span>
                  {" "}
                  <br></br>My name is Jason Girouard, and I'm currently located
                  in NYC. This site exists to share a little about who I am, and
                  for me to practice low-level web development. Want to get in
                  touch? Please reach out below — I'm always open to
                  conversation.{" "}
                </span>
              </Grid>
            </Grid>
          </span>
          <Grid item xs>
            <Link
              to={{
                pathname: "/Contact",
              }}
            >
              <span className="section newc section2">Contact Me</span>
            </Link>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
          justifyContent="Center"
          alignItems="Center"
          justify="Center"
          align="Center"
          maxWidth={"800px"}
          item
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

export default Home;
