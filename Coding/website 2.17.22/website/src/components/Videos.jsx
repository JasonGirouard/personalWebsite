import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Grid from "@mui/material/Grid";

import video1 from './utils/videos/video1.png';
import video2 from './utils/videos/video2.png';
import video3 from './utils/videos/video3.png';
import video4 from './utils/videos/video4.jpeg';

const Videos = () => {
  return (
    <span>
      <Grid container space={0} direction="row" justifyContent="flex-start">
        <Grid item xs={1} alignItems="center">
          <Navbar />
        </Grid>
      </Grid>
      <span className="paragraph">
        <span>
        At 13 years old a school project turned into a hobby with my best friend — we made Youtube videos every week for the next 2 years. We loved the YouTube community, the practice of making & editing videos, and building a small audience that would tune in every week to watch the latest upload. After a few rejections, we were accepted to the Youtube Partner program which gave us ad-revenue from our videos. 

        </span>
        <br></br>
        <span>Google used Youtube to strongly advertise a video contest in which they were giving away 100 Google TVs. The entrants were few and far between, and our medicore entry won ourselves a TV that we sold for ~$700. That beat the $500 we earned in ad-revenue over the past year of making videos and I instantly knew there was more opportunity here. 
</span>
<br></br>

<span>
Over the next few years I entered over 50 video contests that I found from the aptly named onlinevideocontests.com and placed in ~25 of them (just google “Jason Giroaurd Video Contest”). I found success in focusing on the expected value (probability of winning * amount to be won), and that poorly advertised contests with under-eighteen categories and prizes between $500 and $1,000 gave me the best expected value by decreasing the quality & size of the competition. I kept my costs near-zero. 
</span>
        <br></br>
        <span>
        From Google to the Illinois Corn Growers Assocation, to Intel, to the National Cattlemen’s, I didn’t limit my entries based on what I knew or what I was good at — I tailored my content to the judging criteria if one was available and treated it as a job. By 18, I had made ~$25,000 from video-contests, all of which I used for college. From a young age, my foray into video contests probably had the largest impact on shaping me to identify opportunities, think carefully about winning angles, and that taking action above all is a successful starting strategy. 
        </span>
        <br></br>
        
     

      <Grid
      container direction = "row"
      >
        <Grid item xs>
        <img className = "workimg" src={video4} />
        </Grid>
        
        <Grid item xs>
        <img className = "workimg" src={video3} />
        </Grid>

        <Grid item xs>
        <img className = "workimg" src={video1} />
        </Grid>
       
        <Grid item xs>
        <img className = "workimg2" src={video2} />
        </Grid>
       
        </Grid>
        </span>

    </span>
  );
};

export default Videos;
