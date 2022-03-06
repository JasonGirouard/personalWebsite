import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";

const Projects = () => {
  window.scrollTo(0, 0);
  return (
    <span>
      <Grid container space={0} direction="row" justifyContent="flex-start">
        <Grid item xs={1} alignItems="center">
          <Navbar />
        </Grid>
      </Grid>
      <span className="paragraph">
      <span className="italic">
        <br></br>
        The purpose of this section is to house past or present dev projects, as
        well as thoughts future projects. Currently, it's mostly the latter. If
        you have thoughts on any of these topics, I'd love to chat! Please{" "}
        <Link
          to={{
            pathname: "/Contact",
          }}
        >
          contact me
        </Link>
        .
      </span>
      <br></br>

      <span className="paragraph">
        <br></br>
        <span>
          I’d love to address the problem of{" "}
          <b>
            car dependency and it’s impact on American’s wallets, time, and
            happiness
          </b>
          . Here are a few stats:
        </span>

        <ul>
          <li>
            Average travel time to work in the US has been increasing through
            2020. Longer commutes (60 minutes+) have been increasing fastest,
            from 8% of US workers in 2006 to 10% in 2019 (
            <a href="https://www.census.gov/content/dam/Census/library/publications/2021/acs/acs-47.pdf">
              src
            </a>
            ). The pandemic and shift to more remote work will only make a dent
            in this trend.{" "}
          </li>
          <li>
            Car costs are enormous (~$7,200 / year for car payment + insurance,
            ~12% of total household income)(
            <a href="https://www.businesswire.com/news/home/20210624005254/en/Cost-of-Car-Ownership-in-the-U.S.-the-Average-American-Household-Spends-5435-a-Year-on-Auto-Loans-and-Auto-Insurance-Combined">
              src
            </a>
            ). Most households have 2 cars. This excludes costs of maintenace
            which may bring the total near $10,000.
          </li>

          <li>
            Commuting is one of the largest drivers of unhappiness & depression.
            This seems to be one of the very few areas of consensus amongst
            happiness researchers (
            <a href="https://www.sciencedirect.com/science/article/pii/S2214140518306169">
              src
            </a>
            ).
          </li>
        </ul>

        <span>
          It seems to reason that if you were to improve meaningfully on any
          single dimension of cost, happiness, you can improve the experience on
          the other two for free. Here’s a few:
        </span>

        <ul>
          <li>
            Luxury commute buses. For $300-$500 per month (half the cost of the
            average annual car expense, or getting rid of one car), we’ll
            commute you to work with reliable wifi & motion-cancelling seats.
            Net-zero cost, and you get happiness & for free. I’d love to target
            a suburb with a high density of commuters going into the city with
            relatively poor existing public transit infrastructure, such as
            Columbia to Baltimore, MD (13% commute 60 min+), Mursfeesboro, TN or
            Franklink TN to Nashville (10% have commute of 60 minutes or more),
            or Alpharetta to Atlanta Georgia (14% commute 60 min+) (
            <a href="https://www.census.gov/content/dam/Census/library/publications/2021/acs/acs-47.pdf">
              src
            </a>
            ). https://thejet.coach/ seems to be piloting something like this
            for NYC-DC. After you nail the luxury market, you can start moving
            improving the accessibility of the solution.
          </li>
          <li>
            Near-free Uber for commuting. You “schedule” a ride from your suburb
            to the city and indicate if you’re willing to drive — must do
            round-trips. Passengers pay the person who opted to drive a small
            fee for picking them up and dropping them off. We take a slice of
            that fee, as well as the offsets for removing 3 cars from the road.
            Cold-starting here would be especially difficult, but targetting one
            of the metro areas listed above would probably be a good-start. It
            might also help to pay people to initially "pretend" to be
            commuters.
          </li>
        </ul>
      </span>
      <hr />
      <span className="paragraph">
        <br></br>
        <span>
          I’d love to capture the difference between what a buyer is{" "}
          <b>willing to pay</b> and what they <b>actually pay</b>.
        </span>
        <br></br>
        <br></br>

        <span>
          One area where you see this happen is in goods whose price isn’t a
          function of their cost & labor (e.g. vintage clothing, used items,
          art, jewlery). Example: You’re surprised to see that the vintage
          clothing store lists the jacket for only $100 — you would be willing
          to pay $200 for such a jacket.
        </span>
        <br></br>
        <br></br>

        <span>
          One solution to capitalize on this would be to introduce & popularize{" "}
          <b>blind auctions</b> for such goods. The seller could list a minimum
          price they would sell for, and the auction closes after 1 week. Either
          the highest blind-bid above the floor price wins, or the item doesn’t
          sell. The platform could take a flat-fee, or a portion of the selling
          price above the floor.
        </span>
        <br></br>
        <br></br>

        <span>
          Depending on the kind of experiments that eBay has explored around
          blind auctions, this may or may not be a good idea.
        </span>
        <br></br>
      </span>
    </span>
    </span>
  );
};

export default Projects;
