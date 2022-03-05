import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <button className="section back" onClick={() => navigate(-1)}>
        ←
      </button>
    </>
  );
};

export default Navbar;
