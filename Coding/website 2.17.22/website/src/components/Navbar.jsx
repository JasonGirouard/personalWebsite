import React from "react";
import { useNavigate } from "react-router-dom";
// import Grid from "@mui/material/Grid";
// import Button from "@mui/material/Button";

const Navbar = () => {
  const navigate = useNavigate();
  
    return (
        <>
          <button className = "section back" onClick={() => navigate(-1)}>←</button>
        </>
    )

};


// note that I should center the items

// function Navbar() {
//   return (
//     <Grid
//       container
//       justifyContent="flex-start"
//       direction="column"
//       alignItems="center"
//       // alignItems = "baseline"
//     >
//       <Link
//         to={{
//           pathname: "/Home",
//         }}
//       >
//         <span className="section">Home</span>
//       </Link>
//     </Grid>
//   );
// }

export default Navbar;
