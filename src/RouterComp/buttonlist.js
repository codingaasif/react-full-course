import React from "react";
import { useNavigate } from "react-router-dom";

const Buttonlist = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Navigation onClick</h1>
      <button onClick={() => navigate("/router0004")}>Go About Page</button>
      <br />
      <br />
      <button onClick={() => navigate("/router00004")}>Go Filter Page</button>
    </div>
  );
};

export default Buttonlist;
