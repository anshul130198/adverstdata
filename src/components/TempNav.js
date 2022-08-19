import React from "react";
import { Link } from "react-router-dom";

export const TempNav = () => {
  return (
    <div style={{border: '1px dashed black', padding: '5px'}}> 
      <Link style={{margin: '5px'}} to="/">login</Link>
      <Link style={{margin: '5px'}} to="/jobs">jobs</Link>
    </div>
  );
};
