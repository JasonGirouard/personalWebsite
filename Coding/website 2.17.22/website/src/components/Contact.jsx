import React from "react";
import Grid from "@mui/material/Grid";
import photo from "./utils/jg.png";
import Navbar from "./Navbar";

// const Home = () => {
//   return (
//     <Navbar />,
//     console.log("test"),
//     "In Home");
// };

const Contact = () => {
  return (
<span className = "section">
<Grid container space={0} direction="row" justifyContent="flex-start">
        <Grid item xs={1} alignItems="center">
          <Navbar />
        </Grid>
      </Grid>

    <span className="card">


      <Grid
        container
        spacing={3}
        justifyContent="Center"
        direction="row"
        minWidth={"300px"}
        maxWidth={"80vw"}
      >
        <Grid item xs
        container spacing ={3}
        >

          <Grid item xs>
            <Grid item xs>
              <span>Please reach out and say</span>
            </Grid>
            <Grid item xs>
              <span className="welcome-text">hello</span>
            </Grid>
          </Grid>


          <Grid item
          container
          spacing={1}
          justifyContent="Center"
          direction="column"
          >
            <Grid item>jasontgirouard@gmail.com</Grid>
            <Grid item>linkedin</Grid>
            <Grid item>twitter</Grid>
            <Grid item>Medium</Grid>
          </Grid>
        </Grid>

        <Grid item xs = {3}
        // maxWidth={"100px"}
        // maxHeight={"100px"}
        >
          <span>
            <img className = "Contactimg" src={photo} alt="jason" />
          </span>
        </Grid>
      </Grid>
    </span>
    </span>
  );
};

export default Contact;
