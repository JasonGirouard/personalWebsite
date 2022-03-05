import React from "react";
import Grid from "@mui/material/Grid";
import photo from "./utils/jg.png";
import Navbar from "./Navbar";
import linkedin from "./utils/LinkedIn_logo_initials.png";
import twitter from "./utils/Twitter-Logo.png";
import medium from "./utils/medium.png";
import gmail from "./utils/gmail.png";

const Contact = () => {
  return (
    <span className="section">
      <Grid container space={0} direction="row" justifyContent="flex-start">
        <Grid item xs={1} alignItems="center">
          <Navbar />
        </Grid>
      </Grid>

      <span className="card">
        <Grid
          container
          spacing={1}
          justifyContent="center"
          alignItems="center"
          direction="row"
          maxWidth={"800px"}
        >
          <Grid item xs container spacing={3}>
            <Grid item xs>
              <Grid item xs>
                <span>Please reach out and say</span>
              </Grid>
              <Grid item xs>
                <span className="welcome-text">hello</span>
              </Grid>
            </Grid>

            <Grid
              item
              container
              spacing={1}
              justifyContent="Center"
              direction="column"
            >
              <Grid item>
                <a href="mailto:jasontgirouard@gmail.com" target="_blank">
                  <img className="logo" src={gmail} alt="gmailphoto" />
                </a>
              </Grid>

              <Grid item>
                <a
                  href="https://www.linkedin.com/in/jasongirouard/"
                  target="_blank"
                >
                  <img className="logo" src={linkedin} alt="linkedinphoto" />
                </a>
              </Grid>
              <Grid item>
                <a href="https://twitter.com/jason_girouard" target="_blank">
                  <img className="logo" src={twitter} alt="twitterphoto" />
                </a>
              </Grid>
              <Grid item>
                <a href="https://medium.com/@jasontgirouard" target="_blank">
                  <img className="logo" src={medium} alt="mediumphoto" />
                </a>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs>
            <span>
              <img className="Contactimg" src={photo} alt="jason" />
            </span>
          </Grid>
        </Grid>
      </span>
    </span>
  );
};

export default Contact;
