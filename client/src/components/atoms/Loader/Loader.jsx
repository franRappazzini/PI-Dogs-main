import "./Loader.css";

import React from "react";
import gif from "../../../assets/img/loader2.gif";

function Loader() {
  return (
    <div className="loader_container">
      {/* <div className="lds-dual-ring"></div> */}
      <img src={gif} alt="loader" className="gif_loader" />
    </div>
  );
}

export default Loader;
